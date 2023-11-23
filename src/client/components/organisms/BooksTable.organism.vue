<template>
  <Table :columns="columns" :rows="rows" spacing-adjust="1rem">
    <template v-for="column in columns" #[column.key]="{ row }">
      <template v-if="column.key === 'buyOn'">
        <div class="flex flex-col gap-1">
          <LinkAtom href="google.com">Google</LinkAtom>
          <LinkAtom href="google.com">Amazon</LinkAtom>
        </div>
      </template>
    </template>
  </Table>
  <Pagination :items="10" class="self-center" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { useBookStore } from '@/stores/book.store'

import ActionButton from '@/components/atoms/ActionButton.atom.vue'
import LinkAtom from '@/components/atoms/Link.atom.vue'

import Pagination from '@/components/molecules/Pagination.molecule.vue'
import Table from '@/components/molecules/Table.molecule.vue'

export default defineComponent({
  components: { Table, ActionButton, Pagination, LinkAtom },
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
          id: 0,
          title: 'title',
          published: 'helo',
          rating: 'Koko',
          buyOn: '-',
        },
        {
          id: 1,
          title: 'tit12211le',
          published: 'heasdasdasdlo',
          rating: 'Koko333',
          buyOn: '-',
        },
        {
          id: 2,
          title: 'title',
          published: 'helo',
          rating: 'Koko222',
          buyOn: '-',
        },
      ],
    }
  },
  methods: {
    handleButtonClick(row) {
      console.log(row)
    },
  },
  setup() {
    const book = useBookStore()
    return {}
  },
})
</script>
