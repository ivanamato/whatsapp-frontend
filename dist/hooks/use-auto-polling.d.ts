type UseAutoPollingOptions = {
    interval?: number;
    enabled?: boolean;
    onPoll: () => void | Promise<void>;
};
export declare function useAutoPolling({ interval, enabled, onPoll }: UseAutoPollingOptions): {
    isPolling: boolean;
    isPaused: boolean;
};
export {};
