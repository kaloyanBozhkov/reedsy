import * as vite from 'vite'

const FE_PORT = 5173

// @TODO if testing on prod rework this
export const URL = `http://localhost:${FE_PORT}`

export default vite.defineConfig({
  projectId: 'reedsy-e2e',
  viewportHeight: 1000,
  viewportWidth: 1280,
  video: false,
  e2e: {
    supportFile: false,
    baseUrl: URL,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
