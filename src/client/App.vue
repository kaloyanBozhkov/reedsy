<template>
  <MainLayout>
    <template #header>
      <Header />
    </template>
    <template #main>
      <router-view></router-view>
    </template>
    <template #footer>
      <Footer />
    </template>
  </MainLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Header from '@/components/organisms/Header.organism.vue'

import MainLayout from '@/components/layouts/Main.layout.vue'

import Footer from './components/molecules/Footer.molecule.vue'

export default defineComponent({
  components: { Header, MainLayout, Footer },
})
</script>
