import { createContext, useContext, useMemo, useState, useCallback, type PropsWithChildren } from 'react';
import { EvolutionProvider } from './providers/evolution';
import type { WhatsAppProvider, ProviderType, DeviceConfig, WhatsAppMultiDeviceConfig, ViewMode } from './providers/types';
import { TranslationsProvider } from './i18n';

// --- Provider registry: one provider per unique (apiUrl, apiKey, providerType) ---

function createProviderInstance(type: ProviderType, apiUrl: string, apiKey: string): WhatsAppProvider {
  if (type === 'evolution') {
    return new EvolutionProvider(apiUrl, apiKey);
  }
  throw new Error(`Unknown provider type: ${type}`);
}

function buildProviderRegistry(devices: DeviceConfig[]): Map<string, WhatsAppProvider> {
  const registry = new Map<string, WhatsAppProvider>();
  for (const device of devices) {
    const type = device.providerType || 'evolution';
    const key = `${device.apiUrl}|${device.apiKey}|${type}`;
    if (!registry.has(key)) {
      registry.set(key, createProviderInstance(type, device.apiUrl, device.apiKey));
    }
  }
  return registry;
}

function getProviderForDevice(device: DeviceConfig, registry: Map<string, WhatsAppProvider>): WhatsAppProvider {
  const type = device.providerType || 'evolution';
  const key = `${device.apiUrl}|${device.apiKey}|${type}`;
  return registry.get(key)!;
}

// --- Device context ---

export type DeviceContextValue = {
  devices: DeviceConfig[];
  selectedDevice: DeviceConfig | null;
  selectDevice: (deviceId: string) => void;
  getProviderForDevice: (device: DeviceConfig) => WhatsAppProvider;
  readonly: boolean;
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
};

const DeviceContext = createContext<DeviceContextValue | null>(null);
const ProviderContext = createContext<WhatsAppProvider | null>(null);

export function ProviderProvider({ config, children }: PropsWithChildren<{ config: WhatsAppMultiDeviceConfig }>) {
  const { devices } = config;

  const registry = useMemo(() => buildProviderRegistry(devices), [devices]);

  const [selectedDeviceId, setSelectedDeviceId] = useState<string | null>(
    config.defaultDeviceId || (devices.length > 0 ? devices[0].id : null)
  );

  const [viewMode, setViewMode] = useState<ViewMode>('single');

  const selectedDevice = useMemo(() => {
    return devices.find(d => d.id === selectedDeviceId) || devices[0] || null;
  }, [devices, selectedDeviceId]);

  const selectDevice = useCallback((deviceId: string) => {
    setSelectedDeviceId(deviceId);
  }, []);

  const getProviderForDeviceFn = useCallback((device: DeviceConfig) => {
    return getProviderForDevice(device, registry);
  }, [registry]);

  const activeProvider = useMemo(() => {
    if (selectedDevice) {
      return getProviderForDevice(selectedDevice, registry);
    }
    return null;
  }, [selectedDevice, registry]);

  const isReadonly = selectedDevice?.readonly ?? false;

  const deviceContextValue = useMemo<DeviceContextValue>(() => ({
    devices,
    selectedDevice,
    selectDevice,
    getProviderForDevice: getProviderForDeviceFn,
    readonly: isReadonly,
    viewMode,
    setViewMode,
  }), [devices, selectedDevice, selectDevice, getProviderForDeviceFn, isReadonly, viewMode]);

  return (
    <TranslationsProvider translations={config.translations}>
      <DeviceContext.Provider value={deviceContextValue}>
        <ProviderContext.Provider value={activeProvider}>
          {children}
        </ProviderContext.Provider>
      </DeviceContext.Provider>
    </TranslationsProvider>
  );
}

export function useProvider(): WhatsAppProvider {
  const provider = useContext(ProviderContext);
  if (!provider) {
    throw new Error('useProvider must be used within a ProviderProvider');
  }
  return provider;
}

export function useDeviceContext(): DeviceContextValue {
  const ctx = useContext(DeviceContext);
  if (!ctx) {
    throw new Error('useDeviceContext must be used within a ProviderProvider');
  }
  return ctx;
}
