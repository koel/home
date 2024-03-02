<template>
  <div class="flex gap-12 items-center relative flex-col-reverse" :class="reversedClass">
    <div class="flex flex-col justify-center gap-4 flex-1 relative">
      <FadesIntoView>
        <slot name="text-pane"></slot>
      </FadesIntoView>
    </div>
    <div class="flex-1 relative">
      <slot name="media-pane"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ reversed?: boolean }>(), {
  reversed: false,
})

const reversedClass = props.reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
</script>
