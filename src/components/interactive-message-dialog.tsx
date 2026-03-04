import { useState } from 'react';
import { Send, Loader2, Plus, X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { useProvider } from '@/lib/provider-context';
import { useTranslations } from '@/lib/i18n';

type ButtonItem = {
  id: string;
  title: string;
};

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  conversationId?: string;
  phoneNumber?: string;
  onMessageSent?: () => void;
  instance?: string;
};

export function InteractiveMessageDialog({
  open,
  onOpenChange,
  conversationId,
  phoneNumber,
  onMessageSent,
  instance,
}: Props) {
  const provider = useProvider();
  const t = useTranslations();
  const [header, setHeader] = useState('');
  const [body, setBody] = useState('');
  const [buttons, setButtons] = useState<ButtonItem[]>([
    { id: 'button_1', title: '' }
  ]);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAddButton = () => {
    if (buttons.length < 3) {
      setButtons([
        ...buttons,
        { id: `button_${buttons.length + 1}`, title: '' }
      ]);
    }
  };

  const handleRemoveButton = (index: number) => {
    if (buttons.length > 1) {
      setButtons(buttons.filter((_, i) => i !== index));
    }
  };

  const handleButtonTitleChange = (index: number, title: string) => {
    if (title.length <= 20) {
      const newButtons = [...buttons];
      newButtons[index].title = title;
      setButtons(newButtons);
    }
  };

  const isValid = () => {
    if (!body.trim()) return false;
    if (buttons.length === 0) return false;
    if (buttons.some(btn => !btn.title.trim())) return false;
    return true;
  };

  const handleReset = () => {
    setHeader('');
    setBody('');
    setButtons([{ id: 'button_1', title: '' }]);
    setError(null);
  };

  const handleSend = async () => {
    if (!isValid()) {
      setError(t('interactiveDialog.validationError'));
      return;
    }

    if (!conversationId || !phoneNumber) {
      setError(t('interactiveDialog.noConversation'));
      return;
    }

    if (!instance) {
      setError(t('interactiveDialog.noInstance'));
      return;
    }

    setSending(true);
    setError(null);

    try {
      await provider.sendButtons(instance, {
        to: phoneNumber,
        body: body.trim(),
        header: header.trim() || undefined,
        buttons: buttons.map(btn => ({
          id: btn.id,
          title: btn.title.trim()
        })),
      });

      handleReset();
      onOpenChange(false);
      onMessageSent?.();
    } catch (err) {
      if (process.env.NODE_ENV !== 'production') {
        console.error('Error sending interactive message:', err instanceof Error ? err.message : String(err));
      }
      setError(t('interactiveDialog.sendError') || 'Failed to send message');
    } finally {
      setSending(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={(open) => {
      onOpenChange(open);
      if (!open) handleReset();
    }}>
      <DialogContent className="sm:wa:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{t('interactiveDialog.title')}</DialogTitle>
          <DialogDescription>
            {t('interactiveDialog.description')}
          </DialogDescription>
        </DialogHeader>

        {error && (
          <div className="wa:p-3 wa:bg-red-50 wa:border wa:border-red-200 wa:rounded-lg wa:text-sm wa:text-red-800">
            {error}
          </div>
        )}

        <div className="wa:space-y-4">
          <div className="wa:space-y-2">
            <Label htmlFor="header" className="wa:text-[#111b21]">
              {t('interactiveDialog.headerLabel')}
            </Label>
            <Input
              id="header"
              value={header}
              onChange={(e) => setHeader(e.target.value)}
              placeholder={t('interactiveDialog.headerPlaceholder')}
              className="wa:bg-white wa:border-[#d1d7db] focus-visible:wa:ring-[#00a884]"
            />
          </div>

          <div className="wa:space-y-2">
            <Label htmlFor="body" className="wa:text-[#111b21]">
              {t('interactiveDialog.bodyLabel')} <span className="wa:text-red-500">*</span>
            </Label>
            <Textarea
              id="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder={t('interactiveDialog.bodyPlaceholder')}
              className="wa:bg-white wa:border-[#d1d7db] focus-visible:wa:ring-[#00a884] wa:min-h-[100px]"
            />
          </div>

          <div className="wa:space-y-2">
            <div className="wa:flex wa:items-center wa:justify-between">
              <Label className="wa:text-[#111b21]">
                {t('interactiveDialog.buttonsLabel')} <span className="wa:text-red-500">*</span>
              </Label>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={handleAddButton}
                disabled={buttons.length >= 3}
                className="wa:h-8 wa:text-[#00a884] hover:wa:text-[#008f6f] hover:wa:bg-[#f0f2f5]"
              >
                <Plus className="wa:h-4 wa:w-4 wa:mr-1" />
                {t('interactiveDialog.addButton')}
              </Button>
            </div>

            <div className="wa:space-y-2">
              {buttons.map((button, index) => (
                <div key={button.id} className="wa:flex wa:items-center wa:gap-2">
                  <Input
                    value={button.title}
                    onChange={(e) => handleButtonTitleChange(index, e.target.value)}
                    placeholder={t('interactiveDialog.buttonPlaceholder', { index: String(index + 1) })}
                    className="wa:bg-white wa:border-[#d1d7db] focus-visible:wa:ring-[#00a884]"
                    maxLength={20}
                  />
                  <span className="wa:text-xs wa:text-[#667781] wa:min-w-[3rem]">
                    {button.title.length}/20
                  </span>
                  {buttons.length > 1 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => handleRemoveButton(index)}
                      className="wa:h-9 wa:w-9 wa:text-[#667781] hover:wa:text-red-600 hover:wa:bg-red-50"
                    >
                      <X className="wa:h-4 wa:w-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>

            {buttons.length < 3 && (
              <p className="wa:text-xs wa:text-[#667781]">
                {t('interactiveDialog.moreButtons', { count: String(3 - buttons.length) })}
              </p>
            )}
          </div>
        </div>

        <Separator />

        <div className="wa:flex wa:justify-between wa:gap-2">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            {t('interactiveDialog.cancel')}
          </Button>
          <Button
            onClick={handleSend}
            disabled={!isValid() || sending}
            className="wa:bg-[#00a884] hover:wa:bg-[#008f6f]"
          >
            {sending ? (
              <Loader2 className="wa:h-4 wa:w-4 wa:animate-spin" />
            ) : (
              <>
                <Send className="wa:h-4 wa:w-4 wa:mr-1" />
                {t('interactiveDialog.send')}
              </>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
