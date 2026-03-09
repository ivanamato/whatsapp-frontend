/** Shared domain type for a conversation item, used across use-cases and components. */
export type Conversation = {
  id: string;
  phoneNumber: string;
  status?: string;
  lastActiveAt?: string;
  contactName?: string;
  profilePicUrl?: string;
  lastMessage?: {
    content: string;
    direction: string;
    type?: string;
  };
  unreadCount?: number;
  deviceId?: string;
  deviceLabel?: string;
};
