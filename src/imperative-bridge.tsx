import { forwardRef, useImperativeHandle, useRef } from 'react';
import { useProvider, useDeviceContext } from '@/lib/provider-context';
import { App } from '@/App';
import { ErrorBoundary } from '@/components/error-boundary';
import type { ConversationListRef } from '@/components/conversation-list';
import type { Chat, Message, SendResult, SendTextParams, ChatActionsResolver, ChatTagsResolver } from '@/lib/providers/types';

export type ImperativeApi = {
  getChats: () => Promise<Chat[]>;
  getMessages: (chatId: string, limit?: number) => Promise<Message[]>;
  sendText: (params: SendTextParams) => Promise<SendResult>;
  getConnectionState: () => Promise<'open' | 'close' | 'connecting'>;
  getActiveDevice: () => string | null;
  setActiveDevice: (deviceId: string) => void;
  selectConversation: (phoneNumber: string) => void;
};

type Props = {
  chatActions?: ChatActionsResolver;
  chatTags?: ChatTagsResolver;
};

export const ImperativeApiBridge = forwardRef<ImperativeApi, Props>(
  ({ chatActions, chatTags }, ref) => {
    const provider = useProvider();
    const { selectedDevice, selectDevice, devices, getProviderForDevice } = useDeviceContext();
    const conversationListRef = useRef<ConversationListRef>(null);

    useImperativeHandle(ref, () => ({
      getChats: async () => {
        if (!selectedDevice) return [];
        const deviceProvider = getProviderForDevice(selectedDevice);
        return deviceProvider.findChats(selectedDevice.instanceName);
      },
      getMessages: async (chatId: string, limit?: number) => {
        if (!selectedDevice) return [];
        const deviceProvider = getProviderForDevice(selectedDevice);
        return deviceProvider.findMessages(selectedDevice.instanceName, chatId, limit);
      },
      sendText: async (params: SendTextParams) => {
        if (!selectedDevice) throw new Error('No active device');
        const deviceProvider = getProviderForDevice(selectedDevice);
        return deviceProvider.sendText(selectedDevice.instanceName, params);
      },
      getConnectionState: async () => {
        if (!selectedDevice) throw new Error('No active device');
        const deviceProvider = getProviderForDevice(selectedDevice);
        return deviceProvider.getConnectionState(selectedDevice.instanceName);
      },
      getActiveDevice: () => {
        return selectedDevice?.id ?? null;
      },
      setActiveDevice: (deviceId: string) => {
        const device = devices.find(d => d.id === deviceId);
        if (device) selectDevice(deviceId);
      },
      selectConversation: (phoneNumber: string) => {
        conversationListRef.current?.selectByPhoneNumber(phoneNumber);
      },
    }), [provider, selectedDevice, selectDevice, devices, getProviderForDevice]);

    return (
      <ErrorBoundary>
        <App
          conversationListRef={conversationListRef}
          chatActions={chatActions}
          chatTags={chatTags}
        />
      </ErrorBoundary>
    );
  }
);

ImperativeApiBridge.displayName = 'ImperativeApiBridge';
