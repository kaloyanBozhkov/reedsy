<template>
  <div class="w-full min-h-[250px] sm:max-w-[90vw] relative z-0 m-auto">
    <SpacingLayout class="flex flex-col gap-4 p-4 sm:flex-row sm:justify-between">
      <LinkAtom href="www.kaloyanbozhkov">By Kaloyan Bozhkov</LinkAtom>
      <div class="flex flex-col gap-1">
        <LinkAtom href="https://github.com/reedsy/challenges/blob/main/node-fullstack.md">
          Challenge Info
        </LinkAtom>
        <LinkAtom href="https://github.com/kaloyanBozhkov/reedsy">Github</LinkAtom>
      </div>
    </SpacingLayout>

    <div
      class="absolute inset-0 bg-main-back-light dark:bg-main-back-dark -z-10 sm:rounded-3xl sm:rounded-b-none"
    />
  </div>
</template>

<script lang="ts">
import LinkAtom from '../atoms/Link.atom.vue'
import SpacingLayout from '../layouts/Spacing.layout.vue'

export default {
  components: { LinkAtom, SpacingLayout },
}
</script>
