<template>
  <section id="mobile" class="px-5 sm:px-16 lg:px-32 scroll-my-[128px] max-w-screen-2xl mx-auto">
    <LayoutSideBySide :reversed="true">
      <template #text-pane>
        <TypographyH2>Mobile apps</TypographyH2>
        <div class="space-y-5">
          <p>
            Enjoy the native experience on your mobile device! Koel Player is available on both iOS and Android, and
            requires no extra setup. Just install, log in, and access your music wherever you may roam.
          </p>
          <p class="flex gap-2">
            <a :href="appStoreUrl" title="Download on the App Store">
              <img class="h-[54px]" src="@/assets/img/app-store.webp" alt="Download on the App Store badge">
            </a>
            <a :href="googlePlayUrl" title="Get it on Google Play">
              <img class="h-[54px]" src="@/assets/img/google-play.webp" alt="Download on Google Play badge">
            </a>
          </p>
        </div>
      </template>

      <template #media-pane>
        <div class="grid grid-cols-4 gap-2">
          <div class="relative">
            <MobileAppScreenshot :src="homeScreenshot" alt="Home screen" />
          </div>
          <div class="relative -top-[10%]">
            <MobileAppScreenshot :src="artistsScreenshot" alt="Artists screen" />
          </div>
          <div class="relative top-[10%]">
            <MobileAppScreenshot :src="nowPlayingScreenshot" alt="Now playing screen" />
          </div>
          <div class="relative">
            <MobileAppScreenshot :src="downloadedScreenshot" alt="Downloaded" />
          </div>
        </div>
      </template>
    </LayoutSideBySide>
  </section>
</template>

<script lang="ts" setup>
import { googlePlayUrl, appStoreUrl } from '@/config'

import homeScreenshot from '@/assets/img/mobile/home.webp'
import artistsScreenshot from '@/assets/img/mobile/artists.webp'
import nowPlayingScreenshot from '@/assets/img/mobile/now-playing.webp'
import downloadedScreenshot from '@/assets/img/mobile/downloaded.webp'
</script>
