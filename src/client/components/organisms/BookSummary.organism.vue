<template>
  <template v-if="error">
    <ErrorMsg :on-action="refetch">
      Could not get summary!
      <template v-if="isLoading" #action>
        <DotsLoader for-btn size="sm" />
      </template>
    </ErrorMsg>
  </template>
  <div v-else class="flex flex-col gap-8">
    <div v-if="!isLoading">
      <p>{{ data.summary }}</p>
    </div>
    <DotsLoader v-else class="self-center" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import ActionButton from '@/components/atoms/ActionButton.atom.vue'
import DotsLoader from '@/components/atoms/DotsLoader.atom.vue'

import ErrorMsg from '@/components/molecules/ErrorMsg.molecule.vue'

import { getBookDetails } from '@/services/books'
import { useQuery } from '@tanstack/vue-query'

export default defineComponent({
  components: { ActionButton, DotsLoader, ErrorMsg },
  props: {
    bookId: {
      type: String,
      default: '',
    },
  },
  setup({ bookId }) {
    const { isError, data, error, isFetching, refetch } = useQuery({
      queryKey: ['book-info', bookId],
      queryFn: () => getBookDetails(bookId),
      enabled: true,
      refetchOnWindowFocus: false,
      initialData: { summary: '' },
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
