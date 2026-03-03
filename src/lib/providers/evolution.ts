import type {
  WhatsAppProvider,
  Chat,
  Message,
  SendTextParams,
  SendMediaParams,
  SendButtonsParams,
  SendResult,
} from './types';

// -- API response types (matched to actual Evolution API v2 responses) --

type EvolutionChatLastMessage = {
  key: {
    id: string;
    fromMe: boolean;
    remoteJid: string;
    remoteJidAlt?: string;
  };
  pushName?: string;
  messageType?: string;
  message?: Record<string, unknown>;
  messageTimestamp?: number;
};

type EvolutionChat = {
  id: string;
  remoteJid?: string;
  name?: string;
  pushName?: string;
  profilePicUrl?: string;
  unreadCount?: number;
  updatedAt?: string;
  lastMessage?: EvolutionChatLastMessage;
};

type EvolutionContact = {
  remoteJid: string;
  pushName?: string | null;
  profilePicUrl?: string | null;
};

type EvolutionMessageKey = {
  remoteJid: string;
  fromMe: boolean;
  id: string;
  participant?: string;
};

type MessageUpdateEntry = {
  status: string; // "SERVER_ACK", "DELIVERY_ACK", "READ", "PLAYED", "ERROR"
};

type EvolutionMessage = {
  id?: string;
  key: EvolutionMessageKey;
  pushName?: string;
  messageType?: string;
  messageTimestamp?: number;
  status?: number;
  source?: string;
  MessageUpdate?: MessageUpdateEntry[];
  message?: {
    conversation?: string;
    extendedTextMessage?: { text?: string };
    imageMessage?: {
      url?: string;
      mimetype?: string;
      caption?: string;
      fileName?: string;
      fileLength?: string | number;
      mediaKey?: string;
      directPath?: string;
    };
    videoMessage?: {
      url?: string;
      mimetype?: string;
      caption?: string;
      fileName?: string;
      fileLength?: string | number;
      seconds?: number;
    };
    audioMessage?: {
      url?: string;
      mimetype?: string;
      fileName?: string;
      fileLength?: string | number;
      seconds?: number;
      ptt?: boolean;
    };
    documentMessage?: {
      url?: string;
      mimetype?: string;
      title?: string;
      fileName?: string;
      fileLength?: string | number;
      caption?: string;
    };
    stickerMessage?: {
      url?: string;
      mimetype?: string;
      fileLength?: string | number;
    };
    reactionMessage?: {
      key?: { id?: string };
      text?: string;
    };
    buttonsResponseMessage?: {
      selectedButtonId?: string;
      selectedDisplayText?: string;
    };
    listResponseMessage?: {
      title?: string;
      singleSelectReply?: { selectedRowId?: string };
    };
    contactMessage?: { displayName?: string; vcard?: string };
    locationMessage?: { degreesLatitude?: number; degreesLongitude?: number; name?: string };
    protocolMessage?: {
      key?: { remoteJid?: string; fromMe?: boolean; id?: string };
      type?: string; // "REVOKE" for deleted messages
    };
  };
};

// -- Helpers --

function stripJid(jid: string): string {
  return jid.replace(/@s\.whatsapp\.net$/, '').replace(/@g\.us$/, '').replace(/@lid$/, '');
}

function epochToIso(epoch?: number): string {
  if (!epoch) return new Date().toISOString();
  const ts = epoch > 1e12 ? epoch : epoch * 1000;
  return new Date(ts).toISOString();
}

function resolveStatusFromUpdates(updates?: MessageUpdateEntry[]): string | undefined {
  if (!updates || updates.length === 0) return undefined;
  // Take the highest-priority status from the updates array
  const statusPriority: Record<string, number> = {
    ERROR: 0,
    PENDING: 1,
    SERVER_ACK: 2,
    DELIVERY_ACK: 3,
    READ: 4,
    PLAYED: 5,
  };
  const statusMap: Record<string, string> = {
    ERROR: 'failed',
    PENDING: 'sent',
    SERVER_ACK: 'sent',
    DELIVERY_ACK: 'delivered',
    READ: 'read',
    PLAYED: 'read',
  };

  let best = '';
  let bestPriority = -1;
  for (const entry of updates) {
    const p = statusPriority[entry.status] ?? -1;
    if (p > bestPriority) {
      bestPriority = p;
      best = entry.status;
    }
  }
  return statusMap[best];
}

