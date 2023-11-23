<template>
  <div :class="`w-full h-full ${darkMode ? 'dark' : 'light'}`">
    <header class="min-h-[90px] h-[90px] w-full">
      <slot name="header" />
    </header>
    <main
      class="w-full h-full bg-main-back-light dark:bg-main-back-dark flex flex-col gap-4 overflow-auto"
    >
      <slot name="main" />
    </main>
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
