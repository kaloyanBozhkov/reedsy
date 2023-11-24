<template>
  <div class="flex flex-col gap-8">
    <Table
      :is-loading="isLoading || !data.data.length"
      :rows-loading="booksPerPage"
      :columns="columns"
      :rows="data.data"
      :spacing-adjust="spaceAdjust"
      :on-row-click="handleButtonClick"
    >
      <template v-for="(column, idx) in columns" :key="idx" #[column.key]="{ row }">
        <template v-if="column.key === 'title'">
          <Book :imgSrc="row.img" :title="row.title" :author="row.author" />
        </template>
        <template v-else-if="column.key === 'buyOn'">
          <div class="flex flex-col gap-1">
            <LinkAtom v-for="link in row.links" :href="link.href" :key="link.href">{{
              getLinkLabel(link.distributor)
            }}</LinkAtom>
          </div>
        </template>
      </template>
    </Table>
    <Pagination
      v-if="data.total > 0"
      :items="data.total"
      :on-page-change="handlePageChange"
      class="self-center"
    />
    <DotsLoader v-else class="self-center" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import ActionButton from '@/components/atoms/ActionButton.atom.vue'
import DotsLoader from '@/components/atoms/DotsLoader.atom.vue'
import LinkAtom from '@/components/atoms/Link.atom.vue'

import Book from '@/components/molecules/Book.molecule.vue'
import Pagination from '@/components/molecules/Pagination.molecule.vue'
import Table from '@/components/molecules/Table.molecule.vue'

import { getBooksFetcher } from '@/services/books'
import { BUY_ON } from '@/utils/constants'
import { DISTRIBUTOR } from '@prisma/client'
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
    getLinkLabel(link: DISTRIBUTOR) {
      return BUY_ON[link]
    },
  },
  setup() {
    const booksPerPage = 5
    const currentPage = ref(1)
    const { isError, data, error, isFetching, refetch } = useQuery({
      queryKey: ['books', currentPage.value, booksPerPage],
      queryFn: () => getBooksFetcher(currentPage.value, booksPerPage),
      enabled: true,
      initialData: { data: [], total: 0 },
    })
    const handlePageChange = (page: number) => {
      currentPage.value = page
      refetch()
    }

    return {
      isLoading: isFetching,
      isError,
      data,
      error,
      handlePageChange,
      booksPerPage,
    }
  },
})
</script>