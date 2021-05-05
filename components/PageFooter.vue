<template>
  <footer class="z-0">
    <p>Developed and maintained by <a rel="author" href="https://phanan.net">Phan An</a>.</p>
    <p>Proudly sponsored by</p>
    <ul class="sponsors flex place-content-center">
      <li>
        <a class="render" href="https://render.com" title="Render - Cloud Hosting for Developers">
          <img alt="Render logo" src="~/assets/img/sponsors/render.svg" height="28">
        </a>
      </li>
      <li>
        <a class="exoscale" href="https://www.exoscale.ch" title="Exoscale: Swiss cloud hosting">
          <img alt="Exoscale logo" src="~/assets/img/sponsors/exoscale.svg" height="32" width="auto">
        </a>
      </li>
      <li>
        <a class="keycdn" href="https://www.keycdn.com/?a=11519" title="KeyCDN - Content Delivery Made Easy">
          <img alt="KeyCDN logo" src="~/assets/img/sponsors/keycdn.svg" height="32">
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

    img {
      filter: brightness(10);
    }

    @media (max-device-width: 768px) {
      flex-direction: column;

      li + li {
        margin-left: 0;
        margin-top: .75rem;
      }
    }
  }
}
</style>
