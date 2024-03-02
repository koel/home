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
const props = defineProps<{ color: string }>()
const backgroundColor = toRef(props, 'color')

import { onMounted } from 'vue'

const backlightEl = ref<HTMLElement | null>(null)

if (process.client) {
  const intersectionCallback: IntersectionObserverCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100')
        entry.target.classList.remove('opacity-0')
        observer.unobserve(entry.target)
      }
    })
  }

// Create the Intersection Observer instance
  const intersectionObserver = new IntersectionObserver(intersectionCallback)

  onMounted(() => intersectionObserver.observe(backlightEl.value!))
}
</script>

<style scoped lang="scss">
.with-backlight > :not(.backlight) {
  position: relative;
  z-index: 1;
}
</style>
