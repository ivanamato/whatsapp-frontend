import { useEffect, useState, useRef } from 'react';
import { WifiOff, Loader2 } from 'lucide-react';
import { useProvider, useDeviceContext } from '@/lib/provider-context';
import { useTranslations } from '@/lib/i18n';

export function ConnectionStatus() {
  const provider = useProvider();
  const { selectedDevice } = useDeviceContext();
  const t = useTranslations();
  const [state, setState] = useState<'open' | 'close' | 'connecting' | null>(null);
  const intervalRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!selectedDevice) {
      setState(null);
      return;
    }

    let cancelled = false;

    const check = async () => {
      try {
        const result = await provider.getConnectionState(selectedDevice.instanceName);
        if (!cancelled) setState(result);
      } catch {
        if (!cancelled) setState('close');
      }
    };

    check();
    intervalRef.current = setInterval(check, 30000); // Check every 30s

    return () => {
      cancelled = true;
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [selectedDevice, provider]);

  if (!state || state === 'open') return null;

  const isConnecting = state === 'connecting';

  return (
    <div className="wa-connection-banner" style={{
      background: isConnecting ? '#fdf4c5' : '#fdeded',
      padding: '6px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 13,
      color: isConnecting ? '#8b7000' : '#c62828',
      flexShrink: 0,
    }}>
      {isConnecting ? (
        <Loader2 className="wa:h-3.5 wa:w-3.5 wa:animate-spin" style={{ flexShrink: 0 }} />
      ) : (
        <WifiOff className="wa:h-3.5 wa:w-3.5" style={{ flexShrink: 0 }} />
      )}
      <span>
        {isConnecting
          ? (t('connectionStatus.connecting') || 'Connecting to WhatsApp...')
          : (t('connectionStatus.disconnected') || 'WhatsApp disconnected. Messages may not be delivered.')}
      </span>
    </div>
  );
}
