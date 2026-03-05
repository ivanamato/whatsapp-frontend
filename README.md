# WhatsApp Inbox

Embeddable WhatsApp inbox UI library. Framework-agnostic — works with Vue, React, Angular, or plain HTML. Connects directly to the [Evolution API](https://doc.evolution-api.com/) from the browser.

Built with [Preact](https://preactjs.com/) + [Tailwind CSS v4](https://tailwindcss.com/). No backend required.

## Features

- **Real-time messaging** — Auto-polling keeps conversations and messages updated
- **Multi-device** — Switch between multiple WhatsApp instances via a device selector
- **Imperative API** — Programmatic access to chats, messages, devices, and sending from outside React
- **Custom chat actions** — Configurable action buttons per chat row driven by the host app
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

- A three-dot icon appears on the right side of every chat row when `chatActions` is defined
- Clicking it opens a centered dialog with the contact's profile picture, name, phone number, and device name
- While the resolver is running, a loading spinner is displayed
- If the resolver throws, an error message is shown in the dialog
- Each resolved action renders as a full-width button in the dialog
- After clicking an action, the dialog closes automatically
- The dialog can also be closed with the X button, clicking the backdrop, or pressing Escape

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
