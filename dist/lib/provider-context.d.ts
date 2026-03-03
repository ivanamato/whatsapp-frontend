import { PropsWithChildren } from '../../preact/compat';
import { WhatsAppProvider, DeviceConfig, WhatsAppMultiDeviceConfig } from './providers/types';
export type DeviceContextValue = {
    devices: DeviceConfig[];
    selectedDevice: DeviceConfig | null;
    selectDevice: (deviceId: string) => void;
    getProviderForDevice: (device: DeviceConfig) => WhatsAppProvider;
    readonly: boolean;
};
export declare function ProviderProvider({ config, children }: PropsWithChildren<{
    config: WhatsAppMultiDeviceConfig;
}>): import("preact").JSX.Element;
export declare function useProvider(): WhatsAppProvider;
export declare function useDeviceContext(): DeviceContextValue;
