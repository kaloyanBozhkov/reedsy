<template>
  <MainLayout>
    <Header />
    <router-view></router-view>
  </MainLayout>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'

import { useThemeStore } from '@/stores/theme.store'

import Header from '@/components/organisms/Header.organism.vue'

import MainLayout from '@/components/layouts/Main.layout.vue'

export default defineComponent({
  components: { Header, MainLayout },
})
</script>
