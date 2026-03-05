import { test, expect, type Page, type Route } from '@playwright/test';

// Helper to create mock Evolution API message records
function makeMockMessage(id: string, text: string, timestamp: number, fromMe = false) {
  return {
    key: { remoteJid: '5511999999999@s.whatsapp.net', fromMe, id },
    messageTimestamp: timestamp,
    messageType: 'conversation',
    message: { conversation: text },
  };
}

// Generate a page of mock messages
function makePage(pageNum: number, pageSize: number, totalMessages: number) {
  const totalPages = Math.ceil(totalMessages / pageSize);
  const records = [];
  // Page 1 = most recent, higher pages = older
  // Use descending timestamps so page 1 is newest
  const baseTimestamp = 1700000000;
  const startIdx = (pageNum - 1) * pageSize;
  const endIdx = Math.min(startIdx + pageSize, totalMessages);

  for (let i = startIdx; i < endIdx; i++) {
    // Older messages have lower timestamps
    const ts = baseTimestamp - (totalMessages - 1 - i) * 60;
    records.push(makeMockMessage(`msg-${i}`, `Message ${i}`, ts, i % 3 === 0));
  }

  return {
    messages: {
      total: totalMessages,
      pages: totalPages,
      currentPage: pageNum,
      records,
    },
  };
}

// Mock chats response
const mockChats = [
  {
    id: '5511999999999@s.whatsapp.net',
    remoteJid: '5511999999999@s.whatsapp.net',
    name: 'Test Contact',
    pushName: 'Test Contact',
    unreadCount: 0,
    updatedAt: new Date().toISOString(),
    lastMessage: {
      key: { id: 'last-msg', fromMe: false, remoteJid: '5511999999999@s.whatsapp.net' },
      pushName: 'Test Contact',
      messageType: 'conversation',
      message: { conversation: 'Hello!' },
      messageTimestamp: Math.floor(Date.now() / 1000),
    },
  },
];

const TOTAL_MESSAGES = 120; // 3 pages of 50
const PAGE_SIZE = 50;

async function setupRoutes(page: Page) {
  // Mock connection state
  await page.route('**/instance/connectionState/**', async (route: Route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ instance: { state: 'open' } }),
    });
  });

  // Mock find chats
  await page.route('**/chat/findChats/**', async (route: Route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify(mockChats),
    });
  });

  // Mock find contacts
  await page.route('**/chat/findContacts/**', async (route: Route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify([]),
    });
  });

  // Mock find messages with pagination
  await page.route('**/chat/findMessages/**', async (route: Route) => {
    const body = JSON.parse(route.request().postData() || '{}');
    const pageNum = body.page || 1;
    const response = makePage(pageNum, PAGE_SIZE, TOTAL_MESSAGES);
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify(response),
    });
  });
}

test.describe('Infinite scroll for message history', () => {
  test.beforeEach(async ({ page }) => {
    await setupRoutes(page);
    await page.goto('/infinite-scroll-test.html');
    // Wait for component to mount
    await page.waitForTimeout(2000);
  });

  test('initial load renders page 1 messages', async ({ page }) => {
    const mount = page.locator('#mount');

    // Click the chat to open it
    await mount.getByText('Test Contact').first().click();
    await page.waitForTimeout(2000);

    // Should see messages from page 1
    await expect(mount.getByText('Message 0')).toBeVisible();
  });

  test('conversation data loads with pagination metadata', async ({ page }) => {
    const mount = page.locator('#mount');

    // Track API calls to verify pagination params
    const apiCalls: { page?: number; offset?: number }[] = [];
    await page.route('**/chat/findMessages/**', async (route: Route) => {
      const body = JSON.parse(route.request().postData() || '{}');
      apiCalls.push({ page: body.page, offset: body.offset });
      const pageNum = body.page || 1;
      const response = makePage(pageNum, PAGE_SIZE, TOTAL_MESSAGES);
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(response),
      });
    });

    await mount.getByText('Test Contact').first().click();
    await page.waitForTimeout(2000);

    // Verify initial call uses page 1
    expect(apiCalls.length).toBeGreaterThan(0);
    expect(apiCalls[0].page).toBe(1);
  });

  test('scroll to top triggers page 2 fetch', async ({ page }) => {
    const mount = page.locator('#mount');

    // Track findMessages calls
    const apiCalls: number[] = [];
    await page.route('**/chat/findMessages/**', async (route: Route) => {
      const body = JSON.parse(route.request().postData() || '{}');
      const pageNum = body.page || 1;
      apiCalls.push(pageNum);
      const response = makePage(pageNum, PAGE_SIZE, TOTAL_MESSAGES);
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(response),
      });
    });

    // Open conversation
    await mount.getByText('Test Contact').first().click();
    await page.waitForTimeout(2000);

    // Scroll to top of the message viewport
    const viewport = mount.locator('[data-radix-scroll-area-viewport]').last();
    await viewport.evaluate((el) => { el.scrollTop = 0; });
    await page.waitForTimeout(2000);

    // Should have fetched page 2
    expect(apiCalls).toContain(2);
  });

  test('shows all loaded messages after loading older page', async ({ page }) => {
    const mount = page.locator('#mount');

    // Open conversation
    await mount.getByText('Test Contact').first().click();
    await page.waitForTimeout(2000);

    // Scroll to top to trigger page 2 load
    const viewport = mount.locator('[data-radix-scroll-area-viewport]').last();
    await viewport.evaluate((el) => { el.scrollTop = 0; });
    await page.waitForTimeout(2000);

    // Should have messages from both pages visible in DOM
    // Page 1 messages (0-49) and page 2 messages (50-99) should all exist
    await expect(mount.getByText('Message 0')).toBeAttached();
    await expect(mount.getByText('Message 50')).toBeAttached();
  });
});
