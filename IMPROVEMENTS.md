# UX Fluidity Improvements Plan

## CRITICAL — Directly causes perceived sluggishness

- [x] **1. Optimistic message sending** — Show sent message instantly with "pending" clock icon, reconcile after API responds (`message-view.tsx`)
- [x] **2. List virtualization** — Conversation list uses `@tanstack/react-virtual`, only renders visible rows + 8 overscan (`conversation-list.tsx`)
- [x] **3. Throttle scroll handler** — Uses `requestAnimationFrame` + only updates state when value changes (`message-view.tsx`)
- [x] **4. AbortController for request cancellation** — Cancels in-flight requests on conversation switch (`message-view.tsx`)
- [x] **5. useMemo for filtered conversations** — Keyed on `[conversations, searchQuery]` (`conversation-list.tsx`)
- [x] **6. View transition animations** — CSS transform/opacity transitions for sidebar on mobile (`globals.css`)

## HIGH — Significant impact on perceived performance

- [x] **7. Lazy-load media with IntersectionObserver** — Only fetches media when within 200px of viewport (`media-message.tsx`)
- [x] **8. Blob URLs instead of base64** — Converts base64 to Blob via `URL.createObjectURL()`, LRU cache evicts old entries (`evolution.ts`)
- [x] **9. Stabilize polling callbacks (ref pattern)** — `onPollRef` prevents restart cascades (`use-auto-polling.ts`)
- [x] **10. Fix fetchInitialMessages recreated on currentPage change** — `currentPageRef` instead of state (`message-view.tsx`)
- [ ] **11. Memoize date formatting** — Skipped: low-cost given virtualization now limits rendered rows
- [x] **12. Connection status indicator** — Banner shows when WhatsApp instance is disconnected/connecting (`connection-status.tsx`)
- [x] **13. Silent file upload error feedback** — Inline error bar with dismiss button for size/MIME rejections (`message-view.tsx`)

## MEDIUM — Architectural improvements

- [x] **14. Media URL cache** — LRU cache (max 50) in EvolutionProvider, auto-revokes oldest blob URLs (`evolution.ts`)
- [x] **15. React error boundary** — Wraps App with retry button (`error-boundary.tsx`, `imperative-bridge.tsx`)
- [x] **16. Cache Radix viewport ref** — `viewportRef` cached once via useEffect, used in scroll handler and scroll restore (`message-view.tsx`)
- [x] **17. Stagger "all devices" requests** — Concurrent pool caps at 3 parallel requests (`conversation-list.tsx`)

## LOW — Polish

- [x] **18. Fix Math.random() in skeletons** — Deterministic widths array (`message-view.tsx`)
- [x] **19. Extract shared getAvatarInitials** — Deduplicated into `src/lib/avatar-utils.ts`, imported by 3 components
- [x] **20. Keyboard navigation** — Escape key returns to conversation list (respects open dialogs) (`App.tsx`)

## Files changed

| File | Changes |
|------|---------|
| `src/lib/avatar-utils.ts` | **NEW** — Shared avatar initials utility |
| `src/components/error-boundary.tsx` | **NEW** — React error boundary with retry |
| `src/components/connection-status.tsx` | **NEW** — Connection status banner |
| `src/hooks/use-auto-polling.ts` | Stabilized with `onPollRef` pattern |
| `src/lib/providers/evolution.ts` | Blob URLs + LRU media cache |
| `src/lib/i18n.tsx` | Added file error + connection status translations |
| `src/components/message-view.tsx` | Optimistic send, throttled scroll, AbortController, cached viewport ref, file error UI, pending clock icon |
| `src/components/conversation-list.tsx` | Virtualized list, useMemo filter, concurrent pool |
| `src/components/media-message.tsx` | IntersectionObserver lazy loading |
| `src/components/chat-actions-menu.tsx` | Shared avatar utils |
| `src/imperative-bridge.tsx` | ErrorBoundary wrapper |
| `src/App.tsx` | Connection status + Escape key navigation |
| `src/app/globals.css` | Mobile view transitions + connection banner animation |
