import { useEffect, useRef, useCallback, useState } from 'react';

type UseAutoPollingOptions = {
  interval?: number;
  enabled?: boolean;
  onPoll: () => void | Promise<void>;
};

export function useAutoPolling({ interval = 5000, enabled = true, onPoll }: UseAutoPollingOptions) {
  const [isPolling, setIsPolling] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isRunningRef = useRef(false);
  const consecutiveErrorsRef = useRef(0);
  const MAX_BACKOFF_MS = 60000;

  const startPolling = useCallback(() => {
    if (!enabled) return;

    setIsPolling(true);
    consecutiveErrorsRef.current = 0;

    const poll = async () => {
      if (isRunningRef.current) return;
      isRunningRef.current = true;
      try {
        await onPoll();
        consecutiveErrorsRef.current = 0;
      } catch (error) {
        consecutiveErrorsRef.current++;
        if (process.env.NODE_ENV !== 'production') {
          console.error('Polling error:', error instanceof Error ? error.message : String(error));
        }
      } finally {
        isRunningRef.current = false;
      }
    };

    const scheduleNext = () => {
      const backoff = Math.min(
        interval * Math.pow(2, consecutiveErrorsRef.current),
        MAX_BACKOFF_MS,
      );
      intervalRef.current = setTimeout(async () => {
        await poll();
        if (intervalRef.current !== null) {
          scheduleNext();
        }
      }, backoff);
    };

    // Poll immediately, then schedule with backoff
    poll().then(() => scheduleNext());
  }, [interval, enabled, onPoll]);

  const stopPolling = useCallback(() => {
    if (intervalRef.current) {
      clearTimeout(intervalRef.current);
      intervalRef.current = null;
    }
    setIsPolling(false);
  }, []);

  // Handle visibility change (pause when tab is hidden)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsPaused(true);
        stopPolling();
      } else {
        setIsPaused(false);
        if (enabled) {
          startPolling();
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [enabled, startPolling, stopPolling]);

  // Start/stop polling based on enabled flag
  useEffect(() => {
    if (enabled && !document.hidden) {
      startPolling();
    } else {
      stopPolling();
    }

    return () => {
      stopPolling();
    };
  }, [enabled, startPolling, stopPolling]);

  return {
    isPolling,
    isPaused
  };
}
