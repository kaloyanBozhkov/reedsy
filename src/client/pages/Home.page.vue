<template>
 <Layout>
  <div>
   <h2 class="opacity-10">Hello world</h2>
  </div>
 </Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { useBookStore } from '@/stores/book.store'

import Layout from '@/components/layouts/Page.layout.vue'

export default defineComponent({
 components: { Layout },

 setup() {
  const book = useBookStore()
  return {}
 },
})
</script>
