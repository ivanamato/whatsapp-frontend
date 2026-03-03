import { useEffect, useState, useCallback } from 'react';
import { ChevronDown, WifiOff, Loader2, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAutoPolling } from '@/hooks/use-auto-polling';
import { Badge } from '@/components/ui/badge';
import { useDeviceContext } from '@/lib/provider-context';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import type { DeviceConfig } from '@/lib/providers/types';

type DeviceStatus = 'open' | 'close' | 'connecting' | 'loading';

type Props = {
  onDeviceChange: (device: { instanceName: string; provider: 'evolution' | 'cloud' } | null) => void;
};

export function InstanceSelector({ onDeviceChange }: Props) {
  const { devices, selectedDevice, selectDevice, getProviderForDevice } = useDeviceContext();
  const [statuses, setStatuses] = useState<Record<string, DeviceStatus>>({});
  const [open, setOpen] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);

  const pollStatuses = useCallback(async () => {
    const results: Record<string, DeviceStatus> = {};
    await Promise.all(
      devices.map(async (device) => {
        try {
          const provider = getProviderForDevice(device);
          const state = await provider.getConnectionState(device.instanceName);
          results[device.id] = state;
        } catch {
          results[device.id] = 'close';
        }
      })
    );
    setStatuses(results);
    setInitialLoad(false);
  }, [devices, getProviderForDevice]);

  useEffect(() => {
    pollStatuses();
  }, [pollStatuses]);

  useAutoPolling({
    interval: 30000,
    enabled: true,
    onPoll: pollStatuses,
  });

  // Notify parent when selected device changes
  useEffect(() => {
    if (selectedDevice) {
      onDeviceChange({
        instanceName: selectedDevice.instanceName,
        provider: selectedDevice.providerType || 'evolution',
      });
    }
  }, [selectedDevice, onDeviceChange]);

  // Auto-select first connected device if default isn't connected
  useEffect(() => {
    if (!initialLoad && selectedDevice && statuses[selectedDevice.id] !== 'open') {
      const connected = devices.find(d => statuses[d.id] === 'open');
      if (connected && connected.id !== selectedDevice.id) {
        selectDevice(connected.id);
      }
    }
  }, [initialLoad, statuses, devices, selectedDevice, selectDevice]);

  if (initialLoad) {
    return (
      <div className="wa:flex wa:items-center wa:justify-center wa:gap-3 wa:px-4 wa:py-3 wa:text-base wa:text-[#8696a0]">
        <Loader2 className="wa:h-5 wa:w-5 wa:animate-spin" />
        Loading devices...
      </div>
    );
  }

  if (devices.length === 0) {
    return (
      <div className="wa:flex wa:items-center wa:justify-center wa:gap-3 wa:px-4 wa:py-3 wa:text-base wa:text-red-400">
        <WifiOff className="wa:h-5 wa:w-5" />
        No devices configured
      </div>
    );
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="wa:flex wa:items-center wa:justify-center wa:gap-3 wa:px-4 wa:py-3 wa:rounded-lg hover:wa:bg-white/10 wa:transition-colors wa:w-full"
      >
        <StatusDot status={selectedDevice ? (statuses[selectedDevice.id] || 'close') : 'close'} />
        <span className="wa:text-base wa:font-medium wa:text-[#e9edef] wa:truncate">
          {selectedDevice?.label || selectedDevice?.instanceName || 'Select device'}
        </span>
        <Badge variant="outline" className="wa:text-xs wa:px-2 wa:py-0.5 wa:h-5 wa:uppercase wa:text-[#8696a0] wa:border-[#8696a0]/40">
          {(selectedDevice?.providerType || 'evolution') === 'evolution' ? 'EVO' : 'CLOUD'}
        </Badge>
        <ChevronDown className="wa:h-5 wa:w-5 wa:text-[#8696a0]" />
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="wa:bg-[#111b21] wa:border-[#3b4a54] wa:max-w-md" style={{ padding: 32 }}>
          <DialogHeader className="wa:mb-2">
            <DialogTitle className="wa:text-[#e9edef] wa:text-center">Select Device</DialogTitle>
          </DialogHeader>
          <div className="wa:flex wa:flex-col wa:gap-3">
            {devices.map((device) => (
              <DeviceOption
                key={device.id}
                device={device}
                status={statuses[device.id] || 'close'}
                isSelected={selectedDevice?.id === device.id}
                onSelect={() => {
                  selectDevice(device.id);
                  setOpen(false);
                }}
              />
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

function DeviceOption({
  device,
  status,
  isSelected,
  onSelect,
}: {
  device: DeviceConfig;
  status: DeviceStatus;
  isSelected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      onClick={onSelect}
      className={cn(
        'wa:w-full wa:flex wa:items-center wa:gap-3 wa:px-4 wa:py-3.5 wa:rounded-lg wa:transition-colors',
        isSelected
          ? 'wa:bg-[#00a884]/20 wa:border wa:border-[#00a884]/40'
          : 'wa:bg-[#233138] hover:wa:bg-[#2a3942] wa:border wa:border-transparent'
      )}
    >
      <StatusDot status={status} />
      <div className="wa:flex-1 wa:min-w-0 wa:text-left">
        <p className="wa:text-base wa:font-medium wa:text-[#e9edef] wa:truncate">
          {device.label || device.instanceName}
        </p>
        {device.label && (
          <p className="wa:text-xs wa:text-[#8696a0] wa:truncate">{device.instanceName}</p>
        )}
      </div>
      <Badge variant="outline" className="wa:text-xs wa:px-2 wa:py-0.5 wa:h-5 wa:uppercase wa:flex-shrink-0 wa:text-[#8696a0] wa:border-[#8696a0]/40">
        {(device.providerType || 'evolution') === 'evolution' ? 'EVO' : 'CLOUD'}
      </Badge>
      {isSelected && (
        <Check className="wa:h-5 wa:w-5 wa:text-[#00a884] wa:flex-shrink-0" />
      )}
    </button>
  );
}

function StatusDot({ status }: { status: string }) {
  return (
    <span
      className={cn(
        'wa:h-3 wa:w-3 wa:rounded-full wa:flex-shrink-0',
        status === 'open' && 'wa:bg-green-500',
        status === 'connecting' && 'wa:bg-yellow-500 wa:animate-pulse',
        (status === 'close' || status === 'loading') && 'wa:bg-red-400'
      )}
      title={status}
    />
  );
}
