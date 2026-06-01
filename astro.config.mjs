import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  base: '/astro',
  srcDir: './src/astro',
  outDir: './.astro-dist',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
