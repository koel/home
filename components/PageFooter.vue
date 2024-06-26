<template>
  <footer class="z-0">
    <p>Developed and maintained by <a rel="author" href="https://phanan.net">Phan An</a>.</p>
    <p>Proudly sponsored by</p>
    <ul class="sponsors flex place-content-center align-items-center">
      <li>
        <a class="keycdn" href="https://www.keycdn.com/?a=11519" title="KeyCDN - Content Delivery Made Easy">
          <img alt="KeyCDN logo" src="~/assets/img/sponsors/keycdn.svg" height="32"/>
        </a>
      </li>
      <li>
        <a class="do" href="https://www.digitalocean.com/?refcode=5860de5f25fe&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge" title="DigitalOcean">
          <img alt="DigitalOcean logo" src="~/assets/img/sponsors/do.svg" height="28"/>
        </a>
      </li>
      <li>
        <a class="whatthediff" href="https://whatthediff.ai" title="What The Diff - AI powered changelog generation">
          <img alt="What The Diff logo" src="~/assets/img/sponsors/what-the-diff.svg" height="22"/>
        </a>
      </li>
    </ul>
      <li>
        <a class="ray" href="https://myray.app" title="Understand and fix bugs faster with Ray">
          <img alt="Ray logo" src="~/assets/img/sponsors/ray.svg" height="22"/>
        </a>
      </li>
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
      filter: grayscale(1) invert(1);
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
