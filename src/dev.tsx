import { createRoot } from 'react-dom/client';
import { ProviderProvider } from './lib/provider-context';
import type { WhatsAppMultiDeviceConfig } from './lib/providers/types';
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

  document.getElementById('app')!.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:center;height:100%;font-family:sans-serif;color:#667781;">
      <div style="text-align:center;max-width:400px;">
        <h2 style="color:#111b21;margin-bottom:8px;">Missing Configuration</h2>
        <p>Create a <code>devices.json</code> file in the project root:</p>
        <pre style="background:#f0f2f5;padding:12px;border-radius:8px;margin-top:8px;text-align:left;">{
  "devices": [{
    "id": "main",
    "label": "Main",
    "apiUrl": "http://localhost:8080",
    "instanceToken": "your-instance-token",
    "instanceName": "your-instance"
  }]
}</pre>
        <p style="margin-top:8px;font-size:13px;">See <code>devices.example.json</code> for a full example.</p>
      </div>
    </div>
  `;
  throw new Error('Missing devices.json');
}

loadConfig().then((config) => {
  createRoot(document.getElementById('app')!).render(
    <ProviderProvider config={config}>
      <App />
    </ProviderProvider>
  );
});
