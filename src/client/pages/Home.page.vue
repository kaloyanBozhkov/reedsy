<template>
  <PageLayout>
    <SpacingLayout>
      <div>
        <h2 class="prose">Hello world</h2>
      </div>
    </SpacingLayout>
  </PageLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { useBookStore } from '@/stores/book.store'

import PageLayout from '@/components/layouts/Page.layout.vue'
import SpacingLayout from '@/components/layouts/Spacing.layout.vue'

export default defineComponent({
  components: { PageLayout, SpacingLayout },

  setup() {
    const book = useBookStore()
    return {}
  },
})
</script>
