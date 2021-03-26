<template>
  <PageSection id="req">
    <template #heading>The requirements of <span class="font-thin">koel</span></template>

    <div class="server">
      The server part of <span class="font-thin">koel</span> requires a server (duh) that can run
      <a href="https://laravel.com">Laravel</a>.
    </div>

    <div class="client">
      <p>For the client part, <span class="font-thin">koel</span> doesn’t aim to work for everyone.</p>
      <p>In order to do what it’s created to do and do it best,
        <span class="font-thin">koel</span> embraces some of the newer web technologies<br>
        – those only supported in modern browsers.
      </p>

      <ul class="browsers flex place-content-center">
        <li><img src="~/assets/img/browsers/chrome.svg" alt="Google Chrome" height="70" width="auto"></li>
        <li><img src="~/assets/img/browsers/edge.svg" alt="Microsoft Edge" height="70" width="auto"></li>
        <li><img src="~/assets/img/browsers/firefox.svg" alt="Mozilla Firefox" height="70" width="auto"></li>
        <li><img src="~/assets/img/browsers/opera.svg" alt="Opera" height="70" width="auto"></li>
        <li><img src="~/assets/img/browsers/safari.svg" alt="Safari" height="70" width="auto"></li>
      </ul>

      <p>
        &quot;How do I tell if my browser is, uh, modern enough?&quot; you ask.<br>
        Well, if
        <del>you weren’t using a modern browser, you wouldn’t be here at first place</del>
        <br>
        this website doesn’t look broken to you, chances are it is.
      </p>
    </div>
  </PageSection>
</template>

<script>
import PageSection from '~/components/PageSection'

export default {
  name: 'Requirements',
  components: { PageSection }
}
</script>

<style lang="scss" scoped>
.server {
  margin-bottom: 1.4rem;
}

ul.browsers {
  margin: 1.4rem 0;

  li + li {
    margin-left: .5rem;
  }
}

del {
  opacity: .6;
}

@media (max-device-width: 414px) {
  ul.browsers {
    li + li {
      margin-left: .5rem;
    }

    img {
      height: 48px;
    }
  }
}
</style>
