<template>
  <WithTopGlow>
    <section class="prose mx-auto py-12 w-screen h-screen flex flex-col items-center justify-center">
      <TypographyH2>Support</TypographyH2>
      <p>
        For help with Koel Player, please contact us at
        <a class="text-pink-500 hover:text-pink-400" :href="`mailto:${supportEmail}`">{{ supportEmail }}</a>.
      </p>
      <p>We typically respond within 1-2 business days.</p>
    </section>
  </WithTopGlow>
</template>

<script setup lang="ts">
import { supportEmail } from '@/config'
</script>
