import { useEffect, useState } from 'react';
import { Send, Loader2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import type { Template, TemplateParameterInfo } from '@/types/whatsapp';
import { getTemplateParameters } from '@/lib/template-parser';
import { TemplateParametersDialog } from './template-parameters-dialog';

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  phoneNumber: string;
  onTemplateSent?: () => void;
};

export function TemplateSelectorDialog({ open, onOpenChange, phoneNumber, onTemplateSent }: Props) {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Parameters dialog state
  const [showParametersDialog, setShowParametersDialog] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [parameterInfo, setParameterInfo] = useState<TemplateParameterInfo | null>(null);

  useEffect(() => {
    if (open) {
      fetchTemplates();
    }
  }, [open]);

  const fetchTemplates = async () => {
    setLoading(true);
    setError(null);
    try {
      // Templates are not yet implemented for Evolution API
      // This would need a provider method when templates are supported
      setError('Templates are not yet supported for this provider');
      setTemplates([]);
    } catch (err) {
      console.error('Error fetching templates:', err);
      setError(err instanceof Error ? err.message : 'Failed to load templates');
    } finally {
      setLoading(false);
    }
  };

  const handleSelectTemplate = (template: Template) => {
    const params = getTemplateParameters(template);

    // If template has parameters, show parameters dialog
    if (params.parameters.length > 0) {
      setSelectedTemplate(template);
      setParameterInfo(params);
      setShowParametersDialog(true);
      return;
    }

    // No parameters - send immediately
    handleSendTemplateWithoutParameters(template);
  };

  const handleSendTemplateWithoutParameters = async (_template: Template) => {
    setSending(_template.id);
    setError(null);
    try {
      // Templates not yet implemented for direct provider calls
      setError('Templates are not yet supported for this provider');
    } catch (err) {
      console.error('Error sending template:', err);
      setError(err instanceof Error ? err.message : 'Failed to send template');
    } finally {
      setSending(null);
    }
  };

  const handleBackToTemplateSelector = () => {
    setShowParametersDialog(false);
    setSelectedTemplate(null);
    setParameterInfo(null);
  };

  const handleTemplateWithParametersSent = () => {
    setShowParametersDialog(false);
    setSelectedTemplate(null);
    setParameterInfo(null);
    onOpenChange(false);
    onTemplateSent?.();
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'MARKETING':
        return 'wa:bg-blue-100 wa:text-blue-800';
      case 'UTILITY':
        return 'wa:bg-green-100 wa:text-green-800';
      case 'AUTHENTICATION':
        return 'wa:bg-purple-100 wa:text-purple-800';
      default:
        return 'wa:bg-gray-100 wa:text-gray-800';
    }
  };

  return (
    <>
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:wa:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Send template message</DialogTitle>
          <DialogDescription>
            Select a template to send to {phoneNumber}
          </DialogDescription>
        </DialogHeader>

        {error && (
          <div className="wa:p-3 wa:bg-red-50 wa:border wa:border-red-200 wa:rounded-lg wa:text-sm wa:text-red-800">
            {error}
          </div>
        )}

        {loading ? (
          <div className="wa:flex wa:items-center wa:justify-center wa:py-8">
            <Loader2 className="wa:h-8 wa:w-8 wa:animate-spin wa:text-[#00a884]" />
          </div>
        ) : templates.length === 0 ? (
          <div className="wa:py-8 wa:text-center wa:text-muted-foreground">
            No approved templates found
          </div>
        ) : (
          <ScrollArea className="wa:h-[400px] wa:pr-4">
            <div className="wa:space-y-3">
              {templates.map((template) => (
                <div
                  key={template.id}
                  className="wa:p-4 wa:border wa:border-[#d1d7db] wa:rounded-lg hover:wa:bg-[#f0f2f5] wa:transition-colors"
                >
                  <div className="wa:flex wa:items-start wa:justify-between wa:gap-3 wa:mb-2">
                    <div className="wa:flex-1 wa:min-w-0">
                      <h3 className="wa:font-medium wa:text-[#111b21] wa:truncate">
                        {template.name}
                      </h3>
                      <div className="wa:flex wa:items-center wa:gap-2 wa:mt-1">
                        <Badge variant="secondary" className={getCategoryColor(template.category)}>
                          {template.category}
                        </Badge>
                        <span className="wa:text-xs wa:text-[#667781]">
                          {template.language}
                        </span>
                      </div>
                    </div>
                    <Button
                      onClick={() => handleSelectTemplate(template)}
                      disabled={sending !== null}
                      size="sm"
                      className="wa:bg-[#00a884] hover:wa:bg-[#008f6f]"
                    >
                      {sending === template.id ? (
                        <Loader2 className="wa:h-4 wa:w-4 wa:animate-spin" />
                      ) : (
                        <>
                          <Send className="wa:h-4 wa:w-4 wa:mr-1" />
                          Send
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        )}

        <Separator />

        <div className="wa:flex wa:justify-end wa:gap-2">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>

    {selectedTemplate && parameterInfo && (
      <TemplateParametersDialog
        open={showParametersDialog}
        onOpenChange={setShowParametersDialog}
        template={selectedTemplate}
        parameterInfo={parameterInfo}
        phoneNumber={phoneNumber}
        onBack={handleBackToTemplateSelector}
        onTemplateSent={handleTemplateWithParametersSent}
      />
    )}
  </>
  );
}
