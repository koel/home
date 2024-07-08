<template>
  <section class="jumbotron min-h-[720px] px-5 sm:px-16 lg:px-32 flex flex-col justify-center items-center text-center">
    <FadesIntoView>
      <div>
        <div class="logo-wrapper relative w-40 sm:w-48 aspect-square mx-auto mb-8 sm:mb-12 rounded-2xl">
          <div class="bg overflow-hidden p-px overflow-hidden rounded-2xl">
            <img
              alt="Koel logo"
              class="p-4 bg-[#0d0b17]/90 overflow-hidden rounded-2xl backdrop-blur-md"
              loading="eager"
              src="../assets/img/logo.svg"
            >
          </div>
        </div>

        <TypographyH1>
          Music streaming solution <span class="inline-block lg:inline">that works</span>.
        </TypographyH1>

        <p class="mt-6 text-lg tracking-tight text-gray-300">
          Host and stream your own music with ease.<br>
          Open-source, modern, snappy, and comes packed with extensive features,<br>
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

  @keyframes logo-neon {
    0% {
      transform: rotate(0deg) scale(.75);
    }

    50% {
      transform: rotate(180deg) scale(.85);
    }

    100% {
      transform: rotate(360deg) scale(.75);
    }
  }

  .logo-wrapper {
    .bg::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      overflow: hidden;
      background: conic-gradient(from 180deg at 50% 50%, rgb(58 91 188) 0deg, rgb(168, 83, 186) 180deg, rgb(130 0 42) 1turn);
      filter: blur(30px);
      z-index: 0;
    }

    img {
      position: relative;
      z-index: 1;
    }

    > * {
      z-index: 1;
      position: relative;
    }

    &::before {
      transform: translate3d(0, 0, 0);
      content: '';
      position: absolute;
      top: -10%;
      left: -10%;
      width: 120%;
      height: 120%;
      border-radius: 35%;
      animation: logo-neon 15s linear infinite;
      z-index: 0;
      background: conic-gradient(from 180deg at 50% 50%, rgb(58 91 188) 0deg, rgb(168, 83, 186) 180deg, rgb(130 0 42) 1turn);
      filter: blur(30px);

      @media (prefers-reduced-motion: reduce) {
        animation: none;
      }
    }
  }
}
</style>
