<template>
  <div ref="el" :style="{ padding: borderWidth }" class="relative overflow-hidden" v-bind="$attrs">
    <div
      :class="gradientClass"
      :style="{ transform }"
      class="blur-2xl absolute motion-reduce:hidden top-0 left-0 rounded-full w-full h-full transform-gpu"
    />
    <div class="relative h-full">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePointer, useThrottleFn } from '@vueuse/core'

const props = withDefaults(defineProps<{ gradientClass?: string, borderWidth?: string }>(), {
  gradientClass: 'bg-pink-500',
  borderWidth: '1px',
})

defineOptions({
  inheritAttrs: false,
})

const gradientClass = toRef(props, 'gradientClass')

const transform = ref('translate(-100%, -100%)')
const pointer = reactive(usePointer())

const el = ref<HTMLElement | null>(null)

const trackPointer = useThrottleFn(() => {
  const rect = el.value?.getBoundingClientRect()
  if (!rect) return

  const x = pointer.x - rect.left
  const y = pointer.y - rect.top

  transform.value = `translate(${x - rect.width / 2}px, ${y - rect.height / 2}px)`
}, 100)

watch(pointer, trackPointer, { deep: true, immediate: true })
</script>
