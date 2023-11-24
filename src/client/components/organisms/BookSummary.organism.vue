<template>
  <div>
    <template v-if="error">
      <ErrorMsg :on-action="refetch">
        Could not get book summary!
        <template #action>
          <template v-if="isLoading">Retry</template>
          <DotsLoader v-else for-btn size="sm" />
        </template>
      </ErrorMsg>
    </template>
    <template v-else>
      <div
        v-if="!isLoading"
        class="bg-black/10 dark:bg-black/20 text-slate-700 dark:text-slate-400 w-full h-full p-4 sm:p-8 overflow-auto flex flex-col gap-4"
      >
        <BookInfo :title="data.title" :author="data.author" />

        <div class="flex flex-col gap-1">
          <h3 class="font-normal">Summary</h3>
          <p class="text-slate-700 dark:text-slate-400 font-light w-full">{{ data.summary }}</p>
        </div>
      </div>
      <template v-else>
        <div class="p-4 sm:p-8 flex flex-col gap-4 justify-center h-full">
          <div class="animate-pulse bg-black/10 h-[45px] w-[40%]" />
          <div class="animate-pulse bg-black/10 h-[80px]" />
        </div>
      </template>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import ActionButton from '@/components/atoms/ActionButton.atom.vue'
import BookInfo from '@/components/atoms/BookInfo.atom.vue'
import DotsLoader from '@/components/atoms/DotsLoader.atom.vue'

import ErrorMsg from '@/components/molecules/ErrorMsg.molecule.vue'

import { getBookDetails } from '@/services/books'
import { useQuery } from '@tanstack/vue-query'

export default defineComponent({
  components: { ActionButton, DotsLoader, ErrorMsg, BookInfo },
  props: {
    bookId: {
      type: String,
      default: '',
      required: true,
    },
  },
  setup({ bookId }) {
    const { isError, data, error, isFetching, refetch } = useQuery({
      queryKey: ['book-info', bookId],
      queryFn: () => getBookDetails(bookId),
      enabled: true,
      refetchOnWindowFocus: false,
      initialData: { summary: '', author: '', title: '' },
    })

    return {
      isLoading: isFetching,
      isError,
      data,
      error,
      refetch,
    }
  },
})
</script>
