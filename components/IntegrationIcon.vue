<template>
  <div class="flex-1 flex place-center w-[88px] sm:w-[101px] aspect-square p-5 rounded-lg border border-white/30 bg-white/10 motion-safe:transition-all motion-safe:hover:scale-110 motion-safe:hover:border-white">
    <img class="invert-[200]" :src="src" :alt="alt" />
  </div>
</template>

<script setup lang="ts">
defineProps<{ src: string, alt: string }>()
</script>
