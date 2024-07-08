<template>
    <LayoutSideBySide>
      <template #text-pane>
        <TypographyH2>
          Built for <span class="text-red-500">speed</span>
        </TypographyH2>

        <div class="space-y-2">
          <p>
            Koel is fast. Like, <em>blazingly</em> fast.
            Embracing the latest web technologies, everything is optimized to respond and deliver in a split second
            — no matter how large your music collection is.
          </p>
        </div>
      </template>

      <template #media-pane>
        <WithBacklight :color="'rgb(255, 0, 242)'">
          <WithGradientBorder class="rounded-lg sm:rounded-xl shadow-lg" color="rgb(168 85 247)">
            <video
              autoplay
              loop
              muted
              playsinline
              poster="@/assets/videos/search-poster.webp"
              class="w-full h-full rounded-lg sm:rounded-xl border border-purple-900/30"
            >
              <source src="@/assets/videos/search.mp4" type="video/mp4" />
              <source src="@/assets/videos/search.webm" type="video/webm" />
            </video>
          </WithGradientBorder>
        </WithBacklight>
      </template>
    </LayoutSideBySide>
</template>

<script setup lang="ts">
</script>
