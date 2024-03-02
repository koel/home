<template>
  <section class="jumbotron min-h-[600px] px-5 sm:px-16 lg:px-32 flex flex-col justify-center items-center text-center">
    <FadesIntoView>
      <div>
        <TypographyH1>
          Music streaming solution <span class="inline-block lg:inline">that works</span>.
        </TypographyH1>

        <p class="mt-6 text-lg tracking-tight text-gray-300">
          Open-source, self-hosted, super easy to use, and comes packed with features.<br>
          Koel is the music streaming solution that <em>actually</em> works.
        </p>

        <div class="mt-8 space-x-2">
          <a
            class="inline-block transition-all bg-pink-700 px-6 py-3 rounded-md hover:bg-pink-600"
            href="https://docs.koel.dev/#installation"
          >
            Get Started
          </a>
          <a
            class="inline-block transition-all px-6 py-3 rounded-md ring-1 ring-gray-100/10 ring-inset bg-opacity-10 bg-white hover:bg-opacity-20"
            href="#plus"
          >
            Koel Plus
          </a>
        </div>
      </div>
    </FadesIntoView>
  </section>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.jumbotron {
  height: calc(100vh - 65px); // 65px is the (estimated) height of the header
}
</style>
