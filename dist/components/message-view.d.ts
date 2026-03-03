import { WhatsAppProvider } from '../lib/providers/types';
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
    providerOverride?: WhatsAppProvider;
};
export declare function MessageView({ conversationId, phoneNumber, contactName, profilePicUrl, onTemplateSent, onBack, isVisible, instance, provider: providerType, readOnly, providerOverride }: Props): import("preact").JSX.Element;
export {};
