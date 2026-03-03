type Props = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    conversationId?: string;
    phoneNumber?: string;
    onMessageSent?: () => void;
    instance?: string;
};
export declare function InteractiveMessageDialog({ open, onOpenChange, conversationId, phoneNumber, onMessageSent, instance, }: Props): import("preact").JSX.Element;
export {};
