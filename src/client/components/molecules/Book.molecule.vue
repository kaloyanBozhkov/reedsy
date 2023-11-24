<template>
  <div class="grid grid-cols-[100px_1fr] gap-3">
    <div class="relative rounded-lg w-[100px] aspect-h-[1.5] overflow-hidden group">
      <img
        :src="imgSrc"
        alt="book cover"
        class="w-full h-auto group-hover:scale-105 transition-all duration-500"
      />
      <div class="absolute inset-0 animate-pulse bg-black/10 w-full h-full" />
    </div>
    <BookInfo :title="title" :author="author" />
  </div>
</template>

<script lang="ts">
import BookInfo from '@/components/atoms/BookInfo.atom.vue'

export default {
  components: { BookInfo },
  props: {
    imgSrc: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
}
</script>
