# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Skills

- **th0th-memory** (`~/.claude/skills/th0th-memory/SKILL.md`) — Prioritize th0th MCP tools (`th0th_index`, `th0th_search`, `th0th_remember`, `th0th_recall`, `th0th_compress`, `th0th_optimized_context`, `th0th_analytics`) over native tools (Glob, Grep, Read) for code search, architecture understanding, storing decisions, and context compression. Use native tools only as fallback.

## Commands

Available via `make` (run `make help` to list all):

```bash
make install         # Install dependencies
make dev             # Start Vite dev server (reads devices.json)
make build           # Build library (ES + UMD + CSS + .d.ts) → dist/
make preview         # Serve built library locally
make lint            # Run ESLint
make typecheck       # Run TypeScript type check
make clean           # Remove dist and node_modules
```

Release commands live in a gitignored `justfile` (requires [just](https://github.com/casey/just)):

```bash
just release-minor   # Bump minor version, push, and create GitHub release
just release-major   # Bump major version, push, and create GitHub release
```

## Architecture

Embeddable WhatsApp inbox UI library built with Vite (library mode) + Preact + Tailwind CSS v4. No backend — all API calls happen directly from the browser via the provider abstraction.

### Entry Point

`src/index.ts` exports a `mount(element, config)` / `unmount(element)` API for framework-agnostic embedding, plus React components and types for direct React usage.

```ts
import { mount } from '@ivanamato/whatsapp-inbox'
import '@ivanamato/whatsapp-inbox/style.css'

const inbox = mount(el, {
  devices: [{
    id: 'main',
    apiUrl: 'https://your-evolution-api.com',
    instanceToken: 'your-per-instance-token',
    instanceName: 'your-instance',
  }],
})
inbox.unmount()
```

### Provider System

Components call the WhatsApp API directly via `useProvider()` hook (no API routes). The provider is injected via `ProviderProvider` React context.

- **`src/lib/providers/types.ts`** — `WhatsAppProvider` interface and normalized types (`DeviceConfig`, `Chat`, `Message`, etc.)
- **`src/lib/providers/evolution.ts`** — Evolution API v2 implementation (browser `fetch()`, no Node.js APIs). Authenticates with per-instance tokens (not the global API key).
- **`src/lib/providers/index.ts`** — `createProvider(type, apiUrl, instanceToken)` factory
- **`src/lib/provider-context.tsx`** — React context (`ProviderProvider` / `useProvider()`)

To add a new provider: implement `WhatsAppProvider`, add a case in `createProvider()`.

### Frontend

`src/App.tsx` is the main app component, composed of:

- **`InstanceSelector`** — Dropdown to pick a WhatsApp instance
- **`ConversationList`** — Left sidebar with chat list (exposes `refresh()` via ref)
- **`MessageView`** — Right panel with message thread and composer

`src/dev.tsx` is the dev server entry point (reads `devices.json`, renders `App` inside `ProviderProvider`).

Auto-polling via `src/hooks/use-auto-polling.ts` (10s conversations, 5s messages, pauses when tab hidden).

### Key Patterns

- **No backend.** Components call `provider.findChats()`, `provider.sendText()`, etc. directly. Requires CORS on the Evolution API (`CORS_ORIGIN=*`). Uses per-instance tokens (not the global API key) so each device can only access its own instance.
- **Per-instance tokens.** Each device authenticates with its own scoped token from the Evolution API. The token is generated when the instance is created and only grants access to that single instance. Never use the global API key in the browser.
- **Tailwind v4 prefix.** All classes use `wa:` prefix (e.g. `wa:flex`, `wa:p-4`) to avoid collisions when embedded in host apps. CSS vars are namespaced as `--wa-*`.
- **JID/LID deduplication.** WhatsApp uses both phone-based JIDs (`number@s.whatsapp.net`) and anonymous Logical IDs (`randomid@lid`). The provider merges these using `remoteJidAlt`.
- **Media as base64.** `provider.getMediaUrl()` returns data URIs. File uploads are read client-side via `FileReader` before sending to `provider.sendMedia()`.
- **UI components** use shadcn/ui (Radix + Tailwind) in `src/components/ui/`.

### Build Output

Vite library mode produces:
- `dist/whatsapp-inbox.es.js` — ES module
- `dist/whatsapp-inbox.umd.js` — UMD module
- `dist/whatsapp-inbox.css` — Prefixed styles
- `dist/index.d.ts` — TypeScript declarations

## Publishing

Package is published to GitHub Packages as `@ivanamato/whatsapp-inbox`. A GitHub Actions workflow (`.github/workflows/publish.yml`) automatically builds and publishes on every GitHub Release.

- **Release commands:** `just release-minor` or `just release-major` bump the version, push the tag, and create a GitHub release (which triggers the publish workflow). The justfile is gitignored.
- **Registry config:** `.npmrc` scopes `@ivanamato` to `https://npm.pkg.github.com`.
- **`publishConfig`** in `package.json` points to GitHub Packages.

To install in another project:

```bash
# .npmrc (one-time per project)
@ivanamato:registry=https://npm.pkg.github.com

# Install
npm install @ivanamato/whatsapp-inbox
```

## Environment

Dev server reads `devices.json` from the project root (see `devices.example.json`). Each device uses a **per-instance token** from the Evolution API — never use the global API key.

To get the per-instance token: call `GET /instance/fetchInstances` with the global API key and look for the `token` field on each instance. Then use that token as `instanceToken` in `devices.json`.

```json
{
  "devices": [{
    "id": "my-device",
    "label": "My WhatsApp",
    "apiUrl": "https://your-evolution-api.com",
    "instanceToken": "PER-INSTANCE-TOKEN-HERE",
    "instanceName": "your-instance"
  }]
}
```
