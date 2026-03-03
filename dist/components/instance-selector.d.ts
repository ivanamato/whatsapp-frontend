type Props = {
    onDeviceChange: (device: {
        instanceName: string;
        provider: 'evolution' | 'cloud';
    } | null) => void;
};
export declare function InstanceSelector({ onDeviceChange }: Props): import("preact").JSX.Element;
export {};
