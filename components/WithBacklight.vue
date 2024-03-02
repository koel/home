<template>
  <div class="with-backlight">
    <div
      ref="backlightEl"
      :style="{ backgroundColor }"
      class="backlight pointer-events-none opacity-0 h-4/5 w-3/4 motion-safe:duration-1000 rounded-[50%] absolute top-[10%] left-[12.5%] z-0 blur-[48px] transform-gpu"
    />
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core'

const props = defineProps<{ color: string }>()
const backgroundColor = toRef(props, 'color')

const backlightEl = ref<HTMLElement | null>(null)

if (process.client) {
  const { stop } = useIntersectionObserver(backlightEl, ([{ isIntersecting }]) => {
    if (!isIntersecting) return

    backlightEl.value?.classList.add('opacity-100')
    backlightEl.value?.classList.remove('opacity-0')
    stop()
  })
}
</script>

<style scoped lang="scss">
.with-backlight > :not(.backlight) {
  position: relative;
  z-index: 1;
}
</style>
