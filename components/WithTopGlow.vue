<template>
  <div class="overflow-hidden relative">
    <div
      class="glow pointer-events-none transform-gpu absolute z-0 rounded-[50%] opacity-40 blur-[64px] -top-[650px]"
      v-bind="$attrs"
    />

    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false
})
</script>

<style scoped lang="scss">
.glow {
  --w: 1500px;
  width: var(--w);
  height: calc(var(--w) / 2);
  left: calc(50vw - var(--w) / 2);
  background: conic-gradient(from 180deg at 50% 50%, rgb(58 91 188) 0deg, rgb(168, 83, 186) 180deg, rgb(130 0 42) 1turn);
}
</style>

