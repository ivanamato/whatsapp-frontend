import { WhatsAppMultiDeviceConfig } from './lib/providers/types';
export type { WhatsAppProvider, ProviderType, Chat, Message, SendTextParams, SendMediaParams, SendButtonsParams, SendResult, DeviceConfig, WhatsAppMultiDeviceConfig } from './lib/providers/types';
export type { Translations } from './lib/i18n';
export { defaultTranslations, useTranslations, TranslationsProvider } from './lib/i18n';
export { EvolutionProvider } from './lib/providers/evolution';
export { ProviderProvider, useProvider, useDeviceContext } from './lib/provider-context';
export { createProvider } from './lib/providers/index';
export { ConversationList } from './components/conversation-list';
export { MessageView } from './components/message-view';
export { InstanceSelector } from './components/instance-selector';
export { App } from './App';
type WhatsAppInbox = {
    unmount: () => void;
};
export declare function mount(element: HTMLElement, config: WhatsAppMultiDeviceConfig): WhatsAppInbox;
export declare function unmount(element: HTMLElement): void;
