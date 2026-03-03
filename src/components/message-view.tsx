import { useEffect, useState, useRef, useCallback } from 'react';
import { format, isValid, isToday, isYesterday, differenceInHours } from 'date-fns';
import { RefreshCw, Paperclip, Send, X, AlertCircle, MessageSquare, XCircle, ListTree, ArrowLeft } from 'lucide-react';
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

function formatDateDivider(timestamp: string): string {
  try {
    const date = new Date(timestamp);
    if (!isValid(date)) return '';

    if (isToday(date)) return 'Today';
    if (isYesterday(date)) return 'Yesterday';
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

function getDisabledInputMessage(messages: Message[]): string {
  const inboundMessages = messages.filter(msg => msg.direction === 'inbound');

  if (inboundMessages.length === 0) {
    return "User hasn't messaged yet. Send a template message or wait for them to reply.";
  }

  return "Last message was over 24 hours ago. Send a template message or wait for the user to message you.";
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

function getAvatarInitials(contactName?: string, phoneNumber?: string): string {
  if (contactName) {
    const words = contactName.trim().split(/\s+/);
    if (words.length >= 2) {
      return (words[0][0] + words[1][0]).toUpperCase();
    }
    return contactName.slice(0, 2).toUpperCase();
  }
  if (phoneNumber) {
    const digits = phoneNumber.replace(/\D/g, '');
    return digits.slice(-2);
  }
  return '??';
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
};

export function MessageView({ conversationId, phoneNumber, contactName, profilePicUrl, onTemplateSent, onBack, isVisible = false, instance, provider: providerType, readOnly = false }: Props) {
  const provider = useProvider();
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [messageInput, setMessageInput] = useState('');
  const [sending, setSending] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [canSendRegularMessage, setCanSendRegularMessage] = useState(true);
  const [showTemplateDialog, setShowTemplateDialog] = useState(false);
  const [showInteractiveDialog, setShowInteractiveDialog] = useState(false);
  const [forwardMessage, setForwardMessage] = useState<Message | null>(null);
  const [isNearBottom, setIsNearBottom] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const previousMessageCountRef = useRef(0);

  const isCloudProvider = providerType === 'cloud';

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const fetchMessages = useCallback(async () => {
    if (!conversationId || !instance) return;

    try {
      const data = await provider.findMessages(instance, conversationId);

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

      const sortedMessages = messagesWithReactions.sort((a, b) => {
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      });

      setMessages(prev => {
        if (prev.length !== sortedMessages.length) return sortedMessages;
        const changed = sortedMessages.some((msg, i) => msg.id !== prev[i]?.id || msg.status !== prev[i]?.status || msg.reactionEmoji !== prev[i]?.reactionEmoji);
        return changed ? sortedMessages : prev;
      });
      previousMessageCountRef.current = sortedMessages.length;
    } catch (error) {
      console.error('Error fetching messages:', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [conversationId, instance, provider]);

  useEffect(() => {
    if (conversationId && instance) {
      setLoading(true);
      fetchMessages();
    }
  }, [conversationId, instance, fetchMessages]);

  useEffect(() => {
    if (isNearBottom) {
      scrollToBottom();
    }
  }, [messages, isNearBottom]);

  useEffect(() => {
    if (isCloudProvider) {
      setCanSendRegularMessage(isWithin24HourWindow(messages));
    } else {
      setCanSendRegularMessage(true);
    }
  }, [messages, isCloudProvider]);

  useEffect(() => {
    const container = messagesContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const viewport = container.querySelector('[data-radix-scroll-area-viewport]');
      if (!viewport) return;

      const { scrollTop, scrollHeight, clientHeight } = viewport;
      const distanceFromBottom = scrollHeight - scrollTop - clientHeight;
      setIsNearBottom(distanceFromBottom < 100);
    };

    const viewport = container.querySelector('[data-radix-scroll-area-viewport]');
    if (viewport) {
      viewport.addEventListener('scroll', handleScroll);
      return () => viewport.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const handleRefresh = () => {
    setRefreshing(true);
    fetchMessages();
  };

  useAutoPolling({
    interval: 5000,
    enabled: !!conversationId && !!instance,
    onPoll: fetchMessages
  });

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

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
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    if ((!messageInput.trim() && !selectedFile) || !phoneNumber || !instance || sending) return;

    setSending(true);
    try {
      if (selectedFile) {
        const base64 = await readFileAsBase64(selectedFile);
        const mediaType = getMediaType(selectedFile.type);
        await provider.sendMedia(instance, {
          to: phoneNumber,
          mediaType,
          media: base64,
          caption: messageInput.trim() || undefined,
          fileName: selectedFile.name,
          mimeType: selectedFile.type,
        });
      } else {
        await provider.sendText(instance, {
          to: phoneNumber,
          body: messageInput.trim(),
        });
      }

      setMessageInput('');
      handleRemoveFile();
      await fetchMessages();
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setSending(false);
    }
  };

  const handleTemplateSent = async () => {
    await fetchMessages();

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
          <h2 className="wa:text-[32px] wa:font-light wa:text-[#41525d] wa:mb-2.5 wa:leading-tight">WhatsApp Inbox</h2>
          <p className="wa:text-[14px] wa:text-[#667781] wa:leading-[20px]">
            Send and receive messages. Select a conversation from the sidebar to get started.
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
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className={cn('wa:flex wa:mb-2', i % 2 === 0 ? 'wa:justify-end' : 'wa:justify-start')}>
                <div className={cn(
                  'wa:max-w-[70%] wa:rounded-lg wa:px-3 wa:py-2',
                  i % 2 === 0 ? 'wa:bg-[#d9fdd3]' : 'wa:bg-white'
                )}>
                  <Skeleton className="wa:h-4 wa:mb-2 wa:bg-black/5" style={{ width: `${Math.random() * 150 + 150}px` }} />
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
          {profilePicUrl && <AvatarImage src={profilePicUrl} alt={contactName || phoneNumber} />}
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
      <ScrollArea ref={messagesContainerRef} style={{ flex: 1, height: 0, overflow: 'auto' }} className="wa-chat-bg">
        <div style={{ padding: '12px 5%' }}>
          <div>
          {messages.length === 0 ? (
            <div className="wa:flex wa:justify-center wa:mt-8">
              <span className="wa:bg-[#fdf4c5] wa:text-[#54656f] wa:text-[12.5px] wa:px-3 wa:py-1.5 wa:rounded-[7.5px] wa:shadow-[0_1px_0.5px_rgba(11,20,26,0.13)] wa:text-center wa:max-w-[330px]">
                Messages are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them.
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
                        {formatDateDivider(message.createdAt)}
                      </span>
                    </div>
                  )}

                  <div
                    style={showTail ? { marginBottom: 6, marginTop: 6 } : { marginBottom: 6 }}
                    className={cn(
                      'wa:flex wa:group',
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
                          onDeleted={fetchMessages}
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
                          This message was deleted
                        </p>
                      ) : (
                        <>
                          {/* Media content */}
                          {message.hasMedia && message.mediaData?.url ? (
                            <div style={{ margin: '-7px -12px 4px' }} className="wa:overflow-hidden wa:rounded-t-[7.5px]">
                              {message.messageType === 'sticker' ? (
                                <img
                                  src={message.mediaData.url}
                                  alt="Sticker"
                                  style={{ margin: '7px 12px 0' }}
                                  className="wa:max-w-[150px] wa:max-h-[150px] wa:h-auto"
                                />
                              ) : message.mediaData.contentType?.startsWith('image/') || message.messageType === 'image' ? (
                                <img
                                  src={message.mediaData.url}
                                  alt="Image"
                                  className="wa:w-full wa:h-auto wa:max-h-[330px] wa:object-cover"
                                />
                              ) : message.mediaData.contentType?.startsWith('video/') || message.messageType === 'video' ? (
                                <video
                                  src={message.mediaData.url}
                                  controls
                                  className="wa:w-full wa:h-auto wa:max-h-[330px]"
                                />
                              ) : message.mediaData.contentType?.startsWith('audio/') || message.messageType === 'audio' ? (
                                <div style={{ padding: '7px 12px 0' }}>
                                  <AudioPlayer src={message.mediaData.url} isOutbound={isOutbound} />
                                </div>
                              ) : (
                                <div style={{ padding: '7px 12px 0' }}>
                                  <a
                                    href={message.mediaData.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="wa:flex wa:items-center wa:gap-2 wa:text-[14.2px] wa:underline wa:cursor-pointer hover:wa:opacity-80 wa:text-[#027eb5]"
                                  >
                                    <Paperclip className="wa:h-4 wa:w-4 wa:flex-shrink-0" />
                                    {message.mediaData.filename || message.filename || 'Download file'}
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
                            Not delivered
                          </span>
                        </div>
                      )}

                      {/* Reaction */}
                      {message.reactionEmoji && (
                        <div className="wa:absolute -wa:bottom-2.5 wa:right-1 wa:bg-white wa:rounded-full wa:px-1 wa:py-0.5 wa:text-[14px] wa:shadow-[0_1px_3px_rgba(11,20,26,0.16)] wa:leading-none wa:select-none">
                          {message.reactionEmoji}
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

      {/* ── Input area ── */}
      {readOnly ? (
        <div className="wa:bg-[#f0f2f5] wa:border-l wa:border-[#e9edef] wa:flex-shrink-0 wa:px-4 wa:py-3 wa:text-center wa:text-[13px] wa:text-[#667781]">
          This device is in read-only mode
        </div>
      ) : (
      <div className="wa:bg-[#f0f2f5] wa:border-l wa:border-[#e9edef] wa:flex-shrink-0">
        {canSendRegularMessage ? (
          <>
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
                title="Upload file"
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
                title="Send interactive message"
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
                  placeholder="Type a message"
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
                    {getDisabledInputMessage(messages)}
                  </p>
                  <Button
                    onClick={() => setShowTemplateDialog(true)}
                    className="wa:bg-[#00a884] hover:wa:bg-[#008f6f] wa:text-white wa:h-9 wa:rounded-[8px]"
                    size="sm"
                  >
                    <MessageSquare className="wa:h-4 wa:w-4 wa:mr-2" />
                    Send template
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
        onMessageSent={fetchMessages}
        instance={instance}
      />

      <ForwardMessageDialog
        open={!!forwardMessage}
        onOpenChange={(open) => { if (!open) setForwardMessage(null); }}
        message={forwardMessage}
        instance={instance}
        onForwarded={fetchMessages}
      />
    </div>
  );
}
