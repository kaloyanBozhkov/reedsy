<template>
  <div
    class="relative inline h-[13px] w-[80px] z-0 -ml-1 -mr-1"
    :class="{ 'h-[25px] flex [&>*]:top-[6px]': forBtn, '-m-x-4 scale-70': size === 'sm' }"
  >
    <div
      :class="[
        'absolute top-0 h-[13px] w-[13px] rounded-full left-[8px] z-[1] animate-[scale-in_0.6s_infinite]',
        dotsBg,
      ]"
    />
    <div
      :class="[
        'absolute top-0 h-[13px] w-[13px] rounded-full left-[8px] animate-[move-24px_0.6s_infinite]',
        dotsBg,
      ]"
    />
    <div
      :class="[
        'absolute top-0 h-[13px] w-[13px] rounded-full left-[32px] z-[2] animate-[move-24px_0.6s_infinite]',
        dotsBg,
      ]"
    />
    <div
      :class="[
        'absolute top-0 h-[13px] w-[13px] rounded-full left-[56px] z-[1] animate-[scale-out_0.6s_infinite]',
        dotsBg,
      ]"
    />
  </div>
</template>

<script lang="ts">
export default {
  props: {
    size: {
      type: String,
      default: 'default',
    },
    dotsBg: {
      type: String,
      default: 'bg-slate-300 dark:bg-slate-500',
    },
    forBtn: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
@keyframes scale-in {
  0%,
  100% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
}

@keyframes move-24px {
  0%,
  100% {
    left: 0;
  }
  50% {
    left: 24px;
  }
}

@keyframes scale-out {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(0);
  }
}
</style>
