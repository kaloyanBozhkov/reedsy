<template>
  <template v-if="error">
    <ErrorMsg :on-action="refetch">
      Something went wrong!
      <template #action>
        Retry
        <DotsLoader v-if="isLoading" for-btn size="sm" />
      </template>
    </ErrorMsg>
  </template>
  <div v-else class="flex flex-col gap-8">
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
      <template #[expandedRowId]="{ row }">
        <tr class="relative w-full h-[350px] sm:h-[250px]">
          <BookSummary :book-id="row.id" class="absolute inset-0" />
        </tr>
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
import { defineComponent, ref, toRefs } from 'vue'

import type { Book as BookType } from 'common/types'

import ActionButton from '@/components/atoms/ActionButton.atom.vue'
import DotsLoader from '@/components/atoms/DotsLoader.atom.vue'
import LinkAtom from '@/components/atoms/Link.atom.vue'

import Book from '@/components/molecules/Book.molecule.vue'
import ErrorMsg from '@/components/molecules/ErrorMsg.molecule.vue'
import Pagination from '@/components/molecules/Pagination.molecule.vue'
import Table from '@/components/molecules/Table.molecule.vue'

import { getBooks } from '@/services/books'
import { BUY_ON } from '@/utils/constants'
import { DISTRIBUTOR } from '@prisma/client'
import { useQuery } from '@tanstack/vue-query'

import BookSummary from './BookSummary.organism.vue'

export default defineComponent({
  components: {
    Table,
    ActionButton,
    Pagination,
    LinkAtom,
    Book,
    DotsLoader,
    ErrorMsg,
    BookSummary,
  },
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
    handlePageChange(page: number) {
      const { currentPage } = toRefs(this)
      currentPage.value = page
      this.refetch()
    },
    handleButtonClick(row: BookType) {
      this.expandedRowId = row.id
    },
    getLinkLabel(link: DISTRIBUTOR) {
      return BUY_ON[link]
    },
  },
  setup() {
    const expandedRowId = ref('')
    const booksPerPage = 5
    const currentPage = ref(1)
    const { isError, data, error, isFetching, refetch } = useQuery({
      queryKey: ['books', currentPage.value, booksPerPage],
      queryFn: () => getBooks(currentPage.value, booksPerPage),
      enabled: true,
      refetchOnWindowFocus: false,
      initialData: { data: [], total: 0 },
    })

    return {
      isLoading: isFetching,
      isError,
      data,
      error,
      booksPerPage,
      expandedRowId,
      currentPage,
      refetch,
    }
  },
})
</script>
