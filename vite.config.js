import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

import vue from '@vitejs/plugin-vue'

/** @type {import('vite').UserConfig} */
export default defineConfig({
  build: {
    outDir: 'dist/client',
  },
  plugins: [
    tsconfigPaths({
      projects: ['./tsconfig.client.json', './tsconfig.json'],
    }),
    vue(),
  ],
})
