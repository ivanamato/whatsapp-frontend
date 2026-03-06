import { createRoot } from 'react-dom/client';
import { ProviderProvider } from './lib/provider-context';
import type { WhatsAppMultiDeviceConfig, ChatTagsResolver } from './lib/providers/types';
import { App } from './App';
import './app/globals.css';

async function loadConfig(): Promise<WhatsAppMultiDeviceConfig> {
  try {
    const res = await fetch('/devices.json');
    if (res.ok) {
      const json = (await res.json()) as WhatsAppMultiDeviceConfig;
      if (json.devices && json.devices.length > 0) {
        return json;
      }
    }
  } catch {
    // fetch failed
  }

  createRoot(document.getElementById('app')!).render(
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', fontFamily: 'sans-serif', color: '#667781' }}>
      <div style={{ textAlign: 'center', maxWidth: 400 }}>
        <h2 style={{ color: '#111b21', marginBottom: 8 }}>Missing Configuration</h2>
        <p>Create a <code>devices.json</code> file in the project root:</p>
        <pre style={{ background: '#f0f2f5', padding: 12, borderRadius: 8, marginTop: 8, textAlign: 'left' }}>{`{
  "devices": [{
    "id": "main",
    "label": "Main",
    "apiUrl": "http://localhost:8080",
    "instanceToken": "your-instance-token",
    "instanceName": "your-instance"
  }]
}`}</pre>
        <p style={{ marginTop: 8, fontSize: 13 }}>See <code>devices.example.json</code> for a full example.</p>
      </div>
    </div>
  );
  throw new Error('Missing devices.json');
}

const devChatTags: ChatTagsResolver = (chat) => {
  const tags = [];
  // Assign tags based on chat properties for demo purposes
  if (chat.unreadCount && chat.unreadCount > 0) {
    tags.push({ id: 'unread', label: 'Unread', background: '#ff9800', color: 'white' });
  }
  if (chat.contactName) {
    tags.push({ id: 'saved', label: 'Saved Contact', background: '#2196f3' });
  }
  // Give ~1/3 of chats a VIP tag based on phone number hash
  const hash = chat.phoneNumber.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
  if (hash % 3 === 0) {
    tags.push({ id: 'vip', label: 'VIP', background: '#e91e63' });
  }
  if (hash % 4 === 0) {
    tags.push({ id: 'priority', label: 'Priority', background: '#9c27b0' });
  }
  return tags;
};

loadConfig().then((config) => {
  createRoot(document.getElementById('app')!).render(
    <ProviderProvider config={{ ...config, chatTags: devChatTags }}>
      <App chatTags={devChatTags} />
    </ProviderProvider>
  );
});
