<template>
  <section :id="id" class="z-0">
    <h1>
      <slot name="heading"></slot>
    </h1>
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'PageSection',
  props: {
    id: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/sass/_mixins.scss";

section {
  @include section-padding;

  &:nth-child(even) {
    background-color: var(--primary-bgr);
  }

  &:nth-child(odd) {
    background-color: var(--alternate-bgr);
  }

  > h1 {
    font-size: 2rem;
    margin-bottom: 2.8rem;

    @media (max-device-width: 414px) {
      line-height: 1.2;
      margin-bottom: 1.4rem;
    }
  }
}
</style>
