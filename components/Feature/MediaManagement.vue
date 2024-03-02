<template>
  <LayoutSideBySide :reversed="true">
    <template #text-pane>
      <TypographyH2>
        <span class="text-yellow-500 block sm:inline">Robust</span> media management
      </TypographyH2>

      <p>
        Upload, delete, and edit metadata like title, artist, album, track, disc, and so on
        with an uncluttered and intuitive interface.
        Compilation albums and album arts? No problem.
        Playlist folders and cover images? Sure.
        Genre categorization? Already there.
        With Koel, your music library is exactly what it should be: <em>yours</em>.
      </p>
    </template>

    <template #media-pane>
      <WithBacklight :color="'rgb(72, 255, 0)'">
        <WithGradientBorder class="rounded-lg sm:rounded-xl shadow-lg" gradient-class="bg-green-500">
          <img
            alt="Edit song"
            class="rounded-lg sm:rounded-xl border border-green-500/20"
            src="@/assets/img/features/edit-song.webp"
          >
        </WithGradientBorder>
      </WithBacklight>
    </template>
  </LayoutSideBySide>
</template>

<script setup lang="ts">
</script>
