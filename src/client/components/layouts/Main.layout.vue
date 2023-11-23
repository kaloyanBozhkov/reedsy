<template>
  <div :class="`w-full h-full ${darkMode ? 'dark' : 'light'}`">
    <div class="w-full h-full bg-main-back-light dark:bg-main-back-dark flex flex-col gap-4">
      <slot />
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
