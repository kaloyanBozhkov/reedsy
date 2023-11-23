<template>
  <PageLayout>
    <SpacingLayout>
      <div>
        <Card class="flex flex-col gap-3">
          <h2 class="prose font-semibold text-lg dark:text-slate-300">
            Most Popular Books of All Time
          </h2>
          <BooksTable />
        </Card>
      </div>
    </SpacingLayout>
  </PageLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Card from '@/components/atoms/Card.atom.vue'

import BooksTable from '@/components/organisms/BooksTable.organism.vue'

import PageLayout from '@/components/layouts/Page.layout.vue'
import SpacingLayout from '@/components/layouts/Spacing.layout.vue'

export default defineComponent({
  components: { PageLayout, SpacingLayout, BooksTable, Card },
})
</script>
