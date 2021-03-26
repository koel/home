<template>
  <PageSection id="tech">
    <template #heading>The technologies of <span class="font-thin">koel</span></template>

    <ul class="flex place-content-center">
      <li title="Vue">
        <img src="~/assets/img/technologies/vue.svg" alt="Vue" height="170" width="auto">
      </li>
      <li title="Laravel">
        <img src="~/assets/img/technologies/laravel.svg" alt="Laravel" height="170" width="auto">
      </li>
      <li title="TypeScript">
        <img src="~/assets/img/technologies/typescript.svg" alt="TypeScript" height="170" width="auto">
      </li>
      <li title="Sass">
        <img src="~/assets/img/technologies/sass.svg" alt="Sass" height="170" width="auto">
      </li>
    </ul>
  </PageSection>
</template>

<script>
import PageSection from '~/components/PageSection'

export default {
  name: 'Technologies',
  components: { PageSection }
}
</script>

<style lang="scss" scoped>
li + li {
  margin-left: 4rem;
}

@media (max-device-width: 768px) {
  li + li {
    margin-left: 2rem;
  }

  img {
    height: 96px;
  }
}

@media (max-device-width: 414px) {
  li + li {
    margin-left: 1rem;
  }

  img {
    height: 48px;
  }
}
</style>
