import { Template, TemplateParameterInfo } from '../types/whatsapp';
type Props = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    template: Template;
    parameterInfo: TemplateParameterInfo;
    phoneNumber: string;
    onBack: () => void;
    onTemplateSent?: () => void;
};
export declare function TemplateParametersDialog({ open, onOpenChange, template, parameterInfo, phoneNumber, onBack, onTemplateSent, }: Props): import("preact").JSX.Element;
export {};
