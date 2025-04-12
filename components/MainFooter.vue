<template>
  <footer class="text-sm text-center px-5 sm:px-32 py-12 pb-12 border-t bg-black/10 border-gray-500/10 space-y-2">
    <p>
      &copy; 2015-now
      <a rel="author" class="text-pink-500 hover:text-pink-400" href="https://phanan.net">Phan An</a>
      – MIT License.
    </p>

    <p>Proudly sponsored by</p>

    <ul class="flex flex-wrap items-center place-content-center gap-1 sm:gap-2 pt-4">
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
          class="grayscale invert"
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
      <li>
        <SponsorLogo
          :logo="followerBoerse"
          class="h-[22px] grayscale hover:grayscale-0"
          name="Follower Börse"
          slogan="TikTok Views kaufen"
          url="https://follower-boerse.de/produkt/tiktok-views-kaufen/"
        />
      </li>
      <li>
        <SponsorLogo
          :logo="followHero"
          class="h-[32px]"
          name="Twitter Follower"
          slogan="Echte Twitter Follower kaufen"
          url="https://followhero.de/twitter-follower-kaufen/"
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
import followerBoerse from '@/assets/img/sponsors/follower-boerse.avif'
import followHero from '@/assets/img/sponsors/followhero.png'
</script>
