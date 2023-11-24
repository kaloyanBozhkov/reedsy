<template>
  <div class="flex flex-row gap-2 dark:text-slate-400">
    <button @click="prevPage" :disabled="currentPage === 1" class="disabled:opacity-40">
      <font-awesome-icon icon="fa-solid fa-angle-left" />
    </button>
    <span>Page {{ currentPage }} of {{ totalPages }}</span>
    <button @click="nextPage" :disabled="currentPage === totalPages" class="disabled:opacity-40">
      <font-awesome-icon icon="fa-solid fa-angle-right" />
    </button>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue'

export default {
  props: {
    items: {
      type: Number,
      default: 0,
      required: true,
    },
    itemsPerPage: {
      type: Number,
      default: 5,
    },
    onPageChange: {
      type: Function as PropType<(currentPage: number) => void>,
      default() {
        console.log('page changed', this.currentPage)
      },
    },
  },
  data() {
    return {
      currentPage: 1,
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.items / this.itemsPerPage)
    },
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++
        this.onPageChange(this.currentPage)
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--
        this.onPageChange(this.currentPage)
      }
    },
  },
}
</script>
