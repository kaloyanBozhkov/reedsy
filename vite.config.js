import { defineConfig, loadEnv } from 'vite'
import EnvironmentPlugin from 'vite-plugin-environment'
import tsconfigPaths from 'vite-tsconfig-paths'

import vue from '@vitejs/plugin-vue'

const env = loadEnv(import.meta.env, process.cwd(), '')

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
  define: {
    'process.env.PUBLIC_DOMAIN': env.PUBLIC_DOMAIN,
    'process.env.NODE_ENV': env.NODE_ENV,
    'process.env.PORT': env.PORT,
  },
  plugins: [
    EnvironmentPlugin({
      // needed to seed db in prod
      DATABASE_URL: undefined,
      PUBLIC_DOMAIN: null,
      NODE_ENV: 'development',
      PORT: 3000,
    }),
    tsconfigPaths({
      projects: ['./tsconfig.client.json', './tsconfig.json'],
    }),
    vue(),
  ],
})
