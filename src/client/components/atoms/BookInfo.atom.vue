<template>
  <div class="flex flex-col gpa-5">
    <h1 class="text-md font-semibold dark:text-slate-400 text-slate-700">{{ title }}</h1>
    <h2 class="text-md font-light dark:text-slate-400 text-slate-700">{{ author }}</h2>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      require: true,
    },
    author: {
      type: String,
      require: true,
    },
  },
}
</script>
