<template>
  <div ref="el" class="opacity-0 transform-gpu relative">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { useIntersectionObserver } from '@vueuse/core'

const el = ref<HTMLElement | null>(null)

if (process.client) {
  const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
    if (!isIntersecting) return

    el.value?.classList.add('fade')
    el.value?.classList.remove('opacity-0')
    stop()
  })
}
</script>

<style scoped lang="scss">
@keyframes fade {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    transform: translateY(0);
  }
}

.fade {
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }

  animation: fade .5s ease-in;
}
</style>
