import type { Page, Locator } from '@playwright/test';

export class MessageThreadPage {
  readonly root: Locator;
  readonly messageInput: Locator;
  readonly sendButton: Locator;
  readonly micButton: Locator;
  readonly recordingIndicator: Locator;
  readonly cancelRecordingButton: Locator;
  readonly stopRecordingButton: Locator;
  readonly audioPlayer: Locator;
  readonly imagePasteModal: Locator;
  readonly imagePastePreview: Locator;
  readonly imagePasteCaption: Locator;
  readonly imagePasteSend: Locator;
  readonly imagePasteCancel: Locator;
  readonly prebuiltMessagesButton: Locator;
  readonly prebuiltMessagesDialog: Locator;

  constructor(private page: Page) {
    this.root = page.locator('[data-testid="message-thread"]');
    this.messageInput = page.locator('[data-testid="message-input"]');
    this.sendButton = page.locator('[data-testid="send-button"]');
    this.micButton = page.locator('[data-testid="mic-button"]');
    this.recordingIndicator = page.locator('[data-testid="recording-indicator"]');
    this.cancelRecordingButton = page.locator('[data-testid="cancel-recording-button"]');
    this.stopRecordingButton = page.locator('[data-testid="stop-recording-button"]');
    this.audioPlayer = page.locator('[data-testid="audio-player"]');
    this.imagePasteModal = page.locator('[data-testid="image-paste-modal"]');
    this.imagePastePreview = page.locator('[data-testid="image-paste-preview"]');
    this.imagePasteCaption = page.locator('[data-testid="image-paste-caption"]');
    this.imagePasteSend = page.locator('[data-testid="image-paste-send"]');
    this.imagePasteCancel = page.locator('[data-testid="image-paste-cancel"]');
    this.prebuiltMessagesButton = page.locator('[data-testid="prebuilt-messages-button"]');
    this.prebuiltMessagesDialog = page.locator('[data-testid="prebuilt-messages-dialog"]');
  }

  /** Wait until the thread is visible and at least one message bubble is rendered. */
  async waitForLoaded() {
    await this.root.waitFor({ state: 'visible', timeout: 15000 });
    await this.page.locator('[data-testid="message-bubble"]').first().waitFor({ state: 'visible', timeout: 15000 });
  }

  /** All message bubbles in the thread. */
  allBubbles(): Locator {
    return this.page.locator('[data-testid="message-bubble"]');
  }

  /** Outbound (sent) bubbles. */
  outboundBubbles(): Locator {
    return this.page.locator('[data-testid="message-bubble"][data-direction="outbound"]');
  }

  /** Inbound (received) bubbles. */
  inboundBubbles(): Locator {
    return this.page.locator('[data-testid="message-bubble"][data-direction="inbound"]');
  }

  /** A bubble containing specific text. */
  bubbleWithText(text: string): Locator {
    return this.page.locator(`[data-testid="message-bubble"]:has-text("${text}")`);
  }

  async typeMessage(text: string) {
    await this.messageInput.fill(text);
  }

  async startRecording() {
    await this.micButton.click();
  }

  async stopRecording() {
    await this.stopRecordingButton.click();
  }

  async cancelRecording() {
    await this.cancelRecordingButton.click();
  }

  /** Type a message and send it (Enter key). */
  async sendMessage(text: string) {
    await this.messageInput.fill(text);
    await this.messageInput.press('Enter');
  }

  async openPrebuiltMessages() {
    await this.prebuiltMessagesButton.click();
  }

  /** Locator for a specific prebuilt message item by its id. */
  prebuiltMessageItem(id: string): Locator {
    return this.page.locator(`[data-testid="prebuilt-message-item"][data-message-id="${id}"]`);
  }

  /** All prebuilt message items in the dialog. */
  allPrebuiltMessageItems(): Locator {
    return this.page.locator('[data-testid="prebuilt-message-item"]');
  }

  /**
   * Simulate pasting a PNG image into the message input.
   * Uses a synthetic ClipboardEvent with a minimal 1×1 PNG file.
   */
  async pasteImage() {
    await this.messageInput.click();
    await this.page.evaluate(() => {
      // Minimal valid 1×1 PNG (base64)
      const pngBase64 = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==';
      const byteString = atob(pngBase64);
      const ab = new ArrayBuffer(byteString.length);
      const ia = new Uint8Array(ab);
      for (let i = 0; i < byteString.length; i++) ia[i] = byteString.charCodeAt(i);
      const blob = new Blob([ab], { type: 'image/png' });
      const file = new File([blob], 'pasted.png', { type: 'image/png' });
      const dt = new DataTransfer();
      dt.items.add(file);
      const event = new ClipboardEvent('paste', { bubbles: true, clipboardData: dt });
      const el = document.querySelector('[data-testid="message-input"]');
      el?.dispatchEvent(event);
    });
  }
}
