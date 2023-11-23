<template>
  <div class="flex flex-col gap-8">
    <Table
      :is-loading="isLoading"
      :columns="columns"
      :rows="rows"
      :spacing-adjust="spaceAdjust"
      :on-row-click="handleButtonClick"
    >
      <template v-for="column in columns" #[column.key]="{ row }">
        <template v-if="column.key === 'title'">
          <Book :imgSrc="row.imgSrc" :title="row.title" :author="row.author" />
        </template>
        <template v-else-if="column.key === 'buyOn'">
          <div class="flex flex-col gap-1">
            <LinkAtom href="google.com">Google</LinkAtom>
            <LinkAtom href="google.com">Amazon</LinkAtom>
          </div>
        </template>
      </template>
    </Table>
    <Pagination :items="10" class="self-center" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { useBookStore } from '@/stores/book.store'

import ActionButton from '@/components/atoms/ActionButton.atom.vue'
import LinkAtom from '@/components/atoms/Link.atom.vue'

import Book from '@/components/molecules/Book.molecule.vue'
import Pagination from '@/components/molecules/Pagination.molecule.vue'
import Table from '@/components/molecules/Table.molecule.vue'

export default defineComponent({
  components: { Table, ActionButton, Pagination, LinkAtom, Book },
  props: {
    spaceAdjust: {
      type: String,
      default: '',
    },
  },
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
          author: 'Author Name',
          imgSrc:
            'https://books.google.bg/books/publisher/content?id=25AEAwAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U2zmbTUIMO0KzHIUYckrQoXrNOczw&w=1280',
          published: 'helo',
          rating: 'Koko',
          buyOn: '-',
        },
        {
          id: 1,
          title: 'title',
          author: 'Author Name',
          imgSrc:
            'https://books.google.bg/books/publisher/content?id=25AEAwAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U2zmbTUIMO0KzHIUYckrQoXrNOczw&w=1280',
          published: 'heasdasdasdlo',
          rating: 'Koko333',
          buyOn: '-',
        },
        {
          id: 2,
          title: 'title',
          author: 'Author Name',
          imgSrc:
            'https://books.google.bg/books/publisher/content?id=25AEAwAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U2zmbTUIMO0KzHIUYckrQoXrNOczw&w=1280',
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
    return {
      isLoading: true,
    }
  },
})
</script>
