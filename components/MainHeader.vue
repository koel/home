<template>
  <header ref="headerEl"
          class="px-4 sm:px-8 py-4 sticky top-0 z-20 w-full backdrop-blur-md transform-gpu border-b border-gray-500/20 bg-black/40">
    <div class="flex items-center justify-between text-sm leading-6">
      <a href="/" class="flex items-center gap-2 text-2xl">
        <img src="@/assets/img/logo.svg" alt="Koel" class="h-8" />
        <span class="tracking-wide font-light">koel</span>
      </a>

      <div class="items-center hidden sm:flex">
        <nav class="pr-8">
          <ul class="flex items-center gap-x-8">
            <li>
              <a class="opacity-70 hover:opacity-100" href="#features">Features</a>
            </li>
            <li>
              <a class="opacity-70 hover:opacity-100" href="https://docs.koel.dev">Docs</a>
            </li>
            <li>
              <a class="opacity-70 hover:opacity-100" href="https://demo.koel.dev">Demo</a>
            </li>
            <li>
              <a class="opacity-70 hover:opacity-100" href="#plus">Koel Plus</a>
            </li>
            <li>
              <a class="opacity-70 hover:opacity-100" href="#mobile">Mobile Apps</a>
            </li>
          </ul>
        </nav>
        <div class="pl-8 border-l border-gray-100/10">
          <a class="opacity-80 hover:opacity-100" href="https://github.com/koel/koel">
            <svg viewBox="0 0 16 16" class="w-5 h-5" fill="currentColor" aria-hidden="true">
              <path
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
          </a>
        </div>
      </div>

      <div class="flex flex-1 justify-end invert-[200] sm:hidden relative">
        <button class="p-[7px]" @click.prevent="toggleMobileMenu">
          <svg v-if="showingMobileMenu" class="h-[18px]" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
            <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path
              d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
          <svg v-else class="h-[18px]" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
            <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path
              d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </button>
      </div>

      <MobileMenu v-if="showingMobileMenu" />
    </div>
  </header>
</template>

<script setup lang="ts">
const headerEl = ref<HTMLElement | null>(null)
const showingMobileMenu = ref(false)

const toggleMobileMenu = () => (showingMobileMenu.value = !showingMobileMenu.value)

watch(showingMobileMenu, showing => {
  headerEl.value?.classList.toggle('backdrop-blur-md')
  headerEl.value?.classList.toggle('bg-black/40')
  headerEl.value?.classList.toggle('bg-[#0d0b17]')
  document.body.style.overflow = showing ? 'hidden' : ''
})
</script>
