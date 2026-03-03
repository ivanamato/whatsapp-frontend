type Conversation = {
    id: string;
    phoneNumber: string;
    status: string;
    lastActiveAt: string;
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
type Props = {
    onSelectConversation: (conversation: Conversation) => void;
    selectedConversationId?: string;
    isHidden?: boolean;
    instance?: string;
    provider?: string;
};
export type ConversationListRef = {
    refresh: () => Promise<Conversation[]>;
    selectByPhoneNumber: (phoneNumber: string) => void;
};
export declare const ConversationList: import('../../preact/compat').ForwardRefExoticComponent<Props & import('../../preact/compat').RefAttributes<ConversationListRef>>;
export {};
