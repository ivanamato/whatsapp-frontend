import { useState, useRef, useEffect } from 'react';
import { X, Send } from 'lucide-react';

type Props = {
  imageFile: File;
  imageUrl: string;
  onSend: (caption: string) => void;
  onCancel: () => void;
};

export function ImagePasteModal({ imageFile, imageUrl, onSend, onCancel }: Props) {
  const [caption, setCaption] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSend = () => onSend(caption);

  return (
    <div
      data-testid="image-paste-modal"
      style={{ position: 'fixed', inset: 0, zIndex: 50, background: 'rgba(11,20,26,0.85)', display: 'flex', flexDirection: 'column' }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', flexShrink: 0 }}>
        <button
          data-testid="image-paste-cancel"
          onClick={onCancel}
          style={{ color: 'white', background: 'none', border: 'none', cursor: 'pointer', padding: '8px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          title="Cancel"
        >
          <X style={{ width: 24, height: 24 }} />
        </button>
        <span style={{ color: 'white', fontSize: 15, fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '60%' }}>
          {imageFile.name}
        </span>
        <div style={{ width: 40 }} />
      </div>

      {/* Image preview */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '16px 32px' }}>
        <img
          data-testid="image-paste-preview"
          src={imageUrl}
          alt="Image to send"
          style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: 8 }}
        />
      </div>

      {/* Caption bar */}
      <div style={{ flexShrink: 0, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
        <input
          ref={inputRef}
          data-testid="image-paste-caption"
          type="text"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
            if (e.key === 'Escape') {
              onCancel();
            }
          }}
          placeholder="Add a caption…"
          style={{
            flex: 1,
            background: '#2a3942',
            color: 'white',
            border: 'none',
            outline: 'none',
            borderRadius: 24,
            padding: '12px 20px',
            fontSize: 15,
          }}
        />
        <button
          data-testid="image-paste-send"
          onClick={handleSend}
          style={{
            width: 48,
            height: 48,
            borderRadius: '50%',
            background: '#00a884',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            flexShrink: 0,
          }}
          title="Send"
        >
          <Send style={{ width: 20, height: 20 }} />
        </button>
      </div>
    </div>
  );
}
