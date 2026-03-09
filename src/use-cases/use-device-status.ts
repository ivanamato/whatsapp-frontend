import { useState, useCallback, useEffect } from 'react';
import { useAutoPolling } from '@/hooks/use-auto-polling';
import { useDeviceContext } from '@/lib/provider-context';

export type DeviceStatus = 'open' | 'close' | 'connecting' | 'loading';

export function useDeviceStatus() {
  const { devices, selectedDevice, selectDevice, getProviderForDevice } = useDeviceContext();
  const [statuses, setStatuses] = useState<Record<string, DeviceStatus>>({});
  const [initialLoad, setInitialLoad] = useState(true);

  const pollStatuses = useCallback(async () => {
    const results: Record<string, DeviceStatus> = {};
    await Promise.all(
      devices.map(async device => {
        try {
          const p = getProviderForDevice(device);
          results[device.id] = await p.getConnectionState(device.instanceName);
        } catch {
          results[device.id] = 'close';
        }
      }),
    );
    setStatuses(results);
    setInitialLoad(false);
  }, [devices, getProviderForDevice]);

  useEffect(() => {
    pollStatuses();
  }, [pollStatuses]);

  useAutoPolling({ interval: 30000, enabled: true, onPoll: pollStatuses });

  // Auto-select first connected device if the current one is disconnected
  useEffect(() => {
    if (!initialLoad && selectedDevice && statuses[selectedDevice.id] !== 'open') {
      const connected = devices.find(d => statuses[d.id] === 'open');
      if (connected && connected.id !== selectedDevice.id) {
        selectDevice(connected.id);
      }
    }
  }, [initialLoad, statuses, devices, selectedDevice, selectDevice]);

  return {
    statuses,
    initialLoad,
    connectedCount: devices.filter(d => statuses[d.id] === 'open').length,
  };
}
