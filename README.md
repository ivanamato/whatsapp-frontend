# WhatsApp Inbox

Embeddable WhatsApp inbox UI library. Framework-agnostic — works with Vue, React, Angular, or plain HTML. Connects directly to the [Evolution API](https://doc.evolution-api.com/) from the browser.

Built with [Preact](https://preactjs.com/) + [Tailwind CSS v4](https://tailwindcss.com/). No backend required.

## Features

- **Real-time messaging** — Auto-polling keeps conversations and messages updated
- **Multi-device** — Switch between multiple WhatsApp instances via a device selector
- **Template messages** — Send WhatsApp-approved templates with header, body, and button parameters
- **Interactive messages** — Button messages with up to 3 custom actions
- **Media support** — Send and receive images, videos, audio, and documents
- **Message forwarding** — Forward messages between conversations
- **Context menu** — Right-click actions (delete, forward) on messages
- **Read-only mode** — View-only access per device
- **CSS isolation** — All styles use the `wa:` prefix to avoid collisions with host apps

## Installation

Published to [npm](https://www.npmjs.com/package/@ivanamato/whatsapp-inbox) as `@ivanamato/whatsapp-inbox`.

```bash
npm install @ivanamato/whatsapp-inbox
```

## Quick Start

### Using the UMD bundle (any framework or plain HTML)

```html
<link rel="stylesheet" href="whatsapp-inbox.css" />
<script src="whatsapp-inbox.umd.js"></script>

<div id="inbox" style="height: 100vh;"></div>

<script>
  const inbox = WhatsAppInbox.mount(document.getElementById('inbox'), {
    devices: [
      {
        id: 'main',
        label: 'My WhatsApp',
        apiUrl: 'https://your-evolution-api.com',
        instanceToken: 'your-instance-token',
        instanceName: 'your-instance',
        providerType: 'evolution',
      },
    ],
    defaultDeviceId: 'main',
  });

  // Later: inbox.unmount();
</script>
```

### Using the ES module

```js
import { mount } from '@ivanamato/whatsapp-inbox';
import '@ivanamato/whatsapp-inbox/style.css';

const inbox = mount(document.getElementById('inbox'), {
  devices: [
    {
      id: 'main',
      label: 'My WhatsApp',
      apiUrl: 'https://your-evolution-api.com',
      instanceToken: 'your-instance-token',
      instanceName: 'your-instance',
    },
  ],
});

// Later: inbox.unmount();
```

## Configuration

The `mount()` function accepts an element and a config object:

```ts
type DeviceConfig = {
  id: string;
  label?: string;
  apiUrl: string;
  instanceToken: string;
  instanceName: string;
  providerType?: 'evolution' | 'cloud';
  readonly?: boolean;
};

type WhatsAppMultiDeviceConfig = {
  devices: DeviceConfig[];
  defaultDeviceId?: string;
};
```

| Field | Required | Description |
|-------|----------|-------------|
| `devices` | Yes | Array of device configurations |
| `devices[].id` | Yes | Unique identifier for the device |
| `devices[].apiUrl` | Yes | Evolution API base URL |
| `devices[].instanceToken` | Yes | Per-instance token from Evolution API (see [Security](#security)) |
| `devices[].instanceName` | Yes | Evolution API instance name |
| `devices[].label` | No | Display name in the device selector |
| `devices[].providerType` | No | `'evolution'` (default) or `'cloud'` |
| `devices[].readonly` | No | If `true`, disables sending messages |
| `defaultDeviceId` | No | ID of the device to select on mount |

## Security

This library uses **per-instance tokens** instead of the Evolution API global key. Each token is scoped to a single WhatsApp instance — if a token is compromised, only that instance is affected (not your entire Evolution API server).

To obtain the per-instance token:

```bash
curl -H "apikey: YOUR_GLOBAL_KEY" https://your-api.com/instance/fetchInstances
```

Each instance in the response has a `token` field — use that as `instanceToken`.

> **Important:** Never use the global API key in client-side code. The global key grants access to all instances and should only be used server-side for administration.

## Examples

See the [`examples/`](./examples) directory:

- **[`examples/vue3/`](./examples/vue3)** — Vue 3 Composition API integration with a config form and localStorage persistence

To run the Vue 3 example:

```bash
make build
# Serve the project root with any HTTP server
python3 -m http.server 8000
# Open http://localhost:8000/examples/vue3/
```

## Development

### Prerequisites

- Node.js 18+
- An [Evolution API](https://doc.evolution-api.com/) instance with CORS enabled (`CORS_ORIGIN=*`)

### Setup

```bash
make install
```

Create a `devices.json` file in the project root (see [`devices.example.json`](./devices.example.json)):

```json
{
  "devices": [
    {
      "id": "dev-1",
      "label": "Dev Instance",
      "apiUrl": "https://your-evolution-api.com",
      "instanceToken": "your-per-instance-token",
      "instanceName": "your-instance"
    }
  ]
}
```

### Commands

```bash
make dev             # Start Vite dev server
make build           # Build library → dist/
make preview         # Preview the built library
make lint            # Run ESLint
make typecheck       # Run TypeScript type check
make clean           # Remove dist/ and node_modules/
just release-minor   # Bump minor, push tag, create release → publishes to npm
just release-major   # Bump major, push tag, create release → publishes to npm
```

### Build Output

```
dist/
  whatsapp-inbox.es.js    ~395 KB  (ES module)
  whatsapp-inbox.umd.js   ~245 KB  (UMD, works with <script> tags)
  whatsapp-inbox.css       ~35 KB  (prefixed styles)
  index.d.ts                       (TypeScript declarations)
```

All dependencies (including Preact) are bundled — no peer dependencies required.

## Architecture

```
src/
  index.ts                  # Library entry: mount() / unmount() API
  App.tsx                   # Main layout (teal bar, sidebar, message view)
  dev.tsx                   # Dev server entry (reads devices.json)
  components/
    instance-selector.tsx   # Device selector dialog
    conversation-list.tsx   # Left sidebar with chat list
    message-view.tsx        # Right panel with messages and composer
    media-message.tsx       # Image/video/document/audio rendering
    audio-player.tsx        # Custom audio player
    forward-message-dialog.tsx
    template-selector-dialog.tsx
    template-parameters-dialog.tsx
    interactive-message-dialog.tsx
    message-context-menu.tsx
    ui/                     # shadcn/ui components (dialog, scroll-area, etc.)
  lib/
    providers/
      types.ts              # WhatsAppProvider interface, DeviceConfig, Chat, Message
      evolution.ts          # Evolution API v2 implementation (browser fetch)
      index.ts              # createProvider() factory
    provider-context.tsx    # Preact context for multi-device state
  hooks/
    use-auto-polling.ts     # Polling hook with visibility detection
```

### Key Patterns

- **No backend** — All API calls (`findChats`, `sendText`, `getMediaUrl`, etc.) happen directly from the browser via the provider abstraction.
- **Per-instance tokens** — Each device authenticates with its own scoped token, not the global API key. Tokens are generated by Evolution API when an instance is created.
- **Provider system** — Implement the `WhatsAppProvider` interface to add new backends. Currently supports Evolution API v2.
- **Preact with compat** — Uses Preact with `preact/compat` so all React-ecosystem libraries (Radix UI, lucide-react) work unchanged.
- **CSS isolation** — Tailwind v4 with `wa:` prefix (e.g. `wa:flex`, `wa:p-4`). CSS variables namespaced as `--wa-*`.
- **JID/LID deduplication** — Merges phone-based JIDs and anonymous Logical IDs using `remoteJidAlt`.

## License

MIT
