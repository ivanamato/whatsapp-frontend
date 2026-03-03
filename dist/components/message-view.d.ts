type Props = {
    conversationId?: string;
    phoneNumber?: string;
    contactName?: string;
    profilePicUrl?: string;
    onTemplateSent?: (phoneNumber: string) => Promise<void>;
    onBack?: () => void;
    isVisible?: boolean;
    instance?: string;
    provider?: string;
    readOnly?: boolean;
};
export declare function MessageView({ conversationId, phoneNumber, contactName, profilePicUrl, onTemplateSent, onBack, isVisible, instance, provider: providerType, readOnly }: Props): import("preact").JSX.Element;
export {};
