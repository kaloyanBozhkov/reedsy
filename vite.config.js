import { defineConfig } from 'vite'
import EnvironmentPlugin from 'vite-plugin-environment'
import tsconfigPaths from 'vite-tsconfig-paths'

import vue from '@vitejs/plugin-vue'

/** @type {import('vite').UserConfig} */
export default defineConfig({
  build: {
    outDir: 'dist/client',
  },
  resolve: {
    alias: {
      //https://github.com/prisma/prisma/issues/12504
      '.prisma/client/index-browser': './node_modules/.prisma/client/index-browser.js',
    },
  },
  plugins: [
    EnvironmentPlugin({
      DATABASE_URL: undefined,
      NODE_ENV: 'development',
      // needed to seed db in prod
      PUBLIC_DOMAIN: null,
      PORT: null,
    }),
    tsconfigPaths({
      projects: ['./tsconfig.client.json', './tsconfig.json'],
    }),
    vue(),
  ],
})
