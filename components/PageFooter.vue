<template>
  <footer class="z-0">
    <p>Developed and maintained by <a rel="author" href="https://phanan.net">Phan An</a>.</p>
    <p>Hosting and CDN proudly sponsored by</p>
    <ul class="sponsors flex place-content-center">
      <li>
        <a class="exoscale" href="https://www.exoscale.ch" title="Exoscale: Swiss cloud hosting">
          <img alt="Exoscale" src="~/assets/img/sponsors/exoscale.svg" height="32" width="auto">
        </a>
      </li>
      <li>
        <a class="keycdn" href="https://www.keycdn.com/?a=11519" title="KeyCDN - Content Delivery Made Easy">
          <img alt="KeyCDN" src="https://logos.keycdn.com/keycdn-logo-white.svg" height="32">
        </a>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: 'PageFooter'
}
</script>

<style lang="scss" scoped>
@import "assets/sass/_mixins.scss";

footer {
  @include section-padding;

  background: var(--purple);
  color: var(--white);
  font-size: .83rem;

  a {
    color: var(--orange);

    &::after {
      display: none;
    }
  }

  .sponsors {
    margin-top: 1rem;

    li + li {
      margin-left: 1rem;
    }
  }
}
</style>
