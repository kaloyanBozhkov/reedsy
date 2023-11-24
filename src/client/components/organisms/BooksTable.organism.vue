<template>
  <div class="flex flex-col gap-8">
    <Table
      :is-loading="isLoading"
      :rows-loading="booksPerPage"
      :columns="columns"
      :rows="rows"
      :spacing-adjust="spaceAdjust"
      :on-row-click="handleButtonClick"
    >
      <template v-for="column in columns" #[column.key]="{ row }">
        <template v-if="column.key === 'title'">
          <Book :imgSrc="row.img" :title="row.title" :author="row.author" />
        </template>
        <template v-else-if="column.key === 'buyOn'">
          <div class="flex flex-col gap-1">
            <LinkAtom href="google.com">Google</LinkAtom>
            <LinkAtom href="google.com">Amazon</LinkAtom>
          </div>
        </template>
      </template>
    </Table>
    <Pagination
      v-if="total > 0"
      :items="total"
      :on-page-change="handlePageChange"
      class="self-center"
    />
    <DotsLoader v-else class="self-center" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'

import ActionButton from '@/components/atoms/ActionButton.atom.vue'
import DotsLoader from '@/components/atoms/DotsLoader.atom.vue'
import LinkAtom from '@/components/atoms/Link.atom.vue'

import Book from '@/components/molecules/Book.molecule.vue'
import Pagination from '@/components/molecules/Pagination.molecule.vue'
import Table from '@/components/molecules/Table.molecule.vue'

import { getBooksFetcher } from '@/services/books'
import { useQuery } from '@tanstack/vue-query'

export default defineComponent({
  components: { Table, ActionButton, Pagination, LinkAtom, Book, DotsLoader },
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
        { key: 'publishedOn', label: 'Published' },
        { key: 'rating', label: 'Rating' },
        { key: 'buyOn', label: 'Buy On' },
      ],
    }
  },
  methods: {
    handleButtonClick(row) {
      console.log(row)
    },
  },
  setup() {
    const booksPerPage = 5
    const currentPage = ref(1)
    const { isError, data, error, isLoading, refetch } = useQuery({
      queryKey: ['books'],
      queryFn: () => getBooksFetcher(currentPage.value, booksPerPage),
      enabled: true,
    })

    const handlePageChange = (page: number) => {
      currentPage.value = page
      refetch()
    }

    console.log(data.value)

    return {
      isLoading,
      isError,
      data,
      error,
      handlePageChange,
      booksPerPage,
      rows: data.value?.data ?? [],
      total: data.value?.total ?? 0,
    }
  },
})
</script>
