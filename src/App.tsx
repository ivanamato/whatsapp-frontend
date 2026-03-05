import { useState, useRef, useCallback, useEffect, type RefObject } from 'react';
import { ConversationList, type ConversationListRef } from '@/components/conversation-list';
import { MessageView } from '@/components/message-view';
import { InstanceSelector } from '@/components/instance-selector';
import { ConnectionStatus } from '@/components/connection-status';
import { useDeviceContext } from '@/lib/provider-context';
import type { ChatActionsResolver } from '@/lib/providers/types';

type Conversation = {
  id: string;
  phoneNumber: string;
  contactName?: string;
  profilePicUrl?: string;
  deviceId?: string;
  deviceLabel?: string;
};

type AppProps = {
  conversationListRef?: RefObject<ConversationListRef | null>;
  chatActions?: ChatActionsResolver;
};

export function App({ conversationListRef: externalRef, chatActions }: AppProps = {}) {
  const { selectedDevice, readonly: isReadonly, viewMode, devices, getProviderForDevice } = useDeviceContext();
  const [selectedConversation, setSelectedConversation] = useState<Conversation>();
  const internalRef = useRef<ConversationListRef>(null);
  const conversationListRef = externalRef || internalRef;

  // Clear conversation when device changes
  const prevDeviceIdRef = useRef(selectedDevice?.id);
  useEffect(() => {
    if (selectedDevice && prevDeviceIdRef.current !== selectedDevice.id) {
      prevDeviceIdRef.current = selectedDevice.id;
      setSelectedConversation(undefined);
    }
  }, [selectedDevice]);

  // Clear conversation when view mode changes
  const prevViewModeRef = useRef(viewMode);
  useEffect(() => {
    if (prevViewModeRef.current !== viewMode) {
      prevViewModeRef.current = viewMode;
      setSelectedConversation(undefined);
    }
  }, [viewMode]);

  const handleDeviceChange = useCallback((_device: { instanceName: string; provider: 'evolution' | 'cloud' } | null) => {
    // Device selection is managed by context; this callback is for future use
  }, []);

  // Resolve instance, provider type, readonly, and providerOverride based on view mode
  const chatDevice = viewMode === 'all' && selectedConversation?.deviceId
    ? devices.find(d => d.id === selectedConversation.deviceId)
    : undefined;

  const instance = viewMode === 'all'
    ? chatDevice?.instanceName
    : selectedDevice?.instanceName;

  const provider = viewMode === 'all'
    ? ((chatDevice?.providerType || 'evolution') as 'evolution' | 'cloud')
    : ((selectedDevice?.providerType || 'evolution') as 'evolution' | 'cloud');

  const effectiveReadOnly = viewMode === 'all'
    ? (chatDevice?.readonly ?? false)
    : isReadonly;

  const providerOverride = viewMode === 'all' && chatDevice
    ? getProviderForDevice(chatDevice)
    : undefined;

  const handleTemplateSent = async (phoneNumber: string) => {
    const conversations = await conversationListRef.current?.refresh();

    if (conversations) {
      const conversation = conversations.find(conv => conv.phoneNumber === phoneNumber);
      if (conversation) {
        setSelectedConversation(conversation);
      }
    }
  };

  const handleBackToList = useCallback(() => {
    setSelectedConversation(undefined);
  }, []);

  // Keyboard navigation: Escape to go back to list
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedConversation) {
        // Don't interfere with open dialogs
        const hasDialog = document.querySelector('[data-radix-dialog-overlay]');
        if (!hasDialog) {
          setSelectedConversation(undefined);
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedConversation]);

  return (
    <div className="wa:h-screen wa:flex wa:flex-col wa:bg-[#d1d7db]">
      {/* Teal top bar — the iconic WhatsApp Web color band */}
      <div className="wa:bg-[#00a884] wa:flex-shrink-0" style={{ height: 127 }}>
        <div style={{ padding: '19px 19px 12px' }}>
          {/* Device selector sits inside the teal bar */}
          <div className="wa:bg-[#111b21] wa:rounded-lg" style={{ padding: '6px 12px' }}>
            <InstanceSelector onDeviceChange={handleDeviceChange} />
          </div>
        </div>
      </div>

      {/* Connection status banner */}
      <ConnectionStatus />

      {/* Main chat layout — negative margin to overlap with the teal bar */}
      <div className="wa:flex-1 wa:min-h-0 wa:w-full" style={{ marginTop: -68, padding: '0 19px 19px' }}>
        <div className="wa:flex wa:h-full wa:bg-white wa:overflow-hidden" style={{ boxShadow: '0 1px 1px rgba(0,0,0,0.06), 0 2px 5px rgba(0,0,0,0.06)', borderRadius: '0 0 3px 3px' }}>
        <ConversationList
          ref={conversationListRef}
          onSelectConversation={setSelectedConversation}
          selectedConversationId={
            viewMode === 'all' && selectedConversation?.deviceId
              ? `${selectedConversation.deviceId}::${selectedConversation.id}`
              : selectedConversation?.id
          }
          isHidden={!!selectedConversation}
          instance={selectedDevice?.instanceName}
          provider={provider}
          chatActions={chatActions}
        />
        <MessageView
          conversationId={selectedConversation?.id}
          phoneNumber={selectedConversation?.phoneNumber}
          contactName={selectedConversation?.contactName}
          profilePicUrl={selectedConversation?.profilePicUrl}
          onTemplateSent={handleTemplateSent}
          onBack={handleBackToList}
          isVisible={!!selectedConversation}
          instance={instance}
          provider={provider}
          readOnly={effectiveReadOnly}
          providerOverride={providerOverride}
        />
        </div>
      </div>
    </div>
  );
}
