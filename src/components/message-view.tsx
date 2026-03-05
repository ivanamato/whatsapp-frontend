import { useEffect, useLayoutEffect, useState, useMemo, useRef, useCallback } from 'react';
import { format, isValid, isToday, isYesterday, differenceInHours } from 'date-fns';
import { RefreshCw, Paperclip, Send, X, AlertCircle, MessageSquare, XCircle, ListTree, ArrowLeft, Loader2, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { MediaMessage } from '@/components/media-message';
import { AudioPlayer } from '@/components/audio-player';
import { TemplateSelectorDialog } from '@/components/template-selector-dialog';
import { InteractiveMessageDialog } from '@/components/interactive-message-dialog';
import { MessageContextMenu } from '@/components/message-context-menu';
import { ForwardMessageDialog } from '@/components/forward-message-dialog';
import { useAutoPolling } from '@/hooks/use-auto-polling';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Skeleton } from '@/components/ui/skeleton';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useProvider } from '@/lib/provider-context';
import { useTranslations } from '@/lib/i18n';
import type { WhatsAppProvider } from '@/lib/providers/types';
import { sanitizeUrl, sanitizeDisplayFilename } from '@/lib/url-utils';
import { getAvatarInitials } from '@/lib/avatar-utils';

type Message = {
  id: string;
  direction: 'inbound' | 'outbound';
  content: string;
  createdAt: string;
  status?: string;
  phoneNumber: string;
  hasMedia: boolean;
  mediaData?: {
    url: string;
    contentType?: string;
    filename?: string;
    byteSize?: number;
  };
  reactionEmoji?: string | null;
  reactedToMessageId?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  messageType?: string;
  caption?: string | null;
  metadata?: {
    mediaId?: string;
  };
};

function formatMessageTime(timestamp: string): string {
  try {
    const date = new Date(timestamp);
    if (isValid(date)) {
      return format(date, 'HH:mm');
    }
    return '';
  } catch {
    return '';
  }
}

function formatDateDivider(timestamp: string, todayLabel: string, yesterdayLabel: string): string {
  try {
    const date = new Date(timestamp);
    if (!isValid(date)) return '';

    if (isToday(date)) return todayLabel;
    if (isYesterday(date)) return yesterdayLabel;
    return format(date, 'MMMM d, yyyy');
  } catch {
    return '';
  }
}

function shouldShowDateDivider(currentMsg: Message, prevMsg: Message | null): boolean {
  if (!prevMsg) return true;

  try {
    const currentDate = new Date(currentMsg.createdAt);
    const prevDate = new Date(prevMsg.createdAt);

    if (!isValid(currentDate) || !isValid(prevDate)) return false;

    return format(currentDate, 'yyyy-MM-dd') !== format(prevDate, 'yyyy-MM-dd');
  } catch {
    return false;
  }
}

function isWithin24HourWindow(messages: Message[]): boolean {
  const inboundMessages = messages.filter(msg => msg.direction === 'inbound');

  if (inboundMessages.length === 0) {
    return false;
  }

  const lastInboundMessage = inboundMessages[inboundMessages.length - 1];

  try {
    const lastMessageDate = new Date(lastInboundMessage.createdAt);
    if (!isValid(lastMessageDate)) return false;

    const hoursSinceLastMessage = differenceInHours(new Date(), lastMessageDate);
    return hoursSinceLastMessage < 24;
  } catch {
    return false;
  }
}

function getDisabledInputMessage(messages: Message[], noInbound: string, outside24h: string): string {
  const inboundMessages = messages.filter(msg => msg.direction === 'inbound');

  if (inboundMessages.length === 0) {
    return noInbound;
  }

  return outside24h;
}

function readFileAsBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      const base64 = result.split(',')[1];
      resolve(base64);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function getMediaType(mimeType: string): 'image' | 'video' | 'audio' | 'document' {
  if (mimeType.startsWith('image/')) return 'image';
  if (mimeType.startsWith('video/')) return 'video';
  if (mimeType.startsWith('audio/')) return 'audio';
  return 'document';
}

/** Should we show the tail on this bubble? Only on the first message in a consecutive group from the same direction. */
function shouldShowTail(messages: Message[], index: number): boolean {
  if (index === 0) return true;
  const prev = messages[index - 1];
  const curr = messages[index];
  if (prev.direction !== curr.direction) return true;
  // Also show tail if there's a date divider between them
  return shouldShowDateDivider(curr, prev);
}

type Props = {
  conversationId?: string;
  phoneNumber?: string;
  contactName?: string;
  profilePicUrl?: string;
  onTemplateSent?: (phoneNumber: string) => Promise<void>;
  onBack?: () => void;
  isVisible?: boolean;
  instance?: string;
  provider?: string;
  readOnly?: boolean;
  providerOverride?: WhatsAppProvider;
};

