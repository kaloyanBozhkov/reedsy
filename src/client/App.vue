<template>
  <div :class="`w-full h-full ${darkMode ? 'dark' : 'light'}`">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'

import { useThemeStore } from '@/stores/theme.store'

import Header from '@/components/organisms/Header.organism.vue'

export default defineComponent({
  components: { Header },

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
