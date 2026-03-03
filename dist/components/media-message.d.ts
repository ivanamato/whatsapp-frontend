type Props = {
    mediaId: string;
    messageType: string;
    caption?: string | null;
    filename?: string | null;
    isOutbound?: boolean;
    instance?: string;
};
export declare function MediaMessage({ mediaId, messageType, caption, filename, isOutbound, instance }: Props): import("preact").JSX.Element;
export {};
