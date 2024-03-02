<template>
  <div ref="el" :style="{ padding: props.borderWidth }" class="relative overflow-hidden" v-bind="$attrs">
    <div class="gradient absolute motion-reduce:hidden top-0 left-0 w-full h-full" />
    <div class="relative h-full">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { usePointer, useThrottleFn } from '@vueuse/core'

const props = withDefaults(defineProps<{
  color?: string
  borderWidth?: string
}>(), {
  color: 'rgb(236 72 153)',
  borderWidth: '1px',
})

defineOptions({
  inheritAttrs: false,
})

const color = toRef(props, 'color')
const el = ref<HTMLElement | null>(null)

const pointer = reactive(usePointer())
const x = ref('0')
const y = ref('0')
const size = ref('0')

const trackPointer = useThrottleFn(() => {
  const rect = el.value?.getBoundingClientRect()
  if (!rect) return

  x.value = `${pointer.x - rect.left}px`
  y.value = `${pointer.y - rect.top}px`
  size.value = `${Math.max(rect.width, rect.height) * 80 / 100}px`
}, 100)

watch(pointer, trackPointer, { deep: true, immediate: true })
</script>

<style scoped lang="scss">
.gradient {
  background: radial-gradient(v-bind(size) circle at v-bind(x) v-bind(y), v-bind(color), transparent 100%);
  will-change: background;
}
</style>
