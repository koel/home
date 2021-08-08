<template>
  <PageSection id="mobile">
    <template #heading>The mobile app for <span class="font-thin">koel</span></template>

    <img
      class="showcase"
      src="~/assets/img/showcase-mobile.png"
      alt="Mobile Screenshots"
      width="745"
      height="auto"
    >

    <div class="intro">
      <p>
        <a href="https://github.com/koel/player">Koel Player</a> is the official iOS and Android mobile app for
        <span class="font-thin">koel</span>.
        Connect to your <span class="font-thin">koel</span>-powered server and enjoy the music whenever you may roam,
        without the unfortunate <a href="https://docs.koel.dev/#mobile-support-and-limitation">limitations</a> of the
        mobile web version. <br>
        <a href="https://github.com/koel/player">Open-source</a>, of course.
      </p>
    </div>

    <p>
      <a
        class="download-btn"
        href="https://apps.apple.com/de/app/koel-player/id1576886982?l=en"
        title="Download on the App Store"
      >
        <img
          src="~/assets/img/app-store.png"
          alt="Download on the App Store badge"
          width="auto"
          height="60"
        />
      </a>
      <a
        class="download-btn"
        href="https://play.google.com/store/apps/details?id=phanan.koel.app"
        title="Get it on Google Play"
      >
        <img
          src="~/assets/img/google-play.png"
          alt="Download on Google Play badge"
          width="auto"
          height="60"
        />
      </a>
    </p>
  </PageSection>
</template>

<script>
import PageSection from '~/components/PageSection'

export default {
  name: 'MobileApp',
  components: { PageSection }
}
</script>

<style lang="scss" scoped>
.intro {
  margin: 2.5rem auto;
  max-width: 50rem;
}

a.download-btn::after {
  display: none;
}

img.showcase {
  max-width: calc(100vw - 8rem);
}

.download-btn + .download-btn {
  margin-left: .5rem;
}

@media screen and (max-width: 414px) {
  .download-btn {
    display: block;
    margin: 0 auto .5rem auto !important;
  }
}
</style>
