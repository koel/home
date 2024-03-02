<template>
  <LayoutSideBySide :reversed="true">
    <template #text-pane>
      <TypographyH2>
        <span class="block sm:inline">
          <span class="text-amber-500">Modern</span> and
          <span class="text-green-500">familiar</span>
        </span>
        design
      </TypographyH2>

      <p>
        With an interface inspired by Spotify, you’ll feel right at home —
        everything is right where you’d expect it to be.
        Context menus? Checked. Drag-n-drop? Checked. Keyboard shortcuts? Checked.
        And if you’re in the mood for some change, your next favorite theme is just one click away.
      </p>
    </template>

    <template #media-pane>
      <WithBacklight :color="'rgb(0, 208, 227)'">
        <WithGradientBorder class="rounded-lg sm:rounded-xl" gradient-class="bg-pink-500">
          <div class="flex relative -space-x-[100%]">
            <img
              v-for="theme in themes"
              :key="theme.name"
              :alt="`Theme - ${theme.name}`"
              :src="theme.src"
              class="theme drop-shadow-md rounded-lg sm:rounded-xl shadow-lg border border-pink-500/30 transition-all motion-reduce:transition-none duration-500"
            />
          </div>
        </WithGradientBorder>
      </WithBacklight>
    </template>
  </LayoutSideBySide>
</template>

<script setup lang="ts">
import themeClassic from '@/assets/img/features/theme-classic.webp'
import themeDawn from '@/assets/img/features/theme-dawn.webp'
import themeJungle from '@/assets/img/features/theme-jungle.webp'
import themeRose from '@/assets/img/features/theme-rose.webp'

interface Theme {
  src: string
  name: string
}

const themes: Theme[] = [
  { src: themeClassic, name: 'Classic' },
  { src: themeDawn, name: 'Dawn' },
  { src: themeJungle, name: 'Jungle' },
  { src: themeRose, name: 'Rose' },
]
</script>

<style lang="scss" scoped>
.theme {
  &:hover {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%) !important;
  }

  &:hover ~ & {
    clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%) !important;
  }

  &:has(~ &:hover) {
    clip-path: polygon(0 0, 0 0, 0 100%, 0 100%) !important;
  }
}

.theme:nth-child(4) {
  clip-path: polygon(50% 0, 100% 0, 100% 100%, 25% 100%);
}

.theme:nth-child(3) {
  clip-path: polygon(calc(100% / 3) 0, calc(50% + 1px) 0, calc(25% + 1px) 100%, calc(100% / 12) 100%);
}

.theme:nth-child(2) {
  clip-path: polygon(calc(100% / 6) 0, calc(100% / 3 + 1px) 0, calc(100% / 12 + 1px) 100%, calc(100% / -12) 100%);
}

.theme:nth-child(1) {
  clip-path: polygon(0 0, calc(100% / 6 + 1px) 0, calc(100% / -12 + 1px) 100%, -25% 100%);
}
</style>
