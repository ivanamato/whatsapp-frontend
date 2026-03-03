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
    open: boolean;
    onOpenChange: (open: boolean) => void;
    message: Message | null;
    instance?: string;
    onForwarded?: () => void;
};
export declare function ForwardMessageDialog({ open, onOpenChange, message, instance, onForwarded, }: Props): import("preact").JSX.Element;
export {};
