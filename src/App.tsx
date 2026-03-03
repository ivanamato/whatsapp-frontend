import { useState, useRef, useCallback, useEffect } from 'react';
import { ConversationList, type ConversationListRef } from '@/components/conversation-list';
import { MessageView } from '@/components/message-view';
import { InstanceSelector } from '@/components/instance-selector';
import { useDeviceContext } from '@/lib/provider-context';

type Conversation = {
  id: string;
  phoneNumber: string;
  contactName?: string;
  profilePicUrl?: string;
};

export function App() {
  const { selectedDevice, readonly: isReadonly } = useDeviceContext();
  const [selectedConversation, setSelectedConversation] = useState<Conversation>();
  const conversationListRef = useRef<ConversationListRef>(null);

  // Clear conversation when device changes
  const prevDeviceIdRef = useRef(selectedDevice?.id);
  useEffect(() => {
    if (selectedDevice && prevDeviceIdRef.current !== selectedDevice.id) {
      prevDeviceIdRef.current = selectedDevice.id;
      setSelectedConversation(undefined);
    }
  }, [selectedDevice]);

  const handleDeviceChange = useCallback((_device: { instanceName: string; provider: 'evolution' | 'cloud' } | null) => {
    // Device selection is managed by context; this callback is for future use
  }, []);

  const instance = selectedDevice?.instanceName;
  const provider = (selectedDevice?.providerType || 'evolution') as 'evolution' | 'cloud';

  const handleTemplateSent = async (phoneNumber: string) => {
    const conversations = await conversationListRef.current?.refresh();

    if (conversations) {
      const conversation = conversations.find(conv => conv.phoneNumber === phoneNumber);
      if (conversation) {
        setSelectedConversation(conversation);
      }
    }
  };

  const handleBackToList = () => {
    setSelectedConversation(undefined);
  };

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

      {/* Main chat layout — negative margin to overlap with the teal bar */}
      <div className="wa:flex-1 wa:min-h-0 wa:w-full" style={{ marginTop: -68, padding: '0 19px 19px' }}>
        <div className="wa:flex wa:h-full wa:bg-white wa:overflow-hidden" style={{ boxShadow: '0 1px 1px rgba(0,0,0,0.06), 0 2px 5px rgba(0,0,0,0.06)', borderRadius: '0 0 3px 3px' }}>
        <ConversationList
          ref={conversationListRef}
          onSelectConversation={setSelectedConversation}
          selectedConversationId={selectedConversation?.id}
          isHidden={!!selectedConversation}
          instance={instance}
          provider={provider}
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
          readOnly={isReadonly}
        />
        </div>
      </div>
    </div>
  );
}
