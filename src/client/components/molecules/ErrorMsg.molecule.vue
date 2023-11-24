<template>
  <Card>
    <div class="flex flex-col gap-4">
      <p>
        <slot />
        <template v-if="!$slots.default">Oops!</template>
      </p>
      <ActionButton :on-click="onAction" class="w-fit">
        <slot name="action" />
        <template v-if="!$slots.action">Reload</template>
      </ActionButton>
    </div>
  </Card>
</template>

<script lang="ts">
import { PropType } from 'vue'

import ActionButton from '../atoms/ActionButton.atom.vue'
import Card from '../atoms/Card.atom.vue'

export default {
  components: { Card, ActionButton },
  props: {
    onAction: {
      type: Function as PropType<() => void>,
    },
  },
}
</script>
