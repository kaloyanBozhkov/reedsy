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
    <div class="flex flex-col gpa-5">
      <h1 class="text-md font-semibold dark:text-slate-400 text-slate-700">{{ title }}</h1>
      <h2 class="text-md font-light dark:text-slate-400 text-slate-700">{{ author }}</h2>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
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
})
</script>
