<template>
  <button
    @click="onClick"
    class="py-2 px-4 text-white font-normal rounded-xl bg-primary dark:bg-primary-dark shadow-sm"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { PropType } from 'vue'

export default {
  props: {
    onClick: {
      type: Function as PropType<() => void>,
      default: () => {},
    },
  },
}
</script>
