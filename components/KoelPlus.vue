<template>
  <WithTopGlow class="-top-[780px]">
    <section id="plus" class="px-5 sm:px-16 lg:px-32 pt-24 border-t border-white/10 scroll-my-[96px]">
      <FadesIntoView>
        <h2 class="text-5xl mb-4 space-x-2 text-center">
          <span class="font-light inline-block">koel</span>
          <span class="font-bold bg-gradient-to-br from-purple-700 to-red-500 inline-block text-transparent bg-clip-text">
            Plus
          </span>
        </h2>

        <p class="text-center lg:px-32 text-balance">
          The Community version of Koel will always be free and open-source.<br>
          For premium enhancements to elevate your default installation, consider purchasing Koel Plus.<br>
          Pay <em>once</em> – no subscriptions, no recurrent fees — and enjoy all extra features, forever!
        </p>

        <ul class="grid grid-rows-4 lg:grid-rows-1 lg:grid-cols-4 gap-2 sm:gap-4 mt-10">
          <li v-for="feature in plusFeatures" :key="feature.title">
            <KoelPlusFeature>
              <template #icon>
                <img :src="feature.icon" :alt="feature.title" class="w-6 h-6 invert-[200]">
              </template>
              <template #title>{{ feature.title }}</template>
              {{ feature.description }}
            </KoelPlusFeature>
          </li>
        </ul>
      </FadesIntoView>

      <div class="mt-12 text-center">
        <a
          class="lemonsqueezy-button inline-block transition-all bg-pink-700 ring-inset hover:ring-1 hover:ring-pink-400 px-6 py-3 rounded-md hover:bg-pink-600"
          :href="purchasePlusUrl"
        >
          Buy Koel Plus
        </a>
      </div>
    </section>
  </WithTopGlow>
</template>

<script setup lang="ts">
import { plusFeatures, purchasePlusUrl } from '@/config'

onMounted(() => window.createLemonSqueezy()) // @ts-ignore
</script>
