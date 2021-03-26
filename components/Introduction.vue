<template>
  <PageSection id="intro">
    <template #heading>The story of <span class="font-thin">koel</span></template>
    <p>
      My laptop went out of disk space – thank you, Parallels.<br>
      My phone had only 16GB of storage.<br>
      And I still had a good 40GB of mp3 stored in my external hard drive.<br>
      So I started looking out for an open source, or at least free, music streaming application that I can make use of.<br>
      I found a few. Alas, none was to my taste!<br>
      In my desperation I asked myself this question:<br>
      <em>&quot;Heck, why not just build one?&quot;</em><br>
      And so <span class="font-thin">koel</span> was born.
    </p>

    <div class="why">
      <p>And why &quot;koel&quot;?<br>
        It’s the name of a bird who sings non-stop near my place back in Singapore. He looks like this:</p>

      <img src="~/assets/img/logo.svg" class="logo" width="193" height="215" alt="koel's logo">
    </div>
  </PageSection>
</template>

<script>
import PageSection from '~/components/PageSection'

export default {
  name: 'Introduction',
  components: { PageSection }
}
</script>

<style lang="scss" scoped>
.why {
  margin-top: 2.25rem;
  font-size: .83rem;

  img.logo {
    margin-top: 1.7rem;
  }

  @media (max-device-width: 414px) {
    line-height: 1;
    margin-top: 1rem;
  }
}
</style>
