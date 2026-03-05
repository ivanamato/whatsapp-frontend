import { useEffect, useState, useMemo, useRef, forwardRef, useImperativeHandle, useCallback } from 'react';
import { format, isValid, isToday, isYesterday } from 'date-fns';
import { useVirtualizer } from '@tanstack/react-virtual';
import { RefreshCw, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAutoPolling } from '@/hooks/use-auto-polling';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useProvider, useDeviceContext } from '@/lib/provider-context';
import { useTranslations } from '@/lib/i18n';
import { sanitizeUrl } from '@/lib/url-utils';
import { getAvatarInitials } from '@/lib/avatar-utils';
import { ChatActionsTrigger, ChatActionsDialog, type Conversation as ChatActionsConversation } from '@/components/chat-actions-menu';
import type { ChatActionsResolver, DeviceConfig } from '@/lib/providers/types';

type Conversation = {
  id: string;
  phoneNumber: string;
  status: string;
  lastActiveAt: string;
  contactName?: string;
  profilePicUrl?: string;
  lastMessage?: {
    content: string;
    direction: string;
    type?: string;
  };
  unreadCount?: number;
  deviceId?: string;
  deviceLabel?: string;
};

function formatConversationDate(timestamp: string, yesterdayLabel: string): string {
  try {
    const date = new Date(timestamp);
    if (!isValid(date)) return '';

    if (isToday(date)) return format(date, 'HH:mm');
    if (isYesterday(date)) return yesterdayLabel;
    return format(date, 'MMM d');
  } catch {
    return '';
  }
}

type Props = {
  onSelectConversation: (conversation: Conversation) => void;
  selectedConversationId?: string;
  isHidden?: boolean;
  instance?: string;
  provider?: string;
  chatActions?: ChatActionsResolver;
};

export type ConversationListRef = {
  refresh: () => Promise<Conversation[]>;
  selectByPhoneNumber: (phoneNumber: string) => void;
};

