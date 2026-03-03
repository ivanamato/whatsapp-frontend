import { WhatsAppProvider, ProviderType } from './types';
export declare function createProvider(type: ProviderType, apiUrl: string, apiKey: string): WhatsAppProvider;
export type { WhatsAppProvider, ProviderType };
export type { Chat, Message, SendTextParams, SendMediaParams, SendButtonsParams, SendResult, } from './types';
