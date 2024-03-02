<template>
  <div ref="el" class="opacity-0 transform-gpu relative">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'

const el = ref<HTMLElement | null>(null)

if (process.client) {
  const intersectionCallback: IntersectionObserverCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade')
        entry.target.classList.remove('opacity-0')
        observer.unobserve(entry.target)
      }
    })
  }

// Create the Intersection Observer instance
  const intersectionObserver = new IntersectionObserver(intersectionCallback)

  onMounted(() => intersectionObserver.observe(el.value!))
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
