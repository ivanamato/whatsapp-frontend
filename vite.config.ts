import { defineConfig, type Plugin } from 'vite';
import preact from '@preact/preset-vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';
import { readFileSync, existsSync } from 'fs';
import tailwindcss from '@tailwindcss/vite';

// Serve devices.json from project root during dev
function serveDevicesJson(): Plugin {
  return {
    name: 'serve-devices-json',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url !== '/devices.json') return next();
        const filePath = resolve(__dirname, 'devices.json');
        if (!existsSync(filePath)) return next();
        res.setHeader('Content-Type', 'application/json');
        res.end(readFileSync(filePath, 'utf-8'));
      });
    },
  };
}

export default defineConfig({
  envPrefix: 'OPENWHATS_',
  plugins: [
    preact(),
    tailwindcss(),
    serveDevicesJson(),
    dts({ include: ['src'], insertTypesEntry: true, rollupTypes: false }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      'react': 'preact/compat',
      'react-dom': 'preact/compat',
      'react-dom/client': 'preact/compat',
      'react/jsx-runtime': 'preact/jsx-runtime',
    },
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'WhatsAppInbox',
      formats: ['es', 'umd'],
      fileName: (format) => `whatsapp-inbox.${format}.js`,
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'style.css';
          return assetInfo.name || 'assets/[name].[ext]';
        },
      },
    },
    cssCodeSplit: false,
  },
});
