type Message = {
    id: string;
    direction: 'inbound' | 'outbound';
    content: string;
    createdAt: string;
    phoneNumber: string;
    hasMedia: boolean;
    mediaData?: {
        url: string;
        contentType?: string;
        filename?: string;
    };
    messageType?: string;
    caption?: string | null;
    mimeType?: string | null;
    filename?: string | null;
};
type Props = {
    message: Message;
    conversationId: string;
    instance?: string;
    provider?: string;
    onDeleted: (messageId: string) => void;
    onForward: (message: Message) => void;
    readOnly?: boolean;
};
export declare function MessageContextMenu({ message, conversationId, instance, onDeleted, onForward, readOnly, }: Props): import("preact").JSX.Element;
export {};
