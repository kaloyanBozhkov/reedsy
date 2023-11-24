import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

import vue from '@vitejs/plugin-vue'

/** @type {import('vite').UserConfig} */
export default defineConfig({
  build: {
    outDir: 'dist/client',
  },
  resolve: {
    alias: {
      '.prisma/client/index-browser': './node_modules/.prisma/client/index-browser.js',
    },
  },
  plugins: [
    tsconfigPaths({
      projects: ['./tsconfig.client.json', './tsconfig.json'],
    }),
    vue(),
  ],
})