function extractLastMessageContent(lastMsg?: EvolutionChatLastMessage): {
  content: string;
  direction: 'inbound' | 'outbound';
  type?: string;
} | undefined {
  if (!lastMsg) return undefined;

  const direction = lastMsg.key.fromMe ? 'outbound' as const : 'inbound' as const;
  const msg = lastMsg.message;

  if (!msg) return { content: '', direction, type: lastMsg.messageType };

  // Extract text from various message shapes
  const text =
    (typeof msg.conversation === 'string' ? msg.conversation : undefined) ||
    (msg.extendedTextMessage && typeof (msg.extendedTextMessage as { text?: string }).text === 'string'
      ? (msg.extendedTextMessage as { text: string }).text
      : undefined) ||
    (msg.imageMessage && typeof (msg.imageMessage as { caption?: string }).caption === 'string'
      ? (msg.imageMessage as { caption: string }).caption
      : undefined) ||
    '';

  return {
    content: text || `[${lastMsg.messageType || 'message'}]`,
    direction,
    type: lastMsg.messageType,
  };
}

function extractContent(msg: EvolutionMessage): {
  content: string;
  messageType: string;
  hasMedia: boolean;
  caption: string | null;
  filename: string | null;
  mimeType: string | null;
  mediaUrl: string | null;
  mediaSize: number | null;
  reactionEmoji: string | null;
  reactedToMessageId: string | null;
  revokedMessageId?: string | null;
} {
  const m = msg.message;
  const fallbackType = msg.messageType || 'unknown';

  if (!m) {
    return {
      content: '',
      messageType: fallbackType,
      hasMedia: false,
      caption: null,
      filename: null,
      mimeType: null,
      mediaUrl: null,
      mediaSize: null,
      reactionEmoji: null,
      reactedToMessageId: null,
    };
  }

  // Text messages (messageType: "conversation" or "extendedTextMessage")
  if (m.conversation) {
    return {
      content: m.conversation,
      messageType: 'text',
      hasMedia: false,
      caption: null,
      filename: null,
      mimeType: null,
      mediaUrl: null,
      mediaSize: null,
      reactionEmoji: null,
      reactedToMessageId: null,
    };
  }

  if (m.extendedTextMessage?.text) {
    return {
      content: m.extendedTextMessage.text,
      messageType: 'text',
      hasMedia: false,
      caption: null,
      filename: null,
      mimeType: null,
      mediaUrl: null,
      mediaSize: null,
      reactionEmoji: null,
      reactedToMessageId: null,
    };
  }

  // Protocol message (deleted / revoked)
  if (m.protocolMessage?.type === 'REVOKE') {
    return {
      content: '',
      messageType: 'revoked',
      hasMedia: false,
      caption: null,
      filename: null,
      mimeType: null,
      mediaUrl: null,
      mediaSize: null,
      reactionEmoji: null,
      reactedToMessageId: null,
      revokedMessageId: m.protocolMessage.key?.id || null,
    };
  }

  // Reaction
  if (m.reactionMessage) {
    return {
      content: m.reactionMessage.text || '',
      messageType: 'reaction',
      hasMedia: false,
      caption: null,
      filename: null,
      mimeType: null,
      mediaUrl: null,
      mediaSize: null,
      reactionEmoji: m.reactionMessage.text || null,
      reactedToMessageId: m.reactionMessage.key?.id || null,
    };
  }

  // Image
  if (m.imageMessage) {
    return {
      content: m.imageMessage.caption || '',
      messageType: 'image',
      hasMedia: true,
      caption: m.imageMessage.caption || null,
      filename: m.imageMessage.fileName || null,
      mimeType: m.imageMessage.mimetype || 'image/jpeg',
      mediaUrl: m.imageMessage.url || null,
      mediaSize: m.imageMessage.fileLength ? Number(m.imageMessage.fileLength) : null,
      reactionEmoji: null,
      reactedToMessageId: null,
    };
  }

  // Video
  if (m.videoMessage) {
    return {
      content: m.videoMessage.caption || '',
      messageType: 'video',
      hasMedia: true,
      caption: m.videoMessage.caption || null,
      filename: m.videoMessage.fileName || null,
      mimeType: m.videoMessage.mimetype || 'video/mp4',
      mediaUrl: m.videoMessage.url || null,
      mediaSize: m.videoMessage.fileLength ? Number(m.videoMessage.fileLength) : null,
      reactionEmoji: null,
      reactedToMessageId: null,
    };
  }

  // Audio
  if (m.audioMessage) {
    return {
      content: '',
      messageType: 'audio',
      hasMedia: true,
      caption: null,
      filename: m.audioMessage.fileName || null,
      mimeType: m.audioMessage.mimetype || 'audio/ogg',
      mediaUrl: m.audioMessage.url || null,
      mediaSize: m.audioMessage.fileLength ? Number(m.audioMessage.fileLength) : null,
      reactionEmoji: null,
      reactedToMessageId: null,
    };
  }

  // Document
  if (m.documentMessage) {
    return {
      content: m.documentMessage.caption || '',
      messageType: 'document',
      hasMedia: true,
      caption: m.documentMessage.caption || null,
      filename: m.documentMessage.fileName || m.documentMessage.title || null,
      mimeType: m.documentMessage.mimetype || 'application/octet-stream',
      mediaUrl: m.documentMessage.url || null,
      mediaSize: m.documentMessage.fileLength ? Number(m.documentMessage.fileLength) : null,
      reactionEmoji: null,
      reactedToMessageId: null,
    };
  }

  // Sticker
  if (m.stickerMessage) {
    return {
      content: '',
      messageType: 'sticker',
      hasMedia: true,
      caption: null,
      filename: null,
      mimeType: m.stickerMessage.mimetype || 'image/webp',
      mediaUrl: m.stickerMessage.url || null,
      mediaSize: m.stickerMessage.fileLength ? Number(m.stickerMessage.fileLength) : null,
      reactionEmoji: null,
      reactedToMessageId: null,
    };
  }

  // Contact
  if (m.contactMessage) {
    return {
      content: m.contactMessage.displayName || '[Contact]',
      messageType: 'contact',
      hasMedia: false,
      caption: null,
      filename: null,
      mimeType: null,
      mediaUrl: null,
      mediaSize: null,
      reactionEmoji: null,
      reactedToMessageId: null,
    };
  }

  // Location
  if (m.locationMessage) {
    return {
      content: m.locationMessage.name || `[Location: ${m.locationMessage.degreesLatitude}, ${m.locationMessage.degreesLongitude}]`,
      messageType: 'location',
      hasMedia: false,
      caption: null,
      filename: null,
      mimeType: null,
      mediaUrl: null,
      mediaSize: null,
      reactionEmoji: null,
      reactedToMessageId: null,
    };
  }

  // Buttons response
  if (m.buttonsResponseMessage) {
    return {
      content: m.buttonsResponseMessage.selectedDisplayText || '[Button response]',
      messageType: 'buttons_response',
      hasMedia: false,
      caption: null,
      filename: null,
      mimeType: null,
      mediaUrl: null,
      mediaSize: null,
      reactionEmoji: null,
      reactedToMessageId: null,
    };
  }

  // Fallback
  return {
    content: '',
    messageType: fallbackType,
    hasMedia: false,
    caption: null,
    filename: null,
    mimeType: null,
    mediaUrl: null,
    mediaSize: null,
    reactionEmoji: null,
    reactedToMessageId: null,
  };
}