export const ConversationList = forwardRef<ConversationListRef, Props>(
  ({ onSelectConversation, selectedConversationId, isHidden = false, instance, chatActions }, ref) => {
  const provider = useProvider();
  const { viewMode, devices, getProviderForDevice, selectedDevice } = useDeviceContext();
  const t = useTranslations();
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);
  const [dialogTarget, setDialogTarget] = useState<{ conversation: Conversation; device: DeviceConfig } | null>(null);
  const scrollParentRef = useRef<HTMLDivElement>(null);

  const doFetch = useCallback(async (): Promise<Conversation[]> => {
    if (viewMode === 'all') {
      // Concurrent pool to avoid saturating the browser connection limit
      const MAX_CONCURRENT = 3;
      const results: PromiseSettledResult<Conversation[]>[] = [];
      const pending: Promise<void>[] = [];

      for (const device of devices) {
        const task = (async () => {
          try {
            const deviceProvider = getProviderForDevice(device);
            const chats = await deviceProvider.findChats(device.instanceName);
            results.push({
              status: 'fulfilled',
              value: chats.map((chat) => ({
                id: chat.id,
                phoneNumber: chat.phoneNumber,
                status: 'active',
                lastActiveAt: chat.lastActiveAt || '',
                contactName: chat.contactName,
                profilePicUrl: chat.profilePicUrl,
                lastMessage: chat.lastMessage,
                unreadCount: chat.unreadCount,
                deviceId: device.id,
                deviceLabel: device.label || device.instanceName,
              })),
            });
          } catch (reason) {
            results.push({ status: 'rejected', reason });
          }
        })();

        pending.push(task);

        if (pending.length >= MAX_CONCURRENT) {
          await Promise.race(pending);
          // Remove settled promises
          for (let i = pending.length - 1; i >= 0; i--) {
            const settled = await Promise.race([pending[i].then(() => true), Promise.resolve(false)]);
            if (settled) pending.splice(i, 1);
          }
        }
      }

      await Promise.all(pending);

      const merged: Conversation[] = [];
      for (const result of results) {
        if (result.status === 'fulfilled') {
          merged.push(...result.value);
        }
      }
      merged.sort((a, b) => {
        if (!a.lastActiveAt) return 1;
        if (!b.lastActiveAt) return -1;
        return new Date(b.lastActiveAt).getTime() - new Date(a.lastActiveAt).getTime();
      });
      return merged;
    }

    // Single mode
    if (!instance) return [];
    const chats = await provider.findChats(instance);
    return chats.map((chat) => ({
      id: chat.id,
      phoneNumber: chat.phoneNumber,
      status: 'active',
      lastActiveAt: chat.lastActiveAt || '',
      contactName: chat.contactName,
      profilePicUrl: chat.profilePicUrl,
      lastMessage: chat.lastMessage,
      unreadCount: chat.unreadCount,
    }));
  }, [viewMode, devices, getProviderForDevice, instance, provider]);

  const fetchConversations = useCallback(async () => {
    if (viewMode === 'single' && !instance) {
      setConversations([]);
      setLoading(false);
      return;
    }

    try {
      const mapped = await doFetch();
      setConversations(mapped);
    } catch (error) {
      if (process.env.NODE_ENV !== 'production') {
        console.error('Error fetching conversations:', error instanceof Error ? error.message : String(error));
      }
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [viewMode, instance, doFetch]);

  useEffect(() => {
    setLoading(true);
    fetchConversations();
  }, [fetchConversations]);

  const handleRefresh = () => {
    setRefreshing(true);
    fetchConversations();
  };

  const { isPolling } = useAutoPolling({
    interval: 10000,
    enabled: viewMode === 'all' || !!instance,
    onPoll: fetchConversations
  });

  const selectByPhoneNumber = (phoneNumber: string) => {
    const conversation = conversations.find(conv => conv.phoneNumber === phoneNumber);
    if (conversation) {
      onSelectConversation(conversation);
    }
  };

  useImperativeHandle(ref, () => ({
    refresh: async () => {
      if (viewMode === 'single' && !instance) return [];
      setRefreshing(true);
      try {
        const mapped = await doFetch();
        setConversations(mapped);
        setRefreshing(false);
        return mapped;
      } catch {
        setRefreshing(false);
        return [];
      }
    },
    selectByPhoneNumber
  }));

  const filteredConversations = useMemo(() => {
    if (!searchQuery) return conversations;
    const query = searchQuery.toLowerCase();
    return conversations.filter((conv) =>
      conv.phoneNumber.toLowerCase().includes(query) ||
      conv.contactName?.toLowerCase().includes(query) ||
      conv.deviceLabel?.toLowerCase().includes(query)
    );
  }, [conversations, searchQuery]);

  const rowVirtualizer = useVirtualizer({
    count: filteredConversations.length,
    getScrollElement: () => scrollParentRef.current,
    estimateSize: () => 72,
    overscan: 8,
  });

  // Loading skeleton
  if (loading) {
    return (
      <div className={cn(
        "wa-sidebar wa:w-full wa:border-r wa:border-[#e9edef] wa:bg-white wa:flex wa:flex-col",
        isHidden && "wa-sidebar--hidden"
      )}>
        <div className="wa:px-3 wa:pt-2.5 wa:pb-1.5">
          <div className="wa:flex wa:items-center wa:justify-between wa:mb-2.5">
            <Skeleton className="wa:h-6 wa:w-16" />
            <Skeleton className="wa:h-8 wa:w-8 wa:rounded-full" />
          </div>
          <Skeleton className="wa:h-[35px] wa:w-full wa:rounded-lg" />
        </div>
        <div className="wa:flex-1 wa:space-y-0">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="wa:flex wa:gap-3 wa:px-3 wa:py-3">
              <Skeleton className="wa:h-[49px] wa:w-[49px] wa:rounded-full wa:flex-shrink-0" />
              <div className="wa:flex-1 wa:space-y-2 wa:pt-1">
                <Skeleton className="wa:h-4 wa:w-32" />
                <Skeleton className="wa:h-3 wa:w-48" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // No instance selected (only in single mode)
  if (viewMode === 'single' && !instance) {
    return (
      <div className={cn(
        "wa-sidebar wa:w-full wa:border-r wa:border-[#e9edef] wa:bg-white wa:flex wa:flex-col wa:items-center wa:justify-center",
        isHidden && "wa-sidebar--hidden"
      )}>
        <p className="wa:text-[#667781] wa:text-[14px]">{t('conversationList.selectInstance')}</p>
      </div>
    );
  }

  return (
    <div className={cn(
      "wa-sidebar wa:w-full wa:border-r wa:border-[#e9edef] wa:bg-white wa:flex wa:flex-col",
      isHidden && "wa-sidebar--hidden"
    )}>
      {/* Header with title + search */}
      <div className="wa:flex-shrink-0">
        <div style={{ padding: '12px 16px 4px' }} className="wa:flex wa:items-center wa:justify-between">
          <div className="wa:flex wa:items-center wa:gap-2">
            <h1 className="wa:text-[22px] wa:font-bold wa:text-[#111b21] wa:leading-none">{t('conversationList.chats')}</h1>
            {isPolling && (
              <div
                className="wa:h-2 wa:w-2 wa:rounded-full wa:bg-green-500 wa:animate-pulse"
                title={t('conversationList.autoUpdating')}
              />
            )}
          </div>
          <Button
            onClick={handleRefresh}
            disabled={refreshing}
            variant="ghost"
            size="icon"
            className="wa:text-[#54656f] hover:wa:bg-transparent wa:h-10 wa:w-10"
          >
            <RefreshCw className={cn("wa:h-[18px] wa:w-[18px]", refreshing && "wa:animate-spin")} />
          </Button>
        </div>

        {/* WhatsApp-style search bar */}
        <div style={{ padding: '0 16px 8px' }}>
          <div style={{ padding: '0 16px' }} className={cn(
            "wa:flex wa:items-center wa:gap-3 wa:rounded-lg wa:h-[35px] wa:transition-colors",
            searchFocused ? "wa:bg-white wa:ring-2 wa:ring-[#00a884]" : "wa:bg-[#f0f2f5]"
          )}>
            <div className="wa:flex-shrink-0">
              <Search className={cn(
                "wa:h-[15px] wa:w-[15px] wa:transition-colors",
                searchFocused ? "wa:text-[#00a884]" : "wa:text-[#54656f]"
              )} />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              placeholder={t('conversationList.searchPlaceholder')}
              className="wa:flex-1 wa:bg-transparent wa:border-none wa:outline-none wa:text-[13px] wa:text-[#111b21] wa:placeholder-[#667781] wa:h-full"
            />
          </div>
        </div>
      </div>

      {/* Virtualized conversation list */}
      <div ref={scrollParentRef} className="wa:flex-1 wa:overflow-auto" style={{ contain: 'strict' }}>
        {filteredConversations.length === 0 ? (
          <div className="wa:py-8 wa:text-center wa:text-[#667781] wa:text-[14px]">
            {searchQuery ? t('conversationList.noConversationsFound') : t('conversationList.noConversationsYet')}
          </div>
        ) : (
          <div style={{ height: `${rowVirtualizer.getTotalSize()}px`, width: '100%', position: 'relative' }}>
            {rowVirtualizer.getVirtualItems().map((virtualRow) => {
              const conversation = filteredConversations[virtualRow.index];
              const compositeKey = conversation.deviceId
                ? `${conversation.deviceId}::${conversation.id}`
                : conversation.id;
              const isSelected = viewMode === 'all'
                ? selectedConversationId === compositeKey
                : selectedConversationId === conversation.id;

              return (
                <button
                  key={compositeKey}
                  data-index={virtualRow.index}
                  ref={rowVirtualizer.measureElement}
                  onClick={() => onSelectConversation(conversation)}
                  className={cn(
                    'wa-chat-row wa:w-full wa:text-left wa:transition-colors wa:relative wa:overflow-hidden wa:flex wa:items-center wa:cursor-pointer',
                    'hover:wa:bg-[#f5f6f6]',
                    isSelected && 'wa:bg-[#f0f2f5]'
                  )}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    transform: `translateY(${virtualRow.start}px)`,
                    padding: '5px 15px 5px 13px',
                  }}
                >
                  {isSelected && (
                    <div className="wa:absolute wa:left-0 wa:top-0 wa:bottom-0 wa:w-[3px] wa:bg-[#00a884]" />
                  )}

                  <div className="wa:flex wa:gap-3.5 wa:items-center wa:flex-1 wa:py-3.5 wa:overflow-hidden wa:min-w-0">
                    <Avatar className="wa:h-[49px] wa:w-[49px] wa:flex-shrink-0">
                      {sanitizeUrl(conversation.profilePicUrl) && (
                        <AvatarImage src={sanitizeUrl(conversation.profilePicUrl)!} alt={conversation.contactName || conversation.phoneNumber} />
                      )}
                      <AvatarFallback className="wa:bg-[#dfe5e7] wa:text-[#54656f] wa:text-sm wa:font-medium">
                        {getAvatarInitials(conversation.contactName, conversation.phoneNumber)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="wa:flex-1 wa:min-w-0 wa:overflow-hidden">
                      <div className="wa:flex wa:justify-between wa:items-baseline wa:gap-2">
                        <p className="wa:text-[17px] wa:font-normal wa:text-[#111b21] wa:truncate wa:leading-[21px]">
                          {conversation.contactName || conversation.phoneNumber}
                        </p>
                        <span className={cn(
                          "wa:text-[12px] wa:flex-shrink-0 wa:leading-[14px]",
                          conversation.unreadCount && conversation.unreadCount > 0
                            ? "wa:text-[#00a884]"
                            : "wa:text-[#667781]"
                        )}>
                          {formatConversationDate(conversation.lastActiveAt, t('conversationList.yesterday'))}
                        </span>
                      </div>
                      {viewMode === 'all' && conversation.deviceLabel && (
                        <p className="wa:text-[11px] wa:text-[#667781] wa:truncate wa:leading-[14px]">
                          {conversation.deviceLabel}
                        </p>
                      )}
                      <div className="wa:flex wa:justify-between wa:items-center wa:gap-2 wa:mt-[2px]">
                        {conversation.lastMessage ? (
                          <p className="wa:text-[14px] wa:text-[#667781] wa:truncate wa:leading-[20px]">
                            {conversation.lastMessage.direction === 'outbound' && (
                              <span className="wa:text-[#53bdeb]">✓ </span>
                            )}
                            {conversation.lastMessage.content}
                          </p>
                        ) : (
                          <span />
                        )}
                        {conversation.unreadCount != null && conversation.unreadCount > 0 && (
                          <span className="wa:flex-shrink-0 wa:bg-[#00a884] wa:text-white wa:text-[11px] wa:font-bold wa:rounded-full wa:min-w-[20px] wa:h-[20px] wa:flex wa:items-center wa:justify-center wa:px-1">
                            {conversation.unreadCount}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  {chatActions && (() => {
                    const device = conversation.deviceId
                      ? devices.find(d => d.id === conversation.deviceId)
                      : selectedDevice;
                    return device ? (
                      <ChatActionsTrigger
                        onOpen={() => setDialogTarget({ conversation, device })}
                      />
                    ) : null;
                  })()}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Chat actions dialog — rendered outside the button tree */}
      {dialogTarget && chatActions && (
        <ChatActionsDialog
          open={!!dialogTarget}
          onClose={() => setDialogTarget(null)}
          resolver={chatActions}
          conversation={dialogTarget.conversation}
          device={dialogTarget.device}
        />
      )}
    </div>
  );
});

ConversationList.displayName = 'ConversationList';
