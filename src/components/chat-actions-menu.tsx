import { useEffect, useState } from 'react';
import { MoreVertical, X, Loader2 } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { sanitizeUrl } from '@/lib/url-utils';
import { getAvatarInitials } from '@/lib/avatar-utils';
import type { ChatAction, ChatActionsResolver, Chat, DeviceConfig } from '@/lib/providers/types';

export type Conversation = {
  id: string;
  phoneNumber: string;
  contactName?: string;
  profilePicUrl?: string;
  lastActiveAt?: string;
  lastMessage?: {
    content: string;
    direction: string;
    type?: string;
  };
  unreadCount?: number;
  deviceId?: string;
  deviceLabel?: string;
};

function toChat(conversation: Conversation): Chat {
  return {
    id: conversation.id,
    phoneNumber: conversation.phoneNumber,
    contactName: conversation.contactName,
    profilePicUrl: conversation.profilePicUrl,
    lastActiveAt: conversation.lastActiveAt,
    lastMessage: conversation.lastMessage as Chat['lastMessage'],
    unreadCount: conversation.unreadCount,
  };
}

export function ChatActionsTrigger({ onOpen }: { onOpen: () => void }) {
  return (
    <div
      data-testid="chat-menu-trigger"
      role="button"
      tabIndex={0}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        onOpen();
      }}
      onMouseDown={(e) => e.stopPropagation()}
      style={{ flexShrink: 0, marginLeft: 12, padding: 6, borderRadius: '50%', background: '#f0f2f5', cursor: 'pointer' }}
    >
      <MoreVertical className="wa:h-5 wa:w-5 wa:text-[#54656f]" />
    </div>
  );
}

export function ChatActionsDialog({
  open,
  onClose,
  resolver,
  conversation,
  device,
}: {
  open: boolean;
  onClose: () => void;
  resolver?: ChatActionsResolver;
  conversation: Conversation;
  device: DeviceConfig;
}) {
  const [actions, setActions] = useState<ChatAction[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;

    if (!resolver) {
      setActions([]);
      setLoading(false);
      return;
    }

    let cancelled = false;
    setLoading(true);
    setError(null);
    setActions([]);

    Promise.resolve(resolver(toChat(conversation), device))
      .then((resolved) => {
        if (!cancelled) {
          setActions(resolved);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Failed to load actions');
          setLoading(false);
        }
      });

    return () => { cancelled = true; };
  }, [open, resolver, conversation, device]);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.5)',
        }}
      />

      {/* Panel */}
      <div
        data-testid="chat-actions-panel"
        style={{
          position: 'relative',
          background: 'white',
          borderRadius: 12,
          padding: 24,
          width: '100%',
          maxWidth: 380,
          margin: '0 16px',
          boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
        }}
      >
        {/* Close button */}
        <button
          data-testid="chat-actions-close"
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 12,
            right: 12,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 4,
            borderRadius: 4,
            color: '#667781',
          }}
        >
          <X className="wa:h-5 wa:w-5" />
        </button>

        {/* Header: avatar + name + device */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
          <Avatar className="wa:h-14 wa:w-14">
            {sanitizeUrl(conversation.profilePicUrl) && (
              <AvatarImage
                src={sanitizeUrl(conversation.profilePicUrl)!}
                alt={conversation.contactName || conversation.phoneNumber}
              />
            )}
            <AvatarFallback className="wa:bg-[#dfe5e7] wa:text-[#54656f] wa:text-lg wa:font-medium">
              {getAvatarInitials(conversation.contactName, conversation.phoneNumber)}
            </AvatarFallback>
          </Avatar>
          <div>
            <div data-testid="chat-actions-contact-name" style={{ fontSize: 17, fontWeight: 600, color: '#111b21', lineHeight: '22px' }}>
              {conversation.contactName || conversation.phoneNumber}
            </div>
            {conversation.contactName && (
              <div data-testid="chat-actions-phone-number" style={{ fontSize: 13, color: '#667781', lineHeight: '18px' }}>
                {conversation.phoneNumber}
              </div>
            )}
            <div style={{ fontSize: 13, color: '#667781', lineHeight: '18px' }}>
              {device.label || device.instanceName}
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {loading && (
            <div style={{ display: 'flex', justifyContent: 'center', padding: '16px 0' }}>
              <Loader2 className="wa:h-6 wa:w-6 wa:text-[#54656f] wa:animate-spin" />
            </div>
          )}
          {error && (
            <div style={{ textAlign: 'center', padding: '12px 0', color: '#dc3545', fontSize: 14 }}>
              {error}
            </div>
          )}
          {!loading && !error && actions.map((action) => (
            <button
              key={action.id}
              data-testid="chat-action-button"
              data-action-id={action.id}
              onClick={() => {
                action.onClick(toChat(conversation), device);
                onClose();
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                width: '100%',
                padding: '10px 16px',
                border: '1px solid #e9edef',
                borderRadius: 8,
                background: 'white',
                cursor: 'pointer',
                fontSize: 14,
                color: '#111b21',
                textAlign: 'left',
              }}
              onMouseOver={(e) => { (e.currentTarget as HTMLButtonElement).style.background = '#f0f2f5'; }}
              onMouseOut={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'white'; }}
            >
              {action.icon && <action.icon className="wa:h-5 wa:w-5 wa:text-[#54656f]" />}
              {action.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
