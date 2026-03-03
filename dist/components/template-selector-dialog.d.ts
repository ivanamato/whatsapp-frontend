type Props = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    phoneNumber: string;
    onTemplateSent?: () => void;
};
export declare function TemplateSelectorDialog({ open, onOpenChange, phoneNumber, onTemplateSent }: Props): import("preact").JSX.Element;
export {};
