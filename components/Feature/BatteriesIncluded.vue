<template>
  <div class="flex flex-col flex-col-reverse lg:flex-col items-center relative">
    <FadesIntoView>
      <div class="flex flex-col lg:w-3/5 lg:flex-col mt-12 sm:mt-0">
        <TypographyH2>
          <span class="text-green-500">Batteries</span>-included
        </TypographyH2>

        <p>
          Apart from standard audio streaming functionalities, Koel includes out-of-the-box a plethora of additional
          features, including transparent FLAC support, cross-device queue synchronization, favorites, history tracking,
          smart playlists,
          multi-user support, equalizer settings, visualizers, transcoding, and so on.
        </p>
      </div>
    </FadesIntoView>

    <div class="screenshots w-full mt-12 space-y-4">
      <div class="flex items-end gap-1 sm:gap-4">
        <div class="w-[20%]">
          <WithGradientBorder class="rounded sm:rounded-lg shadow-lg" gradient-class="bg-amber-500" border-width="1.5px">
            <img src="@/assets/img/features/equalizer.webp" alt="Equalizer" class="rounded sm:rounded-lg">
          </WithGradientBorder>
        </div>
        <div class="flex-1">
          <WithGradientBorder class="rounded sm:rounded-lg shadow-lg" gradient-class="bg-amber-500" border-width="1.5px">
            <img src="@/assets/img/features/artists.webp" alt="Artists" class="rounded sm:rounded-lg">
          </WithGradientBorder>
        </div>
        <div class="w-[30%]">
          <WithGradientBorder class="rounded sm:rounded-lg shadow-lg" gradient-class="bg-amber-500" border-width="1.5px">
            <img src="@/assets/img/features/visualizer.webp" alt="Visualizer" class="rounded sm:rounded-lg">
          </WithGradientBorder>
        </div>
      </div>
      <div class="px-60 hidden sm:flex items-start gap-4">
        <div class="flex-1">
          <WithGradientBorder class="rounded-lg shadow-lg" gradient-class="bg-amber-500" border-width="1.5px">
            <img src="@/assets/img/features/home.webp" alt="Koel's home page" class="rounded-lg">
          </WithGradientBorder>
        </div>
        <div class="w-[35%]">
          <WithGradientBorder class="rounded-lg shadow-lg" gradient-class="bg-amber-500" border-width="1.5px">
            <img src="@/assets/img/features/users.webp" alt="Users" class="rounded-lg">
          </WithGradientBorder>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.screenshots {
  mask-image: linear-gradient(white, white, transparent);
}
</style>
