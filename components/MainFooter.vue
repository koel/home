<template>
  <footer class="text-sm text-center px-5 sm:px-32 py-12 pb-12 border-t bg-black/10 border-gray-500/10 space-y-2">
    <p>
      &copy; 2015-now
      <a rel="author" class="text-pink-500 hover:text-pink-400" href="https://phanan.net">Phan An</a>
      – MIT License.
    </p>

    <p>Proudly sponsored by</p>

    <ul class="flex items-center place-content-center gap-2 sm:gap-4 pt-4">
      <li>
        <SponsorLogo
          :logo="keycdnLogo"
          class="h-[32px]"
          name="KeyCDN"
          slogan="Content Delivery Made Easy"
          url="https://www.keycdn.com/?a=11519"
        />
      </li>
      <li>
        <SponsorLogo
          :logo="doLogo"
          name="DigitalOcean"
          slogan="Cloud Infrastructure for Developers"
          url="https://www.digitalocean.com/?refcode=5860de5f25fe&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge"
        />
      </li>
      <li>
        <SponsorLogo
          :logo="whatTheDiffLogo"
          name="What The Diff"
          slogan="AI powered changelog generation"
          url="https://whatthediff.ai"
        />
      </li>
      <li>
        <SponsorLogo
          :logo="rayLogo"
          class="h-[22px]"
          name="Ray"
          slogan="Understand and fix bugs faster using Ray"
          url="https://myray.app"
        />
      </li>
    </ul>
  </footer>
</template>

<script setup lang="ts">
import keycdnLogo from '@/assets/img/sponsors/keycdn.svg'
import doLogo from '@/assets/img/sponsors/do.svg'
import whatTheDiffLogo from '@/assets/img/sponsors/what-the-diff.svg'
import rayLogo from '@/assets/img/sponsors/ray.svg'
</script>