// -- Provider implementation --

export class EvolutionProvider implements WhatsAppProvider {
  readonly type = 'evolution' as const;
  readonly supportsTemplates = false;
  readonly has24HourWindow = false;

  // Cache: @s.whatsapp.net JID -> @lid JID (built during findChats)
  private phoneLidMap = new Map<string, string>();

  constructor(
    private readonly baseUrl: string,
    private readonly apiKey: string
  ) {}

  private async request<T>(path: string, options?: RequestInit): Promise<T> {
    const url = `${this.baseUrl}${path}`;
    const res = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        apikey: this.apiKey,
        ...options?.headers,
      },
    });

    if (!res.ok) {
      const body = await res.text().catch(() => '');
      throw new Error(`Evolution API ${res.status}: ${body}`);
    }

    return res.json() as Promise<T>;
  }

  async getConnectionState(instanceName: string): Promise<'open' | 'close' | 'connecting'> {
    const data = await this.request<{ instance: { state: string } }>(
      `/instance/connectionState/${encodeURIComponent(instanceName)}`
    );
    const state = data.instance?.state;
    if (state === 'open') return 'open';
    if (state === 'connecting') return 'connecting';
    return 'close';
  }

  async findChats(instanceName: string): Promise<Chat[]> {
    const [data, contacts] = await Promise.all([
      this.request<EvolutionChat[]>(
        `/chat/findChats/${encodeURIComponent(instanceName)}`,
        { method: 'POST', body: JSON.stringify({}) }
      ),
      this.request<EvolutionContact[]>(
        `/chat/findContacts/${encodeURIComponent(instanceName)}`,
        { method: 'POST', body: JSON.stringify({}) }
      ).catch(() => [] as EvolutionContact[]),
    ]);

    // Build contact name lookup from the contacts endpoint (has pushName for most contacts)
    const contactNameByJid = new Map<string, string>();
    for (const contact of contacts) {
      if (contact.pushName) {
        contactNameByJid.set(contact.remoteJid, contact.pushName);
      }
    }

    // Build a map: phone number (from @s.whatsapp.net) -> merged chat data
    // WhatsApp's LID migration means the same contact may have separate entries
    // under @s.whatsapp.net (phone-based) and @lid (anonymous logical ID).
    // We merge them into a single chat keyed by the @s.whatsapp.net JID.

    // First pass: build a map from @lid JID -> @s.whatsapp.net JID using remoteJidAlt
    const lidToPhone = new Map<string, string>();
    for (const chat of data) {
      const jid = chat.remoteJid || chat.id;
      const alt = chat.lastMessage?.key?.remoteJidAlt;
      if (jid?.endsWith('@lid') && alt?.endsWith('@s.whatsapp.net')) {
        lidToPhone.set(jid, alt);
        // Cache reverse mapping for findMessages: phone -> lid
        this.phoneLidMap.set(alt, jid);
      }
    }

    // Second pass: merge chats
    const merged = new Map<string, Chat & { lidJid?: string }>();

    for (const chat of data) {
      const jid = chat.remoteJid || chat.id;
      if (!jid) continue;

      let canonicalJid: string;
      if (jid.endsWith('@g.us')) {
        // Group chats use their own JID directly (no LID merging)
        canonicalJid = jid;
      } else if (jid.endsWith('@lid')) {
        const alt = lidToPhone.get(jid);
        if (!alt) continue; // Can't resolve this @lid chat, skip
        canonicalJid = alt;
      } else if (jid.endsWith('@s.whatsapp.net')) {
        canonicalJid = jid;
      } else {
        continue;
      }

      const existing = merged.get(canonicalJid);
      const lastMsgContent = extractLastMessageContent(chat.lastMessage);
      const lastActiveAt = chat.updatedAt
        || (chat.lastMessage?.messageTimestamp
          ? epochToIso(chat.lastMessage.messageTimestamp)
          : undefined);

      // Resolve contact name: for groups use chat.name (group subject); for
      // individuals use contacts endpoint > chat.pushName > lastMessage.pushName.
      const isGroup = canonicalJid.endsWith('@g.us');
      let resolvedName: string | undefined;
      if (isGroup) {
        resolvedName = chat.name || chat.pushName || undefined;
      } else {
        const lastMsgPushName = (chat.lastMessage?.pushName && !chat.lastMessage.key.fromMe)
          ? chat.lastMessage.pushName
          : undefined;
        resolvedName = contactNameByJid.get(jid)
          || contactNameByJid.get(canonicalJid)
          || chat.pushName
          || lastMsgPushName
          || undefined;
      }

      if (!existing) {
        merged.set(canonicalJid, {
          id: canonicalJid,
          phoneNumber: stripJid(canonicalJid),
          contactName: resolvedName,
          profilePicUrl: chat.profilePicUrl || undefined,
          lastActiveAt,
          lastMessage: lastMsgContent,
          unreadCount: chat.unreadCount,
          lidJid: jid.endsWith('@lid') ? jid : undefined,
        });
      } else {
        // Merge: keep the most recent lastActiveAt, prefer non-empty fields
        if (jid.endsWith('@lid')) {
          existing.lidJid = jid;
        }
        existing.contactName = existing.contactName || resolvedName;
        existing.profilePicUrl = existing.profilePicUrl || chat.profilePicUrl || undefined;
        existing.unreadCount = (existing.unreadCount || 0) + (chat.unreadCount || 0);

        // Use most recent lastActiveAt and its lastMessage
        if (lastActiveAt && (!existing.lastActiveAt || new Date(lastActiveAt) > new Date(existing.lastActiveAt))) {
          existing.lastActiveAt = lastActiveAt;
          existing.lastMessage = lastMsgContent || existing.lastMessage;
        }
      }
    }

    return Array.from(merged.values())
      .sort((a, b) => {
        if (!a.lastActiveAt || !b.lastActiveAt) return 0;
        return new Date(b.lastActiveAt).getTime() - new Date(a.lastActiveAt).getTime();
      });
  }

  private async ensureLidMap(instanceName: string): Promise<void> {
    if (this.phoneLidMap.size > 0) return;
    // Populate the lid mapping by fetching chats once
    const data = await this.request<EvolutionChat[]>(
      `/chat/findChats/${encodeURIComponent(instanceName)}`,
      { method: 'POST', body: JSON.stringify({}) }
    );
    for (const chat of data) {
      const jid = chat.remoteJid || chat.id;
      const alt = chat.lastMessage?.key?.remoteJidAlt;
      if (jid?.endsWith('@lid') && alt?.endsWith('@s.whatsapp.net')) {
        this.phoneLidMap.set(alt, jid);
      }
    }
  }

  async findMessages(instanceName: string, chatId: string, limit = 50): Promise<Message[]> {
    const isGroup = chatId.endsWith('@g.us');
    const primaryJid = chatId.includes('@') ? chatId : `${chatId}@s.whatsapp.net`;

    const fetchJid = (remoteJid: string) =>
      this.request<{ messages: { records: EvolutionMessage[] } }>(
        `/chat/findMessages/${encodeURIComponent(instanceName)}`,
        {
          method: 'POST',
          body: JSON.stringify({
            where: { key: { remoteJid } },
            limit,
          }),
        }
      ).then((d) => d?.messages?.records || []);

    let phoneMessages: EvolutionMessage[];
    let lidMessages: EvolutionMessage[];

    if (isGroup) {
      // Groups don't have LID duality — single fetch
      phoneMessages = await fetchJid(primaryJid);
      lidMessages = [];
    } else {
      await this.ensureLidMap(instanceName);
      const lidJid = this.phoneLidMap.get(primaryJid);
      [phoneMessages, lidMessages] = await Promise.all([
        fetchJid(primaryJid),
        lidJid ? fetchJid(lidJid) : Promise.resolve([]),
      ]);
    }

    // Deduplicate by message key ID (same message can appear in both JID queries)
    const seen = new Set<string>();
    const allMessages: EvolutionMessage[] = [];
    for (const msg of [...phoneMessages, ...lidMessages]) {
      if (!seen.has(msg.key.id)) {
        seen.add(msg.key.id);
        allMessages.push(msg);
      }
    }
    const phoneNumber = stripJid(primaryJid);

    // First pass: collect IDs of messages that were revoked (deleted for everyone)
    const revokedIds = new Set<string>();
    for (const msg of allMessages) {
      const extracted = extractContent(msg);
      if (extracted.messageType === 'revoked' && extracted.revokedMessageId) {
        revokedIds.add(extracted.revokedMessageId);
      }
    }

    return allMessages
      .filter((msg) => {
        // Filter out the protocol revoke messages themselves
        const extracted = extractContent(msg);
        return extracted.messageType !== 'revoked';
      })
      .map((msg) => {
        const extracted = extractContent(msg);
        const status = resolveStatusFromUpdates(msg.MessageUpdate);
        const isDeleted = revokedIds.has(msg.key.id);

        return {
          id: msg.key.id,
          direction: msg.key.fromMe ? 'outbound' as const : 'inbound' as const,
          content: isDeleted ? '' : extracted.content,
          createdAt: epochToIso(msg.messageTimestamp),
          status,
          phoneNumber,
          hasMedia: isDeleted ? false : extracted.hasMedia,
          messageType: isDeleted ? 'deleted' : extracted.messageType,
          reactionEmoji: extracted.reactionEmoji,
          reactedToMessageId: extracted.reactedToMessageId,
          caption: isDeleted ? null : extracted.caption,
          filename: isDeleted ? null : extracted.filename,
          mimeType: isDeleted ? null : extracted.mimeType,
          metadata: (!isDeleted && extracted.hasMedia)
            ? { mediaId: msg.key.id }
            : {},
        };
      });
  }

  async sendText(instanceName: string, params: SendTextParams): Promise<SendResult> {
    const data = await this.request<{ key: { id: string }; status?: string }>(
      `/message/sendText/${encodeURIComponent(instanceName)}`,
      {
        method: 'POST',
        body: JSON.stringify({
          number: params.to,
          text: params.body,
        }),
      }
    );

    return {
      messageId: data.key?.id || '',
      status: data.status,
    };
  }

  async sendMedia(instanceName: string, params: SendMediaParams): Promise<SendResult> {
    const data = await this.request<{ key: { id: string }; status?: string }>(
      `/message/sendMedia/${encodeURIComponent(instanceName)}`,
      {
        method: 'POST',
        body: JSON.stringify({
          number: params.to,
          mediatype: params.mediaType,
          media: params.media,
          caption: params.caption || undefined,
          fileName: params.fileName || undefined,
          mimetype: params.mimeType || undefined,
        }),
      }
    );

    return {
      messageId: data.key?.id || '',
      status: data.status,
    };
  }

  async sendButtons(instanceName: string, params: SendButtonsParams): Promise<SendResult> {
    const data = await this.request<{ key: { id: string }; status?: string }>(
      `/message/sendButtons/${encodeURIComponent(instanceName)}`,
      {
        method: 'POST',
        body: JSON.stringify({
          number: params.to,
          title: params.header || '',
          description: params.body,
          buttons: params.buttons.map((btn) => ({
            buttonId: btn.id,
            buttonText: { displayText: btn.title },
            type: 'reply',
          })),
        }),
      }
    );

    return {
      messageId: data.key?.id || '',
      status: data.status,
    };
  }

  async deleteMessage(instanceName: string, messageId: string, remoteJid: string, fromMe: boolean): Promise<void> {
    await this.request(`/chat/deleteMessageForEveryone/${encodeURIComponent(instanceName)}`, {
      method: 'DELETE',
      body: JSON.stringify({ id: messageId, remoteJid, fromMe }),
    });
  }

  async getMediaUrl(instanceName: string, messageId: string): Promise<string | null> {
    try {
      // Fetch the full message object so the Evolution API has mediaKey/directPath
      // to decrypt and download media (passing only key.id often fails for audio)
      const msgData = await this.request<{ messages: { records: EvolutionMessage[] } }>(
        `/chat/findMessages/${encodeURIComponent(instanceName)}`,
        {
          method: 'POST',
          body: JSON.stringify({
            where: { key: { id: messageId } },
            limit: 1,
          }),
        }
      );

      const fullMessage = msgData?.messages?.records?.[0];
      if (!fullMessage) return null;

      const data = await this.request<{ base64?: string; mimetype?: string }>(
        `/chat/getBase64FromMediaMessage/${encodeURIComponent(instanceName)}`,
        {
          method: 'POST',
          body: JSON.stringify({
            message: {
              key: fullMessage.key,
              message: fullMessage.message,
            },
            convertToMp4: false,
          }),
        }
      );

      if (data.base64 && data.mimetype) {
        return `data:${data.mimetype};base64,${data.base64}`;
      }
      return null;
    } catch {
      return null;
    }
  }
}
