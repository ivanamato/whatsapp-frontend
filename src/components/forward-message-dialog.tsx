import { useState, useEffect, useMemo } from 'react';
import { Search, Send, Loader2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { useProvider } from '@/lib/provider-context';
import { useTranslations } from '@/lib/i18n';

type Message = {
  id: string;
  direction: 'inbound' | 'outbound';
  content: string;
  createdAt: string;
  phoneNumber: string;
  hasMedia: boolean;
  mediaData?: {
    url: string;
    contentType?: string;
    filename?: string;
  };
  messageType?: string;
  caption?: string | null;
  mimeType?: string | null;
  filename?: string | null;
};

type Conversation = {
  id: string;
  phoneNumber: string;
  contactName?: string;
  profilePicUrl?: string;
};

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  message: Message | null;
  instance?: string;
  onForwarded?: () => void;
};

export function ForwardMessageDialog({
  open,
  onOpenChange,
  message,
  instance,
  onForwarded,
}: Props) {
  const provider = useProvider();
  const t = useTranslations();
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [loadingConversations, setLoadingConversations] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedRecipient, setSelectedRecipient] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (open && instance) {
      setLoadingConversations(true);
      provider
        .findChats(instance)
        .then((chats) => {
          setConversations(
            chats.map((chat) => ({
              id: chat.id,
              phoneNumber: chat.phoneNumber,
              contactName: chat.contactName,
              profilePicUrl: chat.profilePicUrl,
            }))
          );
        })
        .catch((err) => {
          if (process.env.NODE_ENV !== 'production') {
            console.error('Error fetching conversations:', err instanceof Error ? err.message : String(err));
          }
        })
        .finally(() => {
          setLoadingConversations(false);
        });
    }
  }, [open, instance, provider]);

  const filteredConversations = useMemo(() => {
    if (!search.trim()) return conversations;
    const q = search.toLowerCase();
    return conversations.filter(
      (c) =>
        c.contactName?.toLowerCase().includes(q) ||
        c.phoneNumber.includes(q)
    );
  }, [conversations, search]);

  const handleForward = async () => {
    if (!message || !selectedRecipient || !instance) return;

    setSending(true);
    setError(null);

    try {
      if (message.hasMedia && message.mediaData?.url) {
        // Forward media message: extract base64 from data URI if available
        const mediaUrl = message.mediaData.url;
        let base64 = mediaUrl;
        if (mediaUrl.startsWith('data:')) {
          base64 = mediaUrl.split(',')[1];
        }
        const mediaType = (message.messageType as 'image' | 'video' | 'audio' | 'document') || 'document';
        await provider.sendMedia(instance, {
          to: selectedRecipient,
          mediaType,
          media: base64,
          caption: message.caption || undefined,
          fileName: message.filename || message.mediaData.filename || undefined,
          mimeType: message.mimeType || message.mediaData.contentType || undefined,
        });
      } else {
        await provider.sendText(instance, {
          to: selectedRecipient,
          body: message.content,
        });
      }

      handleReset();
      onOpenChange(false);
      onForwarded?.();
    } catch (err) {
      if (process.env.NODE_ENV !== 'production') {
        console.error('Error forwarding message:', err instanceof Error ? err.message : String(err));
      }
      setError(t('forwardDialog.genericError') || 'Failed to forward message');
    } finally {
      setSending(false);
    }
  };

  const handleReset = () => {
    setSearch('');
    setSelectedRecipient(null);
    setError(null);
  };

  const previewText = message
    ? message.caption || message.content || `[${message.messageType || 'Media'}]`
    : '';

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        onOpenChange(isOpen);
        if (!isOpen) handleReset();
      }}
    >
      <DialogContent className="sm:wa:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{t('forwardDialog.title')}</DialogTitle>
          <DialogDescription>{t('forwardDialog.description')}</DialogDescription>
        </DialogHeader>

        {error && (
          <div className="wa:p-3 wa:bg-red-50 wa:border wa:border-red-200 wa:rounded-lg wa:text-sm wa:text-red-800">
            {error}
          </div>
        )}

        {/* Message preview */}
        <div className="wa:p-3 wa:bg-[#f0f2f5] wa:rounded-lg wa:border wa:border-[#d1d7db]">
          <p className="wa:text-xs wa:text-[#667781] wa:mb-1">{t('forwardDialog.forwarding')}</p>
          <p className="wa:text-sm wa:text-[#111b21] wa:line-clamp-3">{previewText}</p>
        </div>

        {/* Search */}
        <div className="wa:relative">
          <Search className="wa:absolute wa:left-3 wa:top-1/2 -wa:translate-y-1/2 wa:h-4 wa:w-4 wa:text-[#667781]" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t('forwardDialog.searchContacts')}
            className="wa:pl-9 wa:bg-white wa:border-[#d1d7db] focus-visible:wa:ring-[#00a884]"
          />
        </div>

        {/* Conversation list */}
        <ScrollArea className="wa:h-[300px] -wa:mx-2">
          {loadingConversations ? (
            <div className="wa:flex wa:items-center wa:justify-center wa:h-full">
              <Loader2 className="wa:h-6 wa:w-6 wa:animate-spin wa:text-[#667781]" />
            </div>
          ) : filteredConversations.length === 0 ? (
            <p className="wa:text-center wa:text-sm wa:text-[#667781] wa:py-8">{t('forwardDialog.noContactsFound')}</p>
          ) : (
            <div className="wa:space-y-0.5 wa:px-2">
              {filteredConversations.map((conv) => (
                <button
                  key={conv.id}
                  onClick={() => setSelectedRecipient(conv.phoneNumber)}
                  className={cn(
                    'wa:w-full wa:flex wa:items-center wa:gap-3 wa:px-3 wa:py-2.5 wa:rounded-lg wa:text-left wa:transition-colors',
                    selectedRecipient === conv.phoneNumber
                      ? 'wa:bg-[#00a884]/10 wa:ring-1 wa:ring-[#00a884]'
                      : 'hover:wa:bg-[#f0f2f5]'
                  )}
                >
                  <div className="wa:w-10 wa:h-10 wa:rounded-full wa:bg-[#dfe5e7] wa:flex wa:items-center wa:justify-center wa:flex-shrink-0">
                    <span className="wa:text-sm wa:text-[#667781] wa:font-medium">
                      {(conv.contactName || conv.phoneNumber).charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div className="wa:flex-1 wa:min-w-0">
                    <p className="wa:text-sm wa:font-medium wa:text-[#111b21] wa:truncate">
                      {conv.contactName || conv.phoneNumber}
                    </p>
                    {conv.contactName && (
                      <p className="wa:text-xs wa:text-[#667781] wa:truncate">{conv.phoneNumber}</p>
                    )}
                  </div>
                </button>
              ))}
            </div>
          )}
        </ScrollArea>

        {/* Send button */}
        <div className="wa:flex wa:justify-end wa:gap-2">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            {t('forwardDialog.cancel')}
          </Button>
          <Button
            onClick={handleForward}
            disabled={!selectedRecipient || sending}
            className="wa:bg-[#00a884] hover:wa:bg-[#008f6f]"
          >
            {sending ? (
              <Loader2 className="wa:h-4 wa:w-4 wa:animate-spin" />
            ) : (
              <>
                <Send className="wa:h-4 wa:w-4 wa:mr-1" />
                {t('forwardDialog.forward')}
              </>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
