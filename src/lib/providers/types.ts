// Normalized types used across all providers

export type ProviderType = 'evolution' | 'cloud';

export type ViewMode = 'single' | 'all';

export type DeviceConfig = {
  id: string;
  label?: string;
  apiUrl: string;
  /** Per-instance token from Evolution API (NOT the global API key) */
  instanceToken: string;
  instanceName: string;
  providerType?: ProviderType;
  readonly?: boolean;
};

export type ChatAction = {
  id: string;
  label: string;
  icon?: import('react').ComponentType<{ className?: string }>;
  onClick: (chat: Chat, device: DeviceConfig) => void;
};

export type ChatActionsResolver = (chat: Chat, device: DeviceConfig) => ChatAction[] | Promise<ChatAction[]>;

export type ChatTag = {
  id: string;
  label: string;
  color?: string;
  background?: string;
};

export type ChatTagsResolver = (chat: Chat, device: DeviceConfig) => ChatTag[] | Promise<ChatTag[]>;

export type BulkChatTagsEntry = {
  /** Composite key matching the internal ConversationList key: `${device.id}::${chat.id}` or `${chat.id}` */
  key: string;
  chat: Chat;
  device: DeviceConfig;
};

export type BulkChatTagsResolver = (entries: BulkChatTagsEntry[]) => Promise<Map<string, ChatTag[]>>;

export type WhatsAppMultiDeviceConfig = {
  devices: DeviceConfig[];
  defaultDeviceId?: string;
  translations?: Partial<import('../i18n').Translations>;
  chatActions?: ChatActionsResolver;
  chatTags?: ChatTagsResolver;
  /** Preferred over chatTags: resolves all chat tags in a single batch call. */
  chatTagsBulk?: BulkChatTagsResolver;
};

export type Chat = {
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

export type Message = {
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
  reactionEmoji?: string | null;
  reactedToMessageId?: string | null;
  caption?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  metadata?: Record<string, unknown>;
  /** Display name of the sender (from pushName). Shown above inbound message bubbles. */
  senderName?: string;
};

export type SendTextParams = {
  to: string;
  body: string;
};

export type SendMediaParams = {
  to: string;
  mediaType: 'image' | 'video' | 'audio' | 'document';
  media: string;
  caption?: string;
  fileName?: string;
  mimeType?: string;
  ptt?: boolean;
};

export type SendButtonsParams = {
  to: string;
  body: string;
  header?: string;
  buttons: Array<{ id: string; title: string }>;
};

export type SendResult = {
  messageId: string;
  status?: string;
};

export type FindMessagesOptions = {
  page?: number;      // 1-based, default 1
  pageSize?: number;  // items per page, default 50
};

export type PaginatedMessages = {
  messages: Message[];
  pagination: {
    currentPage: number;
    totalPages: number;
    total: number;
    hasMore: boolean;
  };
};

export interface WhatsAppProvider {
  readonly type: ProviderType;
  readonly supportsTemplates: boolean;
  readonly has24HourWindow: boolean;

  getConnectionState(instanceName: string): Promise<'open' | 'close' | 'connecting'>;
  findChats(instanceName: string): Promise<Chat[]>;
  findMessages(instanceName: string, chatId: string, limit?: number): Promise<Message[]>;
  findMessagesPaginated(instanceName: string, chatId: string, options?: FindMessagesOptions): Promise<PaginatedMessages>;
  sendText(instanceName: string, params: SendTextParams): Promise<SendResult>;
  sendMedia(instanceName: string, params: SendMediaParams): Promise<SendResult>;
  sendButtons(instanceName: string, params: SendButtonsParams): Promise<SendResult>;
  getMediaUrl(instanceName: string, messageId: string): Promise<string | null>;
  deleteMessage(instanceName: string, messageId: string, remoteJid: string, fromMe: boolean): Promise<void>;
}
