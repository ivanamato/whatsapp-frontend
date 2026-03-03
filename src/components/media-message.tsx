import { useEffect, useState, useCallback } from 'react';
import { FileText } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';
import { AudioPlayer } from '@/components/audio-player';
import { useProvider } from '@/lib/provider-context';
import { useTranslations } from '@/lib/i18n';

type Props = {
  mediaId: string;
  messageType: string;
  caption?: string | null;
  filename?: string | null;
  isOutbound?: boolean;
  instance?: string;
};

export function MediaMessage({ mediaId, messageType, caption, filename, isOutbound, instance }: Props) {
  const provider = useProvider();
  const t = useTranslations();
  const [mediaUrl, setMediaUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadFailed, setLoadFailed] = useState(false);

  const handleLoadError = useCallback(() => {
    setLoadFailed(true);
  }, []);

  useEffect(() => {
    if (!instance) {
      setLoading(false);
      return;
    }

    let cancelled = false;

    provider
      .getMediaUrl(instance, mediaId)
      .then((url) => {
        if (!cancelled) {
          setMediaUrl(url);
          setLoading(false);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setLoadFailed(true);
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [mediaId, instance, provider]);

  if (loading) {
    return (
      <div className="wa:w-64 wa:h-48 wa:rounded wa:flex wa:items-center wa:justify-center">
        <Skeleton className="wa:w-full wa:h-full" />
      </div>
    );
  }

  if (loadFailed || !mediaUrl) {
    const isAudioType = messageType === 'audio';
    return (
      <div className={cn(
        'wa:bg-muted wa:rounded wa:flex wa:items-center wa:justify-center',
        isAudioType ? 'wa:min-w-[240px] wa:h-12 wa:px-4' : 'wa:w-64 wa:h-48'
      )}>
        <p className={cn('wa:text-sm', isOutbound ? 'wa:text-green-100' : 'wa:text-muted-foreground')}>
          {t('mediaMessage.unavailable')}
        </p>
      </div>
    );
  }

  return (
    <div>
      {messageType === 'image' && (
        <img
          src={mediaUrl}
          alt={caption || 'Image'}
          className="wa:rounded wa:max-w-full wa:h-auto wa:max-h-96"
          onError={handleLoadError}
        />
      )}

      {messageType === 'video' && (
        <video
          src={mediaUrl}
          controls
          className="wa:rounded wa:max-w-full wa:h-auto wa:max-h-96"
          onError={handleLoadError}
        />
      )}

      {messageType === 'audio' && (
        <AudioPlayer src={mediaUrl} isOutbound={isOutbound} onError={handleLoadError} />
      )}

      {messageType === 'document' && (
        <a
          href={mediaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="wa:flex wa:items-center wa:gap-2 wa:text-sm wa:underline wa:cursor-pointer hover:wa:opacity-80 wa:transition-opacity wa:text-[#00a884]"
        >
          <FileText className="wa:h-4 wa:w-4" />
          {filename || t('mediaMessage.downloadDocument')}
        </a>
      )}
    </div>
  );
}
