import { defineConfig } from 'cypress'

export default defineConfig({
 projectId: 'reedsy-e2e',
 viewportHeight: 1000,
 viewportWidth: 1280,
 video: false,
 e2e: {
  supportFile: false,
  setupNodeEvents(on, config) {
   // implement node event listeners here
  },
 },
})
