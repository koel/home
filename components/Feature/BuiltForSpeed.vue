<template>
    <LayoutSideBySide>
      <template #text-pane>
        <TypographyH2>
          Built for <span class="text-red-500">speed</span>
        </TypographyH2>

        <div class="space-y-2">
          <p>
            Embracing the latest web technologies, Koel is designed to be <em>blazingly fast</em>.
            Say goodbye to lag and hello to a snappy music experience, where everything is delivered in a split second —
            no matter how large your collection is.
          </p>
          <p>
            Seamless and effortless integration with full-text search engines like Algolia and Meilisearch makes
            finding your favorite song a joy, not a chore.
          </p>
        </div>
      </template>

      <template #media-pane>
        <WithBacklight :color="'rgb(255, 0, 242)'">
          <WithGradientBorder class="rounded-lg sm:rounded-xl shadow-lg" gradient-class="bg-purple-500">
            <video autoplay loop muted playsinline class="rounded-lg sm:rounded-xl border border-purple-900/30">
              <source src="@/assets/videos/search.webm" type="video/webm" />
            </video>
          </WithGradientBorder>
        </WithBacklight>
      </template>
    </LayoutSideBySide>
</template>

<script setup lang="ts">
</script>
