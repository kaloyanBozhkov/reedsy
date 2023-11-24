<template>
  <div
    class="h-full w-full shadow-lg dark:bg-primary-dark-500 dark:bg-none bg-main-back-light border-b-[1px] border-primary-50 dark:border-primary-dark-400"
  >
    <SpacingLayout class="flex flex-row justify-between items-center pt-0 pb-0 h-full">
      <h1 class="font-semibold text-3xl text-primary dark:text-white">Reedsy</h1>
      <ActionButton :onClick="toggleDarkMode" class="flex flex-row gap-2 items-center">
        <font-awesome-icon icon="fa-regular fa-moon" v-if="darkMode" />
        <font-awesome-icon icon="fa-regular fa-sun" v-else />
        {{ darkMode ? 'Dark' : 'Light' }}</ActionButton
      >
    </SpacingLayout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { useThemeStore } from '@/stores/theme.store'

import ActionButton from '@/components/atoms/ActionButton.atom.vue'

import SpacingLayout from '@/components/layouts/Spacing.layout.vue'

export default defineComponent({
  components: { SpacingLayout, ActionButton },
  setup() {
    const toggleDarkMode = useThemeStore(({ controls }) => controls.toggleDarkMode)
    const darkMode = useThemeStore(({ darkMode }) => darkMode)

    return {
      darkMode,
      toggleDarkMode,
    }
  },
})
</script>
