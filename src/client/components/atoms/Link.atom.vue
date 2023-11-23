<template>
  <a :href="href" class="text-secondary font-semibold hover:text-secondary-200"><slot /></a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    href: {
      type: String,
      required: true,
    },
  },
})
</script>
