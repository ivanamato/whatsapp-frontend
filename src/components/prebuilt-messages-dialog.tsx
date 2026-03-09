import { useState, useEffect, useRef } from 'react';
import { X, Search, Send } from 'lucide-react';
import type { PrebuiltMessage } from '@/lib/providers/types';

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  messages: PrebuiltMessage[];
  onSelect: (message: PrebuiltMessage) => void;
};

function dataUrl(msg: PrebuiltMessage): string {
  const mime = msg.mimeType ?? (
    msg.type === 'audio' ? 'audio/ogg' :
    msg.type === 'image' ? 'image/jpeg' :
    msg.type === 'video' ? 'video/mp4' : ''
  );
  return `data:${mime};base64,${msg.content}`;
}

const ROW_STYLE: React.CSSProperties = {
  width: '100%',
  textAlign: 'left',
  padding: '12px 16px',
  background: 'none',
  border: 'none',
  borderBottom: '1px solid #f0f2f5',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: 12,
};

export function PrebuiltMessagesDialog({ open, onOpenChange, messages, onSelect }: Props) {
  const [search, setSearch] = useState('');
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setSearch('');
      requestAnimationFrame(() => searchRef.current?.focus());
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onOpenChange(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, onOpenChange]);

  if (!open) return null;

  const filtered = search.trim()
    ? messages.filter(
        m =>
          m.label.toLowerCase().includes(search.toLowerCase()) ||
          (!m.type || m.type === 'text') && m.content.toLowerCase().includes(search.toLowerCase()),
      )
    : messages;

  const handleSelect = (msg: PrebuiltMessage) => {
    onSelect(msg);
    onOpenChange(false);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        style={{ position: 'fixed', inset: 0, zIndex: 50, background: 'rgba(0,0,0,0.5)' }}
        onClick={() => onOpenChange(false)}
      />

      {/* Panel */}
      <div
        data-testid="prebuilt-messages-dialog"
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 51,
          background: 'white',
          borderRadius: 8,
          width: 'calc(100% - 2rem)',
          maxWidth: 448,
          maxHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
          overflow: 'hidden',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 16px 8px', flexShrink: 0 }}>
          <span style={{ fontSize: 16, fontWeight: 600, color: '#111b21' }}>Pre-built messages</span>
          <button
            onClick={() => onOpenChange(false)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#667781', padding: 4, display: 'flex', alignItems: 'center', borderRadius: 4 }}
          >
            <X style={{ width: 20, height: 20 }} />
          </button>
        </div>

        {/* Search */}
        <div style={{ padding: '0 16px 8px', flexShrink: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#f0f2f5', borderRadius: 8, padding: '8px 12px' }}>
            <Search style={{ width: 16, height: 16, color: '#8696a0', flexShrink: 0 }} />
            <input
              ref={searchRef}
              data-testid="prebuilt-messages-search"
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search messages…"
              style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', fontSize: 14, color: '#111b21' }}
            />
          </div>
        </div>

        {/* List */}
        <div style={{ overflowY: 'auto', flex: 1 }}>
          {filtered.length === 0 ? (
            <p style={{ textAlign: 'center', color: '#8696a0', fontSize: 13, padding: '24px 16px', margin: 0 }}>
              No messages found
            </p>
          ) : (
            filtered.map(msg => {
              const type = msg.type ?? 'text';

              // ── Audio: non-button row with inline player + explicit Send button
              if (type === 'audio') {
                return (
                  <div
                    key={msg.id}
                    data-testid="prebuilt-message-item"
                    data-message-id={msg.id}
                    data-message-type="audio"
                    style={{ padding: '12px 16px', borderBottom: '1px solid #f0f2f5' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
                      <div style={{ minWidth: 0 }}>
                        <p style={{ fontSize: 14, fontWeight: 500, color: '#111b21', margin: 0, lineHeight: 1.4 }}>
                          {msg.label}
                        </p>
                        <p style={{ fontSize: 13, color: '#667781', margin: 0, lineHeight: 1.4 }}>
                          Voice message
                        </p>
                      </div>
                      <button
                        data-testid="prebuilt-audio-send"
                        onClick={() => handleSelect(msg)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 4,
                          background: '#00a884',
                          color: 'white',
                          border: 'none',
                          borderRadius: 20,
                          padding: '6px 14px',
                          fontSize: 13,
                          fontWeight: 500,
                          cursor: 'pointer',
                          flexShrink: 0,
                          marginLeft: 12,
                        }}
                      >
                        <Send style={{ width: 14, height: 14 }} />
                        Send
                      </button>
                    </div>
                    {/* Audio player — stop propagation so controls don't bubble */}
                    <div onClick={e => e.stopPropagation()}>
                      <audio
                        data-testid="prebuilt-audio-player"
                        src={dataUrl(msg)}
                        controls
                        preload="metadata"
                        style={{ width: '100%', height: 32 }}
                      />
                    </div>
                  </div>
                );
              }

              // ── Image: thumbnail replaces icon
              if (type === 'image') {
                return (
                  <button
                    key={msg.id}
                    data-testid="prebuilt-message-item"
                    data-message-id={msg.id}
                    data-message-type="image"
                    onClick={() => handleSelect(msg)}
                    style={ROW_STYLE}
                    onMouseOver={e => { (e.currentTarget as HTMLButtonElement).style.background = '#f5f5f5'; }}
                    onMouseOut={e => { (e.currentTarget as HTMLButtonElement).style.background = 'none'; }}
                  >
                    <img
                      data-testid="prebuilt-image-preview"
                      src={dataUrl(msg)}
                      alt={msg.label}
                      style={{ width: 52, height: 52, objectFit: 'cover', borderRadius: 6, flexShrink: 0 }}
                    />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{ fontSize: 14, fontWeight: 500, color: '#111b21', margin: 0, lineHeight: 1.4 }}>
                        {msg.label}
                      </p>
                      <p style={{ fontSize: 13, color: '#667781', margin: '2px 0 0', lineHeight: 1.4 }}>
                        Image
                      </p>
                    </div>
                  </button>
                );
              }

              // ── Video: thumbnail replaces icon
              if (type === 'video') {
                return (
                  <button
                    key={msg.id}
                    data-testid="prebuilt-message-item"
                    data-message-id={msg.id}
                    data-message-type="video"
                    onClick={() => handleSelect(msg)}
                    style={ROW_STYLE}
                    onMouseOver={e => { (e.currentTarget as HTMLButtonElement).style.background = '#f5f5f5'; }}
                    onMouseOut={e => { (e.currentTarget as HTMLButtonElement).style.background = 'none'; }}
                  >
                    <video
                      data-testid="prebuilt-video-preview"
                      src={dataUrl(msg)}
                      muted
                      preload="metadata"
                      style={{ width: 72, height: 52, objectFit: 'cover', borderRadius: 6, flexShrink: 0, display: 'block' }}
                    />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{ fontSize: 14, fontWeight: 500, color: '#111b21', margin: 0, lineHeight: 1.4 }}>
                        {msg.label}
                      </p>
                      <p style={{ fontSize: 13, color: '#667781', margin: '2px 0 0', lineHeight: 1.4 }}>
                        Video
                      </p>
                    </div>
                  </button>
                );
              }

              // ── Text: content preview
              return (
                <button
                  key={msg.id}
                  data-testid="prebuilt-message-item"
                  data-message-id={msg.id}
                  data-message-type="text"
                  onClick={() => handleSelect(msg)}
                  style={ROW_STYLE}
                  onMouseOver={e => { (e.currentTarget as HTMLButtonElement).style.background = '#f5f5f5'; }}
                  onMouseOut={e => { (e.currentTarget as HTMLButtonElement).style.background = 'none'; }}
                >
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontSize: 14, fontWeight: 500, color: '#111b21', margin: 0, lineHeight: 1.4 }}>
                      {msg.label}
                    </p>
                    <p style={{ fontSize: 13, color: '#667781', margin: '2px 0 0', lineHeight: 1.4, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' as const }}>
                      {msg.content}
                    </p>
                  </div>
                </button>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}
