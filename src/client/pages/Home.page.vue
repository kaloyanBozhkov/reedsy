<template>
  <PageLayout>
    <SpacingLayout>
      <div>
        <Card class="flex flex-col gap-3">
          <h2 class="prose font-semibold text-lg dark:text-white">
            Most Popular Books of All Time
          </h2>
          <Table :columns="columns" :rows="rows" spacing-adjust="1rem" />
        </Card>
      </div>
    </SpacingLayout>
  </PageLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { useBookStore } from '@/stores/book.store'

import ActionButton from '@/components/atoms/ActionButton.atom.vue'
import Card from '@/components/atoms/Card.atom.vue'

import Table from '@/components/molecules/Table.molecule.vue'

import PageLayout from '@/components/layouts/Page.layout.vue'
import SpacingLayout from '@/components/layouts/Spacing.layout.vue'

export default defineComponent({
  components: { PageLayout, SpacingLayout, Table, ActionButton, Card },
  data() {
    return {
      columns: [
        { key: 'title', label: 'Title' },
        { key: 'published', label: 'Published' },
        { key: 'rating', label: 'Rating' },
        { key: 'buyOn', label: 'Buy On' },
      ],
      rows: [
        {
          title: 'title',
          published: 'helo',
          rating: 'Koko',
          buyOn: '-',
        },
        {
          title: 'title',
          published: 'helo',
          rating: 'Koko',
          buyOn: '-',
        },
        {
          title: 'title',
          published: 'helo',
          rating: 'Koko',
          buyOn: '-',
        },
      ],
    }
  },
  setup() {
    const book = useBookStore()
    return {}
  },
})
</script>
