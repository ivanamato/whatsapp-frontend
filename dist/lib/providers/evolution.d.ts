import { WhatsAppProvider, Chat, Message, SendTextParams, SendMediaParams, SendButtonsParams, SendResult } from './types';
export declare class EvolutionProvider implements WhatsAppProvider {
    private readonly baseUrl;
    private readonly apiKey;
    readonly type: "evolution";
    readonly supportsTemplates = false;
    readonly has24HourWindow = false;
    private phoneLidMap;
    constructor(baseUrl: string, apiKey: string);
    private request;
    getConnectionState(instanceName: string): Promise<'open' | 'close' | 'connecting'>;
    findChats(instanceName: string): Promise<Chat[]>;
    private ensureLidMap;
    findMessages(instanceName: string, chatId: string, limit?: number): Promise<Message[]>;
    sendText(instanceName: string, params: SendTextParams): Promise<SendResult>;
    sendMedia(instanceName: string, params: SendMediaParams): Promise<SendResult>;
    sendButtons(instanceName: string, params: SendButtonsParams): Promise<SendResult>;
    deleteMessage(instanceName: string, messageId: string, remoteJid: string, fromMe: boolean): Promise<void>;
    getMediaUrl(instanceName: string, messageId: string): Promise<string | null>;
}