export function MessageView({ conversationId, phoneNumber, contactName, profilePicUrl, onTemplateSent, onBack, isVisible = false, instance, provider: providerType, readOnly = false, providerOverride }: Props) {
  const contextProvider = useProvider();
  const provider = providerOverride || contextProvider;
  const t = useTranslations();
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [messageInput, setMessageInput] = useState('');
  const [sending, setSending] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [canSendRegularMessage, setCanSendRegularMessage] = useState(true);
  const [showTemplateDialog, setShowTemplateDialog] = useState(false);
  const [showInteractiveDialog, setShowInteractiveDialog] = useState(false);
  const [forwardMessage, setForwardMessage] = useState<Message | null>(null);
  // isNearBottom tracked via ref only — no state to avoid re-render on scroll
  const [hasMore, setHasMore] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const currentPageRef = useRef(1);
  const loadingMoreRef = useRef(false);
  const pendingScrollRestoreRef = useRef<number | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<Element | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const previousMessageCountRef = useRef(0);
  const abortControllerRef = useRef<AbortController | null>(null);
  const isNearBottomRef = useRef(true);
  const scrollRafRef = useRef<number | null>(null);
  const scrollCleanupRef = useRef<(() => void) | null>(null);

  const isCloudProvider = providerType === 'cloud';

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  /** Apply reactions to messages and sort chronologically */
  const processMessages = (data: Message[]): Message[] => {
    const reactions = data.filter((msg) => msg.messageType === 'reaction');
    const regularMessages = data.filter((msg) => msg.messageType !== 'reaction');

    const reactionMap = new Map<string, string>();
    reactions.forEach((reaction) => {
      if (reaction.reactedToMessageId && reaction.reactionEmoji) {
        reactionMap.set(reaction.reactedToMessageId, reaction.reactionEmoji);
      }
    });

    const messagesWithReactions = regularMessages.map((msg) => {
      const reaction = reactionMap.get(msg.id);
      return reaction ? { ...msg, reactionEmoji: reaction } : msg;
    });

    return messagesWithReactions.sort((a, b) => {
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    });
  };

  /** Fetch page 1 — used for initial load and auto-polling */
  const fetchInitialMessages = useCallback(async () => {
    if (!conversationId || !instance) return;

    try {
      const result = await provider.findMessagesPaginated(instance, conversationId, { page: 1 });
      const processed = processMessages(result.messages);

      setHasMore(result.pagination.hasMore);

      setMessages(prev => {
        // Filter out optimistic messages that now have real counterparts
        const withoutOptimistic = prev.filter(m => !m.id.startsWith('optimistic-'));

        if (currentPageRef.current === 1) {
          if (withoutOptimistic.length !== processed.length) return processed;
          const changed = processed.some((msg, i) => msg.id !== withoutOptimistic[i]?.id || msg.status !== withoutOptimistic[i]?.status || msg.reactionEmoji !== withoutOptimistic[i]?.reactionEmoji);
          return changed ? processed : prev;
        }
        // Auto-poll with older pages loaded — merge new page-1 messages with existing older ones
        const olderMessages = withoutOptimistic.filter(
          (msg) => !processed.some((p) => p.id === msg.id)
        );
        const merged = [...olderMessages, ...processed];
        merged.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
        const changed = merged.length !== withoutOptimistic.length || merged.some((msg, i) => msg.id !== withoutOptimistic[i]?.id || msg.status !== withoutOptimistic[i]?.status || msg.reactionEmoji !== withoutOptimistic[i]?.reactionEmoji);
        return changed ? merged : prev;
      });
      previousMessageCountRef.current = processed.length;
    } catch (error) {
      // Ignore aborted requests
      if (error instanceof DOMException && error.name === 'AbortError') return;
      if (process.env.NODE_ENV !== 'production') {
        console.error('Error fetching messages:', error instanceof Error ? error.message : String(error));
      }
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [conversationId, instance, provider]);

  /** Fetch older pages when scrolling up */
  const fetchOlderMessages = useCallback(async () => {
    if (!conversationId || !instance || !hasMore || loadingMoreRef.current) return;

    const container = messagesContainerRef.current;
    const viewport = container && typeof container.querySelector === 'function'
      ? (viewportRef.current || container.querySelector('[data-radix-scroll-area-viewport]'))
      : viewportRef.current;
    if (!viewport) return;

    loadingMoreRef.current = true;
    setLoadingMore(true);

    // Save scroll height before prepending
    pendingScrollRestoreRef.current = viewport.scrollHeight;

    const nextPage = currentPageRef.current + 1;

    try {
      const result = await provider.findMessagesPaginated(instance, conversationId, { page: nextPage });
      const processed = processMessages(result.messages);

      currentPageRef.current = nextPage;
      setHasMore(result.pagination.hasMore);

      setMessages(prev => {
        // Deduplicate and prepend older messages
        const existingIds = new Set(prev.map(m => m.id));
        const newOlder = processed.filter(m => !existingIds.has(m.id));
        const merged = [...newOlder, ...prev];
        merged.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
        return merged;
      });
    } catch (error) {
      if (process.env.NODE_ENV !== 'production') {
        console.error('Error fetching older messages:', error instanceof Error ? error.message : String(error));
      }
      pendingScrollRestoreRef.current = null;
    } finally {
      loadingMoreRef.current = false;
      setLoadingMore(false);
    }
  }, [conversationId, instance, provider, hasMore]);

  // Reset pagination state on conversation switch + AbortController
  useEffect(() => {
    // Abort any in-flight requests from previous conversation
    abortControllerRef.current?.abort();
    abortControllerRef.current = new AbortController();

    currentPageRef.current = 1;
    setHasMore(false);
    setMessages([]);
    setFileError(null);
    loadingMoreRef.current = false;
    pendingScrollRestoreRef.current = null;
    if (conversationId && instance) {
      setLoading(true);
      fetchInitialMessages();
    }
  }, [conversationId, instance]); // eslint-disable-line react-hooks/exhaustive-deps

  // Resolve the Radix viewport DOM element from the wrapper div
  const getViewport = useCallback((): Element | null => {
    if (viewportRef.current) return viewportRef.current;
    const container = messagesContainerRef.current;
    if (!container || typeof container.querySelector !== 'function') return null;
    const vp = container.querySelector('[data-radix-scroll-area-viewport]');
    if (vp) viewportRef.current = vp;
    return vp;
  }, []);

  // Scroll restoration after prepending older messages
  useLayoutEffect(() => {
    if (pendingScrollRestoreRef.current === null) return;
    const viewport = getViewport();
    if (!viewport) return;

    const prevHeight = pendingScrollRestoreRef.current;
    pendingScrollRestoreRef.current = null;
    const newHeight = viewport.scrollHeight;
    viewport.scrollTop += newHeight - prevHeight;
  }, [messages, getViewport]);

  useEffect(() => {
    if (isNearBottomRef.current && !loadingMore) {
      scrollToBottom();
    }
  }, [messages, loadingMore]);

  useEffect(() => {
    if (isCloudProvider) {
      setCanSendRegularMessage(isWithin24HourWindow(messages));
    } else {
      setCanSendRegularMessage(true);
    }
  }, [messages, isCloudProvider]);

  // Throttled scroll handler using rAF — attach after viewport is available
  useEffect(() => {
    // Defer to let Radix mount the viewport
    const attachTimer = setTimeout(() => {
      const viewport = getViewport();
      if (!viewport) return;

      const handleScroll = () => {
        if (scrollRafRef.current !== null) return;

        scrollRafRef.current = requestAnimationFrame(() => {
          scrollRafRef.current = null;
          const vp = viewportRef.current;
          if (!vp) return;

          const { scrollTop, scrollHeight, clientHeight } = vp;
          const distanceFromBottom = scrollHeight - scrollTop - clientHeight;
          const nearBottom = distanceFromBottom < 100;

          isNearBottomRef.current = nearBottom;

          if (scrollTop < 150 && hasMore && !loadingMoreRef.current) {
            fetchOlderMessages();
          }
        });
      };

      viewport.addEventListener('scroll', handleScroll, { passive: true });
      // Store cleanup in ref so the outer cleanup can call it
      scrollCleanupRef.current = () => {
        viewport.removeEventListener('scroll', handleScroll);
        if (scrollRafRef.current !== null) {
          cancelAnimationFrame(scrollRafRef.current);
          scrollRafRef.current = null;
        }
      };
    }, 100);

    return () => {
      clearTimeout(attachTimer);
      scrollCleanupRef.current?.();
      scrollCleanupRef.current = null;
    };
  }, [hasMore, fetchOlderMessages, getViewport]);

  const handleRefresh = () => {
    setRefreshing(true);
    fetchInitialMessages();
  };

  useAutoPolling({
    interval: 5000,
    enabled: !!conversationId && !!instance,
    onPoll: fetchInitialMessages
  });

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileError(null);

    // 16 MB size limit (WhatsApp's actual limit)
    if (file.size > 16 * 1024 * 1024) {
      setFileError(t('messageView.fileTooLarge') || 'File exceeds 16 MB limit');
      e.target.value = '';
      return;
    }

    // Validate MIME type beyond the accept attribute (which is a UI hint only)
    const allowedPrefixes = ['image/', 'video/', 'audio/'];
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];
    if (
      !allowedPrefixes.some((p) => file.type.startsWith(p)) &&
      !allowedTypes.includes(file.type)
    ) {
      setFileError(t('messageView.fileTypeNotAllowed') || 'File type not supported');
      e.target.value = '';
      return;
    }

    // Validate magic bytes to prevent MIME-type spoofing for dangerous file types
    try {
      const header = new Uint8Array(await file.slice(0, 4).arrayBuffer());
      const headerText = new TextDecoder().decode(header);
      // Block files that start with HTML/XML-like content (potential script execution)
      if (headerText.startsWith('<') || headerText.startsWith('<!')) {
        setFileError(t('messageView.fileTypeNotAllowed') || 'File type not supported');
        e.target.value = '';
        return;
      }
    } catch {
      // If we can't read the file header, allow it (fallback to server-side validation)
    }

    setSelectedFile(file);

    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFilePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setFilePreview(null);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setFilePreview(null);
    setFileError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    if ((!messageInput.trim() && !selectedFile) || !phoneNumber || !instance || sending) return;

    const text = messageInput.trim();
    const file = selectedFile;

    // Optimistic update — show message immediately with pending status
    const optimisticId = `optimistic-${Date.now()}`;
    const optimisticMessage: Message = {
      id: optimisticId,
      direction: 'outbound',
      content: file ? (text || file.name) : text,
      createdAt: new Date().toISOString(),
      status: 'pending',
      phoneNumber,
      hasMedia: !!file,
      messageType: file ? getMediaType(file.type) : 'text',
      caption: file && text ? text : null,
      reactionEmoji: null,
      reactedToMessageId: null,
      filename: file?.name || null,
      mimeType: file?.type || null,
    };

    setMessages(prev => [...prev, optimisticMessage]);
    setMessageInput('');
    handleRemoveFile();
    isNearBottomRef.current = true;

    setSending(true);
    try {
      if (file) {
        const base64 = await readFileAsBase64(file);
        const mediaType = getMediaType(file.type);
        await provider.sendMedia(instance, {
          to: phoneNumber,
          mediaType,
          media: base64,
          caption: text || undefined,
          fileName: file.name.replace(/[\x00-\x1f/\\:*?"<>|]/g, '_').replace(/^\.+/, '_').replace(/[.\s]+$/, '').slice(0, 255) || 'unnamed',
          mimeType: file.type,
        });
      } else {
        await provider.sendText(instance, {
          to: phoneNumber,
          body: text,
        });
      }

      // Fetch real messages to reconcile
      await fetchInitialMessages();
    } catch (error) {
      if (process.env.NODE_ENV !== 'production') {
        console.error('Error sending message:', error instanceof Error ? error.message : String(error));
      }
      // Mark optimistic message as failed
      setMessages(prev => prev.map(m =>
        m.id === optimisticId ? { ...m, status: 'failed' } : m
      ));
    } finally {
      setSending(false);
    }
  };

  const handleTemplateSent = async () => {
    await fetchInitialMessages();

    if (phoneNumber && onTemplateSent) {
      await onTemplateSent(phoneNumber);
    }
  };

  // Empty state — no conversation selected
  if (!conversationId) {
    return (
      <div className={cn(
        "wa:flex-1 wa:flex wa:flex-col wa:items-center wa:justify-center wa:bg-[#f0f2f5] wa:border-b-[6px] wa:border-[#00a884]",
        !isVisible && "wa-content--hidden"
      )}>
        <div className="wa:text-center wa:max-w-[560px] wa:px-6">
          <div className="wa:w-[320px] wa:h-[188px] wa:mx-auto wa:mb-8 wa:flex wa:items-center wa:justify-center">
            <svg viewBox="0 0 303 172" width="320" className="wa:text-[#dfe5e7]">
              <path fill="currentColor" d="M229.565 160.229c32.647-16.166 55.1-50.26 55.1-89.52 0-55.107-45.235-99.791-100.418-99.791-38.633 0-72.103 21.423-88.856 52.891-2.309-.098-4.632-.148-6.968-.148C39.643 23.661 0 63.304 0 112.084c0 24.283 9.834 46.269 25.74 62.21a5.907 5.907 0 0 1-.083-.333c-2.319-10.974-7.19-28.22-18.148-43.478l.063-.043c10.753 6.68 43.07 22.992 80.857 18.498 25.566 19.477 57.102 29.99 90.351 29.99 15.694 0 30.794-2.711 44.846-7.661-1.006-.089-2.013-.192-3.019-.31a209.273 209.273 0 0 1-19.306-3.32c6.839 2.726 15.161-4.476 28.264-7.408z" opacity=".4"/>
            </svg>
          </div>
          <h2 className="wa:text-[32px] wa:font-light wa:text-[#41525d] wa:mb-2.5 wa:leading-tight">{t('messageView.title')}</h2>
          <p className="wa:text-[14px] wa:text-[#667781] wa:leading-[20px]">
            {t('messageView.emptyStateDescription')}
          </p>
        </div>
      </div>
    );
  }

  // Loading state
  if (loading) {
    return (
      <div className={cn(
        "wa:flex-1 wa:flex wa:flex-col",
        !isVisible && "wa-content--hidden"
      )}>
        {/* Header skeleton */}
        <div className="wa:px-4 wa:py-[10px] wa:bg-[#f0f2f5] wa:border-l wa:border-[#e9edef] wa:flex wa:items-center wa:gap-3">
          {onBack && (
            <Button onClick={onBack} variant="ghost" size="icon" className="wa-back-btn wa:text-[#54656f]">
              <ArrowLeft className="wa:h-5 wa:w-5" />
            </Button>
          )}
          <Skeleton className="wa:h-10 wa:w-10 wa:rounded-full wa:flex-shrink-0" />
          <div className="wa:flex-1">
            <Skeleton className="wa:h-4 wa:w-36 wa:mb-1.5" />
            <Skeleton className="wa:h-3 wa:w-28" />
          </div>
        </div>
        {/* Chat area skeleton */}
        <div className="wa-chat-bg wa:flex-1 wa:px-[5%] wa:py-4">
          <div className="wa:max-w-[850px] wa:mx-auto wa:space-y-3">
            {[220, 280, 190, 310, 250, 170].map((width, i) => (
              <div key={i} className={cn('wa:flex wa:mb-2', i % 2 === 0 ? 'wa:justify-end' : 'wa:justify-start')}>
                <div className={cn(
                  'wa:max-w-[70%] wa:rounded-lg wa:px-3 wa:py-2',
                  i % 2 === 0 ? 'wa:bg-[#d9fdd3]' : 'wa:bg-white'
                )}>
                  <Skeleton className="wa:h-4 wa:mb-2 wa:bg-black/5" style={{ width: `${width}px` }} />
                  <Skeleton className="wa:h-3 wa:w-16 wa:bg-black/5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn(
      "wa:flex-1 wa:flex wa:flex-col wa:min-w-0",
      !isVisible && "wa-content--hidden"
    )}>
      {/* ── Header ── */}
      <div style={{ padding: '12px 16px' }} className="wa:bg-[#f0f2f5] wa:border-l wa:border-[#e9edef] wa:flex wa:items-center wa:gap-3 wa:flex-shrink-0">
        {onBack && (
          <Button
            onClick={onBack}
            variant="ghost"
            size="icon"
            className="wa-back-btn wa:text-[#54656f] hover:wa:bg-transparent wa:flex-shrink-0 wa:-ml-2"
          >
            <ArrowLeft className="wa:h-5 wa:w-5" />
          </Button>
        )}
        <Avatar className="wa:h-10 wa:w-10 wa:flex-shrink-0 wa:cursor-pointer">
          {sanitizeUrl(profilePicUrl) && <AvatarImage src={sanitizeUrl(profilePicUrl)!} alt={contactName || phoneNumber} />}
          <AvatarFallback className="wa:bg-[#dfe5e7] wa:text-[#54656f] wa:text-sm wa:font-medium">
            {getAvatarInitials(contactName, phoneNumber)}
          </AvatarFallback>
        </Avatar>
        <div className="wa:flex-1 wa:min-w-0 wa:cursor-pointer">
          <h2 className="wa:text-[16px] wa:font-normal wa:text-[#111b21] wa:truncate wa:leading-[21px]">
            {contactName || phoneNumber || 'Conversation'}
          </h2>
          {contactName && phoneNumber && (
            <p className="wa:text-[13px] wa:text-[#667781] wa:truncate wa:leading-[17px]">{phoneNumber}</p>
          )}
        </div>
        <Button
          onClick={handleRefresh}
          disabled={refreshing}
          variant="ghost"
          size="icon"
          className="wa:text-[#54656f] hover:wa:bg-transparent wa:h-10 wa:w-10"
        >
          <RefreshCw className={cn("wa:h-[20px] wa:w-[20px]", refreshing && "wa:animate-spin")} />
        </Button>
      </div>

      {/* ── Chat messages area ── */}
      <div ref={messagesContainerRef} style={{ flex: 1, height: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <ScrollArea style={{ flex: 1, height: 0, overflow: 'auto' }} className="wa-chat-bg">
        <div style={{ padding: '12px 5%' }}>
          <div>
          {/* Loading older messages spinner */}
          {loadingMore && (
            <div className="wa:flex wa:justify-center wa:py-3">
              <div className="wa:flex wa:items-center wa:gap-2 wa:bg-white wa:text-[#667781] wa:text-[12.5px] wa:px-3 wa:py-1.5 wa:rounded-[7.5px] wa:shadow-[0_1px_0.5px_rgba(11,20,26,0.13)]">
                <Loader2 className="wa:h-3.5 wa:w-3.5 wa:animate-spin" />
                {t('messageView.loadingOlderMessages')}
              </div>
            </div>
          )}

          {/* Beginning of conversation banner */}
          {!hasMore && currentPageRef.current > 1 && (
            <div className="wa:flex wa:justify-center wa:py-3">
              <span className="wa:bg-[#fdf4c5] wa:text-[#54656f] wa:text-[12.5px] wa:px-3 wa:py-1.5 wa:rounded-[7.5px] wa:shadow-[0_1px_0.5px_rgba(11,20,26,0.13)] wa:text-center wa:max-w-[330px]">
                {t('messageView.encryptionNotice')}
              </span>
            </div>
          )}

          {messages.length === 0 ? (
            <div className="wa:flex wa:justify-center wa:mt-8">
              <span className="wa:bg-[#fdf4c5] wa:text-[#54656f] wa:text-[12.5px] wa:px-3 wa:py-1.5 wa:rounded-[7.5px] wa:shadow-[0_1px_0.5px_rgba(11,20,26,0.13)] wa:text-center wa:max-w-[330px]">
                {t('messageView.encryptionNotice')}
              </span>
            </div>
          ) : (
            messages.map((message, index) => {
              const prevMessage = index > 0 ? messages[index - 1] : null;
              const showDateDivider = shouldShowDateDivider(message, prevMessage);
              const showTail = shouldShowTail(messages, index);
              const isOutbound = message.direction === 'outbound';

              return (
                <div key={message.id}>
                  {showDateDivider && (
                    <div style={{ margin: '20px 0' }} className="wa:flex wa:justify-center">
                      <span style={{ padding: '7px 14px' }} className="wa:bg-white wa:text-[#54656f] wa:text-[12.5px] wa:rounded-[7.5px] wa:shadow-[0_1px_0.5px_rgba(11,20,26,0.13)] wa:select-none wa:font-normal">
                        {formatDateDivider(message.createdAt, t('messageView.today'), t('messageView.yesterday'))}
                      </span>
                    </div>
                  )}

                  <div
                    style={showTail ? { marginBottom: 6, marginTop: 6 } : { marginBottom: 6 }}
                    className={cn(
                      'wa:flex wa-msg-bubble',
                      isOutbound ? 'wa:justify-end' : 'wa:justify-start',
                    )}
                  >
                    <div className={cn(
                      "wa:relative wa:max-w-[65%]",
                      isOutbound ? 'wa:pr-2' : 'wa:pl-2'
                    )}>
                      {/* Context menu */}
                      {message.messageType !== 'deleted' && (
                        <MessageContextMenu
                          message={message}
                          conversationId={conversationId}
                          instance={instance}
                          provider={providerType}
                          onDeleted={fetchInitialMessages}
                          onForward={setForwardMessage}
                          readOnly={readOnly}
                        />
                      )}

                      {/* The bubble */}
                      <div
                        style={{ padding: '7px 12px 9px' }}
                        className={cn(
                          'wa:rounded-[7.5px] wa:shadow-[0_1px_0.5px_rgba(11,20,26,0.13)]',
                          isOutbound
                            ? 'wa:bg-[#d9fdd3] wa:text-[#111b21]'
                            : 'wa:bg-white wa:text-[#111b21]',
                          // Tail styling
                          showTail && isOutbound && 'wa-bubble-out wa:rounded-tr-none',
                          showTail && !isOutbound && 'wa-bubble-in wa:rounded-tl-none',
                          !showTail && isOutbound && 'wa:rounded-tr-[7.5px]',
                          !showTail && !isOutbound && 'wa:rounded-tl-[7.5px]',
                        )}
                      >
                      {message.messageType === 'deleted' ? (
                        <p className="wa:text-[14.2px] wa:leading-[19px] wa:italic wa:text-[#8696a0]">
                          {t('messageView.messageDeleted')}
                        </p>
                      ) : (
                        <>
                          {/* Media content */}
                          {message.hasMedia && message.mediaData?.url ? (
                            <div style={{ margin: '-7px -12px 4px' }} className="wa:overflow-hidden wa:rounded-t-[7.5px]">
                              {message.messageType === 'sticker' ? (
                                <img
                                  src={sanitizeUrl(message.mediaData.url) ?? ''}
                                  alt="Sticker"
                                  style={{ margin: '7px 12px 0' }}
                                  className="wa:max-w-[150px] wa:max-h-[150px] wa:h-auto"
                                />
                              ) : message.mediaData.contentType?.startsWith('image/') || message.messageType === 'image' ? (
                                <img
                                  src={sanitizeUrl(message.mediaData.url) ?? ''}
                                  alt="Image"
                                  className="wa:w-full wa:h-auto wa:max-h-[330px] wa:object-cover"
                                />
                              ) : message.mediaData.contentType?.startsWith('video/') || message.messageType === 'video' ? (
                                <video
                                  src={sanitizeUrl(message.mediaData.url) ?? ''}
                                  controls
                                  className="wa:w-full wa:h-auto wa:max-h-[330px]"
                                />
                              ) : message.mediaData.contentType?.startsWith('audio/') || message.messageType === 'audio' ? (
                                <div style={{ padding: '7px 12px 0' }}>
                                  <AudioPlayer src={sanitizeUrl(message.mediaData.url) ?? ''} isOutbound={isOutbound} />
                                </div>
                              ) : (
                                <div style={{ padding: '7px 12px 0' }}>
                                  <a
                                    href={sanitizeUrl(message.mediaData.url) ?? '#'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="wa:flex wa:items-center wa:gap-2 wa:text-[14.2px] wa:underline wa:cursor-pointer hover:wa:opacity-80 wa:text-[#027eb5]"
                                  >
                                    <Paperclip className="wa:h-4 wa:w-4 wa:flex-shrink-0" />
                                    {sanitizeDisplayFilename(message.mediaData.filename || message.filename) || t('messageView.downloadFile')}
                                  </a>
                                </div>
                              )}
                            </div>
                          ) : message.metadata?.mediaId && message.messageType ? (
                            <div className="wa:mb-1">
                              <MediaMessage
                                mediaId={message.metadata.mediaId}
                                messageType={message.messageType}
                                caption={message.caption}
                                filename={message.filename}
                                isOutbound={isOutbound}
                                instance={instance}
                                providerOverride={providerOverride}
                              />
                            </div>
                          ) : null}

                          {/* Caption */}
                          {message.caption && (
                            <p className="wa:text-[14.2px] wa:leading-[19px] wa:break-words wa:whitespace-pre-wrap wa:mt-1">
                              {message.caption}
                            </p>
                          )}

                          {/* Text content */}
                          {message.content && message.content !== message.caption && (
                            <p className="wa:text-[14.2px] wa:leading-[19px] wa:break-words wa:whitespace-pre-wrap">
                              {message.content}
                            </p>
                          )}
                        </>
                      )}

                      {/* Timestamp + delivery status */}
                      <div style={{ marginTop: '2px', gap: '3px' }} className="wa:flex wa:justify-end wa:items-center">
                        <span className="wa:text-[11px] wa:text-[#667781] wa:leading-none wa:select-none">
                          {formatMessageTime(message.createdAt)}
                        </span>
                        {isOutbound && message.status && (
                          <>
                            {message.status === 'failed' ? (
                              <XCircle className="wa:h-[15px] wa:w-[15px] wa:text-red-500" />
                            ) : message.status === 'pending' ? (
                              <Clock className="wa:h-[13px] wa:w-[13px] wa:text-[#8696a0]" />
                            ) : (
                              <span className={cn(
                                "wa:text-[16px] wa:leading-none",
                                message.status === 'read' ? 'wa:text-[#53bdeb]' : 'wa:text-[#8696a0]'
                              )}>
                                {message.status === 'read' ? '✓✓' :
                                 message.status === 'delivered' ? '✓✓' :
                                 message.status === 'sent' ? '✓' : ''}
                              </span>
                            )}
                          </>
                        )}
                      </div>

                      {isOutbound && message.status === 'failed' && (
                        <div className="wa:mt-0.5 wa:clear-both">
                          <span className="wa:text-[11px] wa:text-red-500 wa:flex wa:items-center wa:gap-1">
                            {t('messageView.notDelivered')}
                          </span>
                        </div>
                      )}

                      {/* Reaction */}
                      {message.reactionEmoji && (
                        <div className="wa:absolute -wa:bottom-2.5 wa:right-1 wa:bg-white wa:rounded-full wa:px-1 wa:py-0.5 wa:text-[14px] wa:shadow-[0_1px_3px_rgba(11,20,26,0.16)] wa:leading-none wa:select-none">
                          {message.reactionEmoji.replace(/[\u200B-\u200F\u202A-\u202E\u2066-\u2069\uFEFF\x00-\x1F]/g, '').slice(0, 8)}
                        </div>
                      )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
          <div ref={messagesEndRef} />
          </div>
        </div>
      </ScrollArea>
      </div>

      {/* ── Input area ── */}
      {readOnly ? (
        <div className="wa:bg-[#f0f2f5] wa:border-l wa:border-[#e9edef] wa:flex-shrink-0 wa:px-4 wa:py-3 wa:text-center wa:text-[13px] wa:text-[#667781]">
          {t('messageView.readOnlyMode')}
        </div>
      ) : (
      <div className="wa:bg-[#f0f2f5] wa:border-l wa:border-[#e9edef] wa:flex-shrink-0">
        {canSendRegularMessage ? (
          <>
            {fileError && (
              <div className="wa:px-4 wa:py-2 wa:border-b wa:border-[#e9edef] wa:bg-red-50">
                <div className="wa:flex wa:items-center wa:gap-2 wa:max-w-[900px] wa:mx-auto">
                  <AlertCircle className="wa:h-4 wa:w-4 wa:text-red-500 wa:flex-shrink-0" />
                  <p className="wa:text-[13px] wa:text-red-700 wa:flex-1">{fileError}</p>
                  <button onClick={() => setFileError(null)} className="wa:text-red-400 hover:wa:text-red-600 wa:flex-shrink-0">
                    <X className="wa:h-3.5 wa:w-3.5" />
                  </button>
                </div>
              </div>
            )}

            {selectedFile && (
              <div className="wa:px-4 wa:py-2.5 wa:border-b wa:border-[#e9edef] wa:bg-white">
                <div className="wa:flex wa:items-start wa:gap-3 wa:max-w-[900px] wa:mx-auto">
                  {filePreview ? (
                    <img src={filePreview} alt="Preview" className="wa:w-16 wa:h-16 wa:object-cover wa:rounded-md" />
                  ) : (
                    <div className="wa:w-16 wa:h-16 wa:bg-[#f0f2f5] wa:rounded-md wa:flex wa:items-center wa:justify-center">
                      <Paperclip className="wa:h-6 wa:w-6 wa:text-[#667781]" />
                    </div>
                  )}
                  <div className="wa:flex-1 wa:min-w-0">
                    <p className="wa:text-[14px] wa:font-medium wa:text-[#111b21] wa:truncate">{selectedFile.name}</p>
                    <p className="wa:text-[12px] wa:text-[#667781]">{(selectedFile.size / 1024).toFixed(1)} KB</p>
                  </div>
                  <Button
                    onClick={handleRemoveFile}
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="wa:text-[#667781] hover:wa:bg-transparent wa:h-8 wa:w-8"
                  >
                    <X className="wa:h-4 wa:w-4" />
                  </Button>
                </div>
              </div>
            )}

            <form onSubmit={handleSendMessage} style={{ padding: '10px 16px' }} className="wa:w-full wa:flex wa:gap-2 wa:items-end">
              <input
                ref={fileInputRef}
                type="file"
                onChange={handleFileSelect}
                accept="image/*,video/*,audio/*,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                className="wa:hidden"
              />
              <Button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                disabled={sending}
                variant="ghost"
                size="icon"
                className="wa:text-[#54656f] hover:wa:bg-transparent hover:wa:text-[#111b21] wa:h-[42px] wa:w-[42px] wa:flex-shrink-0"
                title={t('messageView.uploadFile')}
              >
                <Paperclip className="wa:h-[22px] wa:w-[22px] wa:rotate-45" />
              </Button>
              <Button
                type="button"
                onClick={() => setShowInteractiveDialog(true)}
                disabled={sending}
                size="icon"
                variant="ghost"
                className="wa:text-[#54656f] hover:wa:bg-transparent hover:wa:text-[#111b21] wa:h-[42px] wa:w-[42px] wa:flex-shrink-0"
                title={t('messageView.sendInteractiveMessage')}
              >
                <ListTree className="wa:h-[22px] wa:w-[22px]" />
              </Button>
              <div style={{ flex: 1, minWidth: 0 }}>
                <input
                  type="text"
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      handleSendMessage(e);
                    }
                  }}
                  placeholder={t('messageView.typeMessage')}
                  disabled={sending}
                  style={{ padding: '8px 12px' }}
                  className="wa:w-full wa:h-[42px] wa:bg-white wa:border-none wa:outline-none wa:rounded-[8px] wa:text-[15px] wa:text-[#111b21] wa:placeholder-[#667781] focus:wa:ring-0"
                />
              </div>
              <Button
                type="submit"
                disabled={sending || (!messageInput.trim() && !selectedFile)}
                size="icon"
                variant="ghost"
                className={cn(
                  "wa:h-[42px] wa:w-[42px] wa:flex-shrink-0 wa:rounded-full",
                  (messageInput.trim() || selectedFile)
                    ? "wa:text-[#00a884] hover:wa:bg-transparent hover:wa:text-[#008f6f]"
                    : "wa:text-[#8696a0] hover:wa:bg-transparent"
                )}
              >
                <Send className="wa:h-[22px] wa:w-[22px]" />
              </Button>
            </form>
          </>
        ) : (
          <div className="wa:p-3 wa:max-w-[900px] wa:mx-auto wa:w-full">
            <div className="wa:bg-[#fff4cc] wa:border wa:border-[#e9c46a] wa:rounded-[8px] wa:p-4">
              <div className="wa:flex wa:items-start wa:gap-3">
                <AlertCircle className="wa:h-5 wa:w-5 wa:text-[#8b7000] wa:flex-shrink-0 wa:mt-0.5" />
                <div className="wa:flex-1 wa:min-w-0">
                  <p className="wa:text-[14px] wa:text-[#111b21] wa:mb-3">
                    {getDisabledInputMessage(messages, t('messageView.noInboundMessages'), t('messageView.outside24HourWindow'))}
                  </p>
                  <Button
                    onClick={() => setShowTemplateDialog(true)}
                    className="wa:bg-[#00a884] hover:wa:bg-[#008f6f] wa:text-white wa:h-9 wa:rounded-[8px]"
                    size="sm"
                  >
                    <MessageSquare className="wa:h-4 wa:w-4 wa:mr-2" />
                    {t('messageView.sendTemplate')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      )}

      {isCloudProvider && (
        <TemplateSelectorDialog
          open={showTemplateDialog}
          onOpenChange={setShowTemplateDialog}
          phoneNumber={phoneNumber || ''}
          onTemplateSent={handleTemplateSent}
        />
      )}

      <InteractiveMessageDialog
        open={showInteractiveDialog}
        onOpenChange={setShowInteractiveDialog}
        conversationId={conversationId}
        phoneNumber={phoneNumber}
        onMessageSent={fetchInitialMessages}
        instance={instance}
      />

      <ForwardMessageDialog
        open={!!forwardMessage}
        onOpenChange={(open) => { if (!open) setForwardMessage(null); }}
        message={forwardMessage}
        instance={instance}
        onForwarded={fetchInitialMessages}
      />
    </div>
  );
}
