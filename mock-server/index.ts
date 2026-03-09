import { serve } from '@hono/node-server';
import { app } from './app.js';

const PORT = Number(process.env.MOCK_PORT || 3002);

serve({ fetch: app.fetch, port: PORT }, () => {
  console.log(`[mock-server] Evolution API mock running on http://localhost:${PORT}`);
});
