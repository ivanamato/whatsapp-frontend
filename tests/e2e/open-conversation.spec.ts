import { test, expect } from '@playwright/test';
import { ConversationListPage } from './pages/conversation-list.page';
import { MessageThreadPage } from './pages/message-thread.page';

// Requires the docker stack to be running: make docker
// Frontend: http://localhost:5173  →  Mock server: http://localhost:3002
//
// Tests the mount() imperative API:
//   inbox.selectConversation(phoneNumber, prefillMessage?, deviceId?)
//
// The inbox instance is exposed on window.__whatsappInbox in dev.tsx.

type WA = { selectConversation(phone: string, prefill?: string, deviceId?: string): void };
type WW = Window & { __whatsappInbox: WA };
type Args = { phone: string; prefill?: string; deviceId?: string };

// page.evaluate serializes functions as strings — closures don't work.
// Pass args as the second parameter and destructure inside the fn.
const evalSelect = ({ phone, prefill, deviceId }: Args) =>
  (window as unknown as WW).__whatsappInbox.selectConversation(phone, prefill, deviceId);

test.describe('selectConversation API', () => {
  let chatList: ConversationListPage;
  let thread: MessageThreadPage;

  test.beforeEach(async ({ page }) => {
    chatList = new ConversationListPage(page);
    thread = new MessageThreadPage(page);
    await page.goto('/');
    await chatList.waitForLoaded();
  });

  // ── Basic behaviour ──────────────────────────────────────────────────────

  test('opens a conversation by phone number', async ({ page }) => {
    await page.evaluate(evalSelect, { phone: '556992924255' });
    await thread.waitForLoaded();
    await expect(thread.root).toBeVisible();
  });

  test('pre-fills the message input when a prefill message is provided', async ({ page }) => {
    await page.evaluate(evalSelect, { phone: '556992924255', prefill: 'Hello, I have a question!' });
    await thread.waitForLoaded();
    await expect(thread.messageInput).toHaveValue('Hello, I have a question!');
  });

  test('send button is enabled when a prefill message is provided', async ({ page }) => {
    await page.evaluate(evalSelect, { phone: '556992924255', prefill: 'Ready to send' });
    await thread.waitForLoaded();
    await expect(thread.sendButton).toBeEnabled();
  });

  test('prefill does not re-apply when a subsequent call has no prefill', async ({ page }) => {
    await page.evaluate(evalSelect, { phone: '556992924255', prefill: 'First prefill' });
    await thread.waitForLoaded();
    await expect(thread.messageInput).toHaveValue('First prefill');

    await thread.messageInput.fill('');

    await page.evaluate(evalSelect, { phone: '5511987654321' });
    await thread.waitForLoaded();

    await expect(thread.messageInput).toHaveValue('');
  });

  test('applying a new prefill overrides the previous one', async ({ page }) => {
    await page.evaluate(evalSelect, { phone: '556992924255', prefill: 'First' });
    await thread.waitForLoaded();

    await page.evaluate(evalSelect, { phone: '5511987654321', prefill: 'Second' });
    await thread.waitForLoaded();

    await expect(thread.messageInput).toHaveValue('Second');
  });

  // ── Device selection ─────────────────────────────────────────────────────

  test('correct device: opens a contact on the specified device', async ({ page }) => {
    // Ana Beatriz lives on mock-device-1 — specifying the correct device
    await page.evaluate(evalSelect, { phone: '556992924255', deviceId: 'mock-device-1' });
    await thread.waitForLoaded();
    await expect(thread.root).toBeVisible();
  });

  test('correct device: switches to device 2 and opens a contact there', async ({ page }) => {
    // Sarah Johnson lives on mock-device-2; app starts on device 1
    await page.evaluate(evalSelect, { phone: '15551234567', deviceId: 'mock-device-2' });
    await thread.waitForLoaded();
    await expect(thread.root).toBeVisible();
    await expect(thread.bubbleWithText('Can we reschedule to Thursday?')).toBeVisible();
  });

  test('correct device: prefill is applied after a cross-device switch', async ({ page }) => {
    await page.evaluate(evalSelect, { phone: '15551234567', prefill: 'Following up!', deviceId: 'mock-device-2' });
    await thread.waitForLoaded();
    await expect(thread.messageInput).toHaveValue('Following up!');
  });

  test('wrong device: contact not found on wrong device — thread stays closed', async ({ page }) => {
    // Ana Beatriz is on device 1 — specifying device 2 should find nothing
    await page.evaluate(evalSelect, { phone: '556992924255', deviceId: 'mock-device-2' });

    // Give it time to attempt selection and load device 2's chats
    await page.waitForTimeout(2000);

    // Message thread must NOT be visible — the contact doesn't exist on device 2
    await expect(thread.root).not.toBeVisible();
  });

  // ── Merge devices (viewMode === 'all') ────────────────────────────────────

  test('merge devices: can open a device-2 contact without specifying deviceId', async ({ page }) => {
    await page.locator('[data-testid="merge-devices-toggle"]').click();
    await chatList.waitForLoaded();

    // Sarah Johnson (device 2) — no deviceId needed in merged view
    await page.evaluate(evalSelect, { phone: '15551234567' });
    await thread.waitForLoaded();
    await expect(thread.bubbleWithText('Can we reschedule to Thursday?')).toBeVisible();
  });

  test('merge devices: deviceId narrows selection to the correct device', async ({ page }) => {
    await page.locator('[data-testid="merge-devices-toggle"]').click();
    await chatList.waitForLoaded();

    await page.evaluate(evalSelect, { phone: '15551234567', deviceId: 'mock-device-2' });
    await thread.waitForLoaded();
    await expect(thread.root).toBeVisible();
  });

  test('merge devices: prefill works in merged mode', async ({ page }) => {
    await page.locator('[data-testid="merge-devices-toggle"]').click();
    await chatList.waitForLoaded();

    await page.evaluate(evalSelect, { phone: '556992924255', prefill: 'Merged prefill', deviceId: 'mock-device-1' });
    await thread.waitForLoaded();
    await expect(thread.messageInput).toHaveValue('Merged prefill');
  });
});
