<template>
  <div :class="`w-full h-full ${darkMode ? 'dark' : 'light'}`">
    <div
      class="w-full min-h-full flex flex-col gap-4 overflow-auto bg-main-back-light dark:bg-main-back-dark"
    >
      <header class="min-h-[90px] h-[90px] w-full">
        <slot name="header" />
      </header>
      <main class="w-full min-h-full flex flex-col gap-4">
        <slot name="main" />
      </main>
      <footer class="w-full">
        <slot name="footer" />
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'

import { useThemeStore } from '@/stores/theme.store'

export default defineComponent({
  setup() {
    const darkMode = useThemeStore(({ darkMode }) => darkMode)

    onMounted(() => {
      const initialize = useThemeStore(({ controls }) => controls.initialize)
      initialize()
    })

    return {
      darkMode,
    }
  },
})
</script>
