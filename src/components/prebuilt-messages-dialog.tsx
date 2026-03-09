import { useState, useEffect, useRef } from 'react';
import { X, Search, Mic, ImageIcon, Video } from 'lucide-react';
import type { PrebuiltMessage } from '@/lib/providers/types';

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  messages: PrebuiltMessage[];
  onSelect: (message: PrebuiltMessage) => void;
};

type MediaMeta = {
  icon: typeof Mic;
  bg: string;
  color: string;
  subtext: string;
};

function getMediaMeta(type: PrebuiltMessage['type']): MediaMeta | null {
  if (type === 'audio') return { icon: Mic,       bg: '#e9fbe5', color: '#00a884', subtext: 'Voice message' };
  if (type === 'image') return { icon: ImageIcon, bg: '#e3f2fd', color: '#1976d2', subtext: 'Image' };
  if (type === 'video') return { icon: Video,     bg: '#f3e5f5', color: '#7b1fa2', subtext: 'Video' };
  return null;
}

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

  const isTextType = (m: PrebuiltMessage) => !m.type || m.type === 'text';

  const filtered = search.trim()
    ? messages.filter(
        m =>
          m.label.toLowerCase().includes(search.toLowerCase()) ||
          // only search content for text messages — base64 media content is never searched
          (isTextType(m) && m.content.toLowerCase().includes(search.toLowerCase())),
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
              const meta = getMediaMeta(msg.type);
              return (
                <button
                  key={msg.id}
                  data-testid="prebuilt-message-item"
                  data-message-id={msg.id}
                  data-message-type={msg.type ?? 'text'}
                  onClick={() => handleSelect(msg)}
                  style={{
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
                  }}
                  onMouseOver={e => { (e.currentTarget as HTMLButtonElement).style.background = '#f5f5f5'; }}
                  onMouseOut={e => { (e.currentTarget as HTMLButtonElement).style.background = 'none'; }}
                >
                  {meta && (
                    <div style={{
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      background: meta.bg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <meta.icon style={{ width: 18, height: 18, color: meta.color }} />
                    </div>
                  )}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontSize: 14, fontWeight: 500, color: '#111b21', margin: 0, lineHeight: 1.4 }}>
                      {msg.label}
                    </p>
                    <p style={{ fontSize: 13, color: '#667781', margin: '2px 0 0', lineHeight: 1.4, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' as const }}>
                      {meta ? meta.subtext : msg.content}
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
