# WhatsApp Inbox

Embeddable WhatsApp inbox UI library. Framework-agnostic — works with Vue, React, Angular, or plain HTML. Connects directly to the [Evolution API](https://doc.evolution-api.com/) from the browser.

Built with [Preact](https://preactjs.com/) + [Tailwind CSS v4](https://tailwindcss.com/). No backend required.

## Features

- **Real-time messaging** — Auto-polling keeps conversations and messages updated
- **Multi-device** — Switch between multiple WhatsApp instances via a device selector
- **Imperative API** — Programmatic access to chats, messages, devices, and sending from outside React
- **Custom chat actions** — Configurable action buttons per chat row driven by the host app
- **Chat tags & filtering** — Colored tag pills on each chat, resolved by the host app, with clickable filter chips to narrow the list
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

  // Use the imperative API
  const chats = await inbox.getChats();
  await inbox.sendText({ to: '5511999999999@s.whatsapp.net', body: 'Hello!' });

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

// Use the imperative API
const chats = await inbox.getChats();
const messages = await inbox.getMessages(chats[0].id);

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
  translations?: Partial<Translations>;
  chatActions?: ChatActionsResolver;
  chatTags?: ChatTagsResolver;
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
| `translations` | No | Override UI strings (see [Translations](#translations)) |
| `chatActions` | No | Async resolver for per-chat action buttons (see [Custom Chat Actions](#custom-chat-actions)) |
| `chatTags` | No | Async resolver for per-chat colored tag pills with filtering (see [Chat Tags](#chat-tags)) |

## Imperative API

The `mount()` function returns a `WhatsAppInbox` object with methods to programmatically control the inbox from outside the React tree. This enables host applications to integrate the inbox with their own UI, CRM systems, or automation workflows.

```ts
const inbox = mount(element, config);
```

### Methods

| Method | Returns | Description |
|--------|---------|-------------|
| `getChats()` | `Promise<Chat[]>` | Fetch all chats for the active device |
| `getMessages(chatId, limit?)` | `Promise<Message[]>` | Fetch messages for a specific chat |
| `sendText({ to, body })` | `Promise<SendResult>` | Send a text message from the active device |
| `getConnectionState()` | `Promise<'open' \| 'close' \| 'connecting'>` | Check the active device's connection state |
| `getActiveDevice()` | `string \| null` | Get the currently selected device ID (synchronous) |
| `setActiveDevice(deviceId)` | `void` | Switch the active device (synchronous) |
| `selectConversation(phoneNumber)` | `void` | Select a conversation by phone number (synchronous) |
| `unmount()` | `void` | Unmount the inbox and clean up |

### Example: Fetching chats and sending a message

```js
const inbox = mount(element, config);

// Wait for the UI to load, then fetch chats
const chats = await inbox.getChats();
console.log(`Found ${chats.length} conversations`);

// Send a message to the first chat
if (chats.length > 0) {
  const result = await inbox.sendText({
    to: chats[0].id,
    body: 'Hello from the imperative API!',
  });
  console.log('Sent message:', result.messageId);
}
```

### Example: Switching devices and checking connection

```js
// Check which device is active
console.log('Active device:', inbox.getActiveDevice());

// Switch to another device
inbox.setActiveDevice('device-2');

// Check if the new device is connected
const state = await inbox.getConnectionState();
if (state === 'open') {
  console.log('Device is connected');
}
```

### Example: Navigating to a conversation

```js
// Select a conversation by phone number — scrolls to and highlights it
inbox.selectConversation('5511999999999');
```

### Types

```ts
type Chat = {
  id: string;
  phoneNumber: string;
  contactName?: string;
  profilePicUrl?: string;
  lastActiveAt?: string;
  lastMessage?: {
    content: string;
    direction: 'inbound' | 'outbound';
    type?: string;
  };
  unreadCount?: number;
};

type Message = {
  id: string;
  direction: 'inbound' | 'outbound';
  content: string;
  createdAt: string;
  status?: string;
  phoneNumber: string;
  hasMedia: boolean;
  mediaData?: {
    url: string;
    contentType?: string;
    filename?: string;
    byteSize?: number;
  };
  messageType: string;
  caption?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  metadata?: Record<string, unknown>;
};

type SendTextParams = { to: string; body: string };
type SendResult = { messageId: string; status?: string };
```

## Custom Chat Actions

Chat actions add configurable buttons to each conversation row. When a user clicks the three-dot icon on a chat row, a dialog opens showing the contact's profile picture, name, phone number, device name, and your custom action buttons.

Actions are resolved **dynamically** via an async callback — you can return different buttons depending on the chat, the device, or external data (e.g., whether the contact already exists in your CRM).

### Configuration

Pass a `chatActions` resolver function in the config:

```js
const inbox = mount(element, {
  devices: [/* ... */],
  chatActions: async (chat, device) => {
    // Example: fetch CRM status and return different actions
    const customer = await fetch(`/api/crm/lookup?phone=${chat.phoneNumber}`)
      .then(r => r.json())
      .catch(() => null);

    if (customer) {
      return [
        {
          id: 'view-customer',
          label: 'See Customer',
          onClick: () => window.open(`/crm/customers/${customer.id}`),
        },
      ];
    }

    return [
      {
        id: 'search-customer',
        label: 'Search Customer',
        onClick: () => window.open(`/crm/search?phone=${chat.phoneNumber}`),
      },
    ];
  },
});
```

You can also return actions synchronously if no async lookup is needed:

```js
chatActions: (chat, device) => [
  {
    id: 'open-crm',
    label: 'Open in CRM',
    onClick: (chat, device) => {
      window.open(`https://crm.example.com/contacts/${chat.phoneNumber}`);
    },
  },
  {
    id: 'tag-vip',
    label: 'Tag as VIP',
    icon: StarIcon, // optional: any component accepting { className?: string }
    onClick: (chat, device) => {
      fetch('/api/tag', {
        method: 'POST',
        body: JSON.stringify({ phone: chat.phoneNumber, device: device.id, tag: 'vip' }),
      });
    },
  },
],
```

### Types

```ts
type ChatActionsResolver = (
  chat: Chat,
  device: DeviceConfig,
) => ChatAction[] | Promise<ChatAction[]>;

type ChatAction = {
  id: string;                  // Unique identifier
  label: string;               // Button text displayed in the dialog
  icon?: ComponentType<{       // Optional icon component (e.g., from lucide-react)
    className?: string;
  }>;
  onClick: (                   // Called when the user clicks the action
    chat: Chat,                // The chat's normalized data
    device: DeviceConfig,      // The device the chat belongs to
  ) => void;
};
```

### Callback parameters

The resolver and each action's `onClick` receive two arguments:

**`chat: Chat`** — The normalized chat data:
- `chat.id` — Internal chat ID (JID)
- `chat.phoneNumber` — Phone number in international format
- `chat.contactName` — Contact name (if available)
- `chat.profilePicUrl` — Profile picture URL (if available)
- `chat.lastMessage` — Last message content, direction, and type
- `chat.unreadCount` — Number of unread messages

**`device: DeviceConfig`** — The device configuration for the chat:
- `device.id` — Device ID from your config
- `device.label` — Display name
- `device.instanceName` — Evolution API instance name
- `device.apiUrl` — API base URL

### Behavior

- A three-dot icon (⋮) always appears on the right side of every chat row, regardless of whether `chatActions` is configured
- Clicking it opens a centered dialog with the contact's profile picture, name, phone number, and device name
- Custom action buttons are shown below the contact info only when a `chatActions` resolver is provided
- While the resolver is running, a loading spinner is displayed
- If the resolver throws, an error message is shown in the dialog
- Each resolved action renders as a full-width button in the dialog
- After clicking an action, the dialog closes automatically
- The dialog can also be closed with the X button, clicking the backdrop, or pressing Escape

## Chat Tags

Chat tags display colored pills on each conversation row, resolved dynamically by the host app. Users can filter the conversation list by clicking tag chips that appear above the list.

### Configuration

Pass a `chatTags` resolver function in the config:

```js
const inbox = mount(element, {
  devices: [/* ... */],
  chatTags: async (chat, device) => {
    // Example: fetch tags from your backend
    const tags = await fetch(`/api/tags?phone=${chat.phoneNumber}`)
      .then(r => r.json())
      .catch(() => []);

    return tags;
    // e.g. [{ id: 'vip', label: 'VIP', background: '#e91e63' }]
  },
});
```

Synchronous resolvers also work:

```js
chatTags: (chat, device) => {
  const tags = [];
  if (chat.unreadCount > 0) {
    tags.push({ id: 'unread', label: 'Unread', background: '#ff9800' });
  }
  if (device.id === 'support') {
    tags.push({ id: 'support', label: 'Support', background: '#2196f3' });
  }
  return tags;
},
```

### Types

```ts
type ChatTagsResolver = (
  chat: Chat,
  device: DeviceConfig,
) => ChatTag[] | Promise<ChatTag[]>;

type ChatTag = {
  id: string;            // Unique identifier (used for filtering)
  label: string;         // Text displayed in the pill
  color?: string;        // Text color (default: 'white')
  background?: string;   // Background color (default: '#00a884')
};
```

### Behavior

- Tags are resolved **eagerly** for all visible conversations (not on-click like `chatActions`)
- Tags re-resolve automatically when the conversation list updates (new fetch or poll)
- Each tag renders as a small colored pill below the contact name
- **Filtering:** All unique tags appear as clickable filter chips above the conversation list. Clicking a chip toggles it on/off. When multiple tags are selected, only conversations matching **all** selected tags are shown (AND logic)
- If the resolver throws for a chat, that chat simply has no tags

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

- **[`examples/vue3/`](./examples/vue3)** — Vue 3 Composition API integration with chat tags, async chat actions, imperative API demos, and full Brazilian/international fixture data

To run the Vue 3 example against the mock server:

```bash
make docker        # start frontend (5173) + mock server (3002)
make example-vue3  # build library + serve example at http://localhost:5174/examples/vue3/
```

## Development

### Prerequisites

- Node.js 20+
- An [Evolution API](https://doc.evolution-api.com/) instance with CORS enabled (`CORS_ORIGIN=*`), **or** use the built-in mock server (no real API needed)

### Setup

```bash
make install
```

### Running with the mock server (no real API needed)

The fastest way to get started. Starts a local Evolution API mock on port 3002 and the Vite dev server on port 5173 — no credentials required.

**With Docker (recommended):**

```bash
make docker        # Build images and start in detached mode
# Open http://localhost:5173
make docker-restart  # Rebuild and restart (after code changes)
make docker-down     # Stop the stack
```

**Without Docker:**

```bash
make mock          # Starts mock server + Vite dev server concurrently
# Open http://localhost:5173
```

Both modes use `devices.json` pre-configured to point at `http://localhost:3002` with two mock instances (`MOCK1` and `MOCK2`).

### Running with a real Evolution API

Replace `devices.json` with your real credentials:

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

Then run:

```bash
make dev
```

### Commands

```bash
make install         # Install dependencies
make dev             # Start Vite dev server (reads devices.json)
make build           # Build library → dist/
make preview         # Preview the built library
make lint            # Run ESLint
make typecheck       # Run TypeScript type check
make clean           # Remove dist/ and node_modules/
make test            # Run unit tests (Vitest)
make test-e2e        # Run e2e tests — requires: make docker
make example-vue3    # Build library + serve Vue 3 example at localhost:5174 — requires: make docker
make mock            # Start mock server + dev server locally (no Docker)
make docker          # Start full stack with Docker Compose
make docker-build    # Rebuild Docker images from scratch
make docker-down     # Stop Docker Compose stack
make docker-restart  # Stop, rebuild, and restart Docker Compose stack
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
  use-cases/
    use-app-state.ts        # Top-level app state (selected conversation, device)
    use-chat-list.ts        # Chat list fetching and polling
    use-message-thread.ts   # Message thread, sending, optimistic updates
    use-device-status.ts    # Connection status polling
mock-server/
  index.ts                  # Entry point (serves on MOCK_PORT, default 3002)
  app.ts                    # Hono router — all Evolution API routes
  fixtures.ts               # Per-instance fixture data (MOCK1, MOCK2)
  store.ts                  # In-memory state (sent messages, media, contacts, unread)
```

### Key Patterns

- **No backend** — All API calls (`findChats`, `sendText`, `getMediaUrl`, etc.) happen directly from the browser via the provider abstraction.
- **Per-instance tokens** — Each device authenticates with its own scoped token, not the global API key. Tokens are generated by Evolution API when an instance is created.
- **Provider system** — Implement the `WhatsAppProvider` interface to add new backends. Currently supports Evolution API v2.
- **Preact with compat** — Uses Preact with `preact/compat` so all React-ecosystem libraries (Radix UI, lucide-react) work unchanged.
- **CSS isolation** — Tailwind v4 with `wa:` prefix (e.g. `wa:flex`, `wa:p-4`). CSS variables namespaced as `--wa-*`.
- **JID/LID deduplication** — Merges phone-based JIDs and anonymous Logical IDs using `remoteJidAlt`.
- **Optimistic sends** — Messages appear immediately in the thread with a pending status; the chat list refreshes after the send resolves.
- **Chat list reactivity** — `ConversationList` exposes a `refresh()` ref method called after sending, template sends, and on mount.

### Mock Server

The mock server (`mock-server/`) is a [Hono](https://hono.dev/) HTTP server that replicates the Evolution API v2 contract. It is used for local development and Docker-based demos — no real WhatsApp credentials needed.

**Implemented endpoints:**

| Endpoint | Method | Description |
|---|---|---|
| `/instance/connectionState/:instance` | GET | Returns `{ instance: { state: 'open' } }` |
| `/chat/findChats/:instance` | POST | Returns chat list, dynamically updated with sent messages and unread counts |
| `/chat/findContacts/:instance` | POST | Returns contacts, merged with dynamically created contacts |
| `/chat/findMessages/:instance` | POST | Returns paginated messages; marks chat as read (clears unread) |
| `/chat/getBase64FromMediaMessage/:instance` | POST | Returns stored base64 for sent media; placeholder for fixture media |
| `/message/sendText/:instance` | POST | Stores message, triggers delivery progression and auto-reply |
| `/message/sendMedia/:instance` | POST | Stores message + actual base64 payload for later retrieval |
| `/message/sendButtons/:instance` | POST | Stores button message with full structure |
| `/chat/deleteMessageForEveryone/:instance` | DELETE | Marks message deleted; emits REVOKE protocol message |

**Realistic behaviors:**
- **Auth** — Validates `apikey` header; returns 401 for unknown tokens, 404 for unknown instances
- **Message delivery** — Status progression: `PENDING` → `SERVER_ACK` (300ms) → `DELIVERY_ACK` (1.5s) → `READ` (2–3s)
- **Auto-reply** — Each sent message triggers an "Example response" reply after 2–3s, from the correct contact name (or a random group participant for group chats)
- **Chat list updates** — `findChats` dynamically merges fixture chats with store messages, recomputes `lastMessage`, `updatedAt`, and `unreadCount`; sorts by most recent
- **Unread count** — Increments on incoming messages; resets to 0 when `findMessages` is called for that chat (simulates opening)
- **New contacts** — Sending to an unknown JID auto-creates a contact entry
- **Group JID resolution** — Bare numbers (e.g. `120363012345678901`) are matched against known JIDs to restore the correct suffix (`@g.us`, `@s.whatsapp.net`)
- **Media storage** — Actual base64 payloads are stored by message ID and returned by `getBase64FromMediaMessage`
- **Message deletion** — Emits a `protocolMessage` REVOKE event so the 5s poller picks up live deletions
- **Deduplication** — Messages deduplicated by ID to handle LID + phone JID overlaps

**Two mock instances:**
- `MOCK1` — Brazilian contacts (Ana Beatriz, Carlos Eduardo, Equipe Vendas group, Fernanda Lima, Roberto Mendes)
- `MOCK2` — International contacts (Sarah Johnson, James Wright, Product Team group, Miguel Torres)

**Docker setup:**

```
browser → localhost:5173 (Vite frontend)
       → localhost:3002 (mock-server, direct HTTP — allowed by CSP)
```

The frontend container volume-mounts the source tree for HMR. A shared `Dockerfile` installs dependencies; source is never copied into the image.

## Publishing

Package is published to [npm](https://www.npmjs.com/package/@ivanamato/whatsapp-inbox) as `@ivanamato/whatsapp-inbox`. A GitHub Actions workflow (`.github/workflows/publish.yml`) automatically builds and publishes on every GitHub Release using Trusted Publishing (OIDC).

- **Release commands:** `just release-minor` or `just release-major` bump the version, push the tag, and create a GitHub release (which triggers the publish workflow). The justfile is gitignored.
- **`publishConfig`** in `package.json` sets `"access": "public"`.

To install in another project:

```bash
npm install @ivanamato/whatsapp-inbox
```

## License

MIT
