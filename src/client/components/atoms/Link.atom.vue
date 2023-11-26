<template>
  <a
    target="_blank"
    :href="href"
    class="text-secondary font-semibold hover:text-secondary-200 w-fit"
  >
    <slot />
  </a>
</template>

<script lang="ts">
export default {
  props: {
    href: {
      type: String,
      required: true,
    },
  },
}
</script>
