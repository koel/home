<template>
  <a :href="sponsor.url" :title="`${sponsor.name} – ${sponsor.slogan}`">
    <img
      :alt="`${sponsor.name} logo`"
      :src="sponsor.logo"
      class="opacity-70 hover:opacity-100 h-[28px]"
      v-bind="$attrs"
    >
  </a>
</template>

<script setup lang="ts">
interface Sponsor {
  name: string
  url: string
  logo: string
  slogan: string
}

const sponsor = defineProps<Sponsor>()

defineOptions({
  inheritAttrs: false
})
</script>
