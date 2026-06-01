import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig} from 'vite';

function astroRouteMiddleware() {
  return {
    name: 'astro-route-middleware',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const pathname = req.url?.split('?')[0];

        if (pathname !== '/astro' && pathname !== '/astro/') {
          next();
          return;
        }

        const htmlPath = path.resolve(__dirname, 'public/astro/index.html');
        if (!fs.existsSync(htmlPath)) {
          next();
          return;
        }

        const html = fs.readFileSync(htmlPath, 'utf8');
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end(html);
      });
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, res, next) => {
        const pathname = req.url?.split('?')[0];

        if (pathname !== '/astro' && pathname !== '/astro/') {
          next();
          return;
        }

        const htmlPath = path.resolve(__dirname, 'dist/astro/index.html');
        if (!fs.existsSync(htmlPath)) {
          next();
          return;
        }

        const html = fs.readFileSync(htmlPath, 'utf8');
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end(html);
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [astroRouteMiddleware(), react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (!id.includes('node_modules')) {
              return undefined;
            }

            if (id.includes('/react/') || id.includes('/react-dom/') || id.includes('/react-router-dom/')) {
              return 'react-vendor';
            }

            if (id.includes('/motion/')) {
              return 'motion-vendor';
            }

            if (id.includes('/lucide-react/')) {
              return 'icons-vendor';
            }

            return undefined;
          },
        },
      },
    },
  };
});
