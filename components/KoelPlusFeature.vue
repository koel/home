<template>
  <WithGradientBorder class="rounded-xl h-full" border-width="1.5px">
    <div class="bg-[#30265a]/90 flex lg:flex-col gap-4 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-indigo-500/30 h-full">
      <div>
        <span
          class="block h-12 aspect-square shadow p-0.5 rounded-full bg-gradient-to-tr from-pink-400 via-purple-600 to-red-300">
          <span class="block w-full aspect-square bg-pink-700 rounded-full flex items-center justify-center">
            <slot name="icon"></slot>
          </span>
        </span>
      </div>

      <div>
        <h3 class="pb-2 text-lg font-normal space-y-4 relative">
        <span class="block">
          <slot name="title"></slot>
        </span>
        </h3>
        <p class="text-sm tracking-wide relative">
          <slot></slot>
        </p>
      </div>
    </div>
  </WithGradientBorder>
</template>
<script setup lang="ts">
</script>
