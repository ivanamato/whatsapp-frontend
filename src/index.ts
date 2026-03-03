import { createRoot, type Root } from 'react-dom/client';
import { createElement } from 'react';
import { ProviderProvider } from './lib/provider-context';
import { App } from './App';
import './app/globals.css';

export type { WhatsAppProvider, ProviderType, Chat, Message, SendTextParams, SendMediaParams, SendButtonsParams, SendResult, DeviceConfig, WhatsAppMultiDeviceConfig } from './lib/providers/types';
export { EvolutionProvider } from './lib/providers/evolution';
export { ProviderProvider, useProvider, useDeviceContext } from './lib/provider-context';
export { createProvider } from './lib/providers/index';
export { ConversationList } from './components/conversation-list';
export { MessageView } from './components/message-view';
export { InstanceSelector } from './components/instance-selector';
export { App } from './App';

import type { WhatsAppMultiDeviceConfig } from './lib/providers/types';

type WhatsAppInbox = {
  unmount: () => void;
};

const roots = new WeakMap<HTMLElement, Root>();

export function mount(element: HTMLElement, config: WhatsAppMultiDeviceConfig): WhatsAppInbox {
  const existing = roots.get(element);
  if (existing) {
    existing.unmount();
    roots.delete(element);
  }

  const root = createRoot(element);
  roots.set(element, root);

  root.render(
    createElement(ProviderProvider, { config },
      createElement(App)
    )
  );

  return {
    unmount: () => {
      root.unmount();
      roots.delete(element);
    },
  };
}

export function unmount(element: HTMLElement): void {
  const root = roots.get(element);
  if (root) {
    root.unmount();
    roots.delete(element);
  }
}
