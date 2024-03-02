<template>
  <div class="fixed left-0 top-[65px] overflow-hidden w-screen h-screen bg-[#0d0b17] z-10">
    <WithTopGlow>
      <nav class="text-base" @click="onMenuClick">
        <ul>
          <li>
            <a class="block px-5 py-3" href="#features">Features</a>
          </li>
          <li>
            <a class="block px-5 py-3" href="https://docs.koel.dev">Docs</a>
          </li>
          <li>
            <a class="block px-5 py-3" href="https://demo.koel.dev">Demo</a>
          </li>
          <li>
            <a class="block px-5 py-3" href="#plus">Koel Plus</a>
          </li>
          <li>
            <a class="block px-5 py-3" href="#mobile">Mobile Apps</a>
          </li>
          <li>
            <a class="block px-5 py-3" href="https://github.com/koel/koel">GitHub</a>
          </li>
        </ul>
      </nav>
    </WithTopGlow>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['close'])
const onMenuClick = () => emit('close')
</script>

<style scoped lang="scss">

</style>
