<template>
  <WithGradientBorder
    class="rounded-lg sm:rounded-2xl relative transition duration-500 motion-safe:hover:-translate-y-2"
  >
    <img class="relative rounded-lg sm:rounded-2xl border border-indigo-500/50" v-bind="$attrs">
  </WithGradientBorder>
</template>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false
})
</script>
