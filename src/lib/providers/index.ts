import { EvolutionProvider } from './evolution';
import type { WhatsAppProvider, ProviderType } from './types';

export function createProvider(type: ProviderType, apiUrl: string, apiKey: string): WhatsAppProvider {
  if (type === 'evolution') {
    return new EvolutionProvider(apiUrl, apiKey);
  }
  throw new Error(`Unknown provider: ${type}`);
}

export type { WhatsAppProvider, ProviderType };
export type {
  Chat,
  Message,
  SendTextParams,
  SendMediaParams,
  SendButtonsParams,
  SendResult,
} from './types';
