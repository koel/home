<template>
  <section class="jumbotron flex">
    <h1 class="font-thin">koel</h1>
    <p class="tagline">
      <span>a personal music streaming server</span>
      <span class="note">that works</span>
    </p>

    <nav>
      <ul>
        <li><a class="blue" href="#intro">Introduction</a></li>
        <li><a class="green" href="#req">Requirements</a></li>
        <li><a class="pink" href="https://docs.koel.dev">Installation &amp; Documentation</a></li>
        <li><a class="yellow" href="https://demo.koel.dev">Demo</a></li>
        <li><a class="white" href="https://github.com/koel/koel">GitHub</a></li>
      </ul>
    </nav>
  </section>
</template>

<script>
export default {
  name: "Jumbotron"
}
</script>

<style lang="scss" scoped>
@import "assets/sass/_mixins.scss";

section {
  @include section-padding;

  background: linear-gradient(135deg, rgba(64, 59, 97, 1) 0%, rgba(57, 52, 86, 1) 70%, rgba(56, 52, 85, 1) 100%);
  text-align: left;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  overflow: hidden;

  > h1 {
    font-size: 4rem;
    letter-spacing: 15px;
    color: var(--white);
    margin-bottom: 2rem;
  }

  .tagline {
    color: var(--white);
    font-size: 1.3rem;

    span:first-child {
      background-color: var(--black);
      display: inline-block;
      padding: .6rem 2rem .6rem 1rem;

      &::after {
        content: "*";
        color: var(--orange);
        margin-left: .5rem;
      }
    }

    .note {
      display: block;
      padding-left: 20px;
      margin: .5rem 0 2.25rem;
      font-size: .83rem;

      &::before {
        content: "*";
        color: var(--orange);
        margin-right: .5rem;
      }
    }
  }

  nav a {
    display: inline-block;
    width: auto;
    color: var(--white);
    margin-top: 7px;
    line-height: 40px;
    padding: 0 35px 0 20px;
    transition: padding-right .3s ease-out;

    &:hover {
      padding-right: 120px;
      background-color: var(--orange);
      border-bottom: 0;
    }

    &.pink {
      background: var(--pink);
    }

    &.green {
      background: var(--green);
    }

    &.yellow {
      background: var(--yellow);
      color: #333;
    }

    &.white {
      background: var(--white);
      color: #333;
    }

    &.blue {
      background: var(--blue);
    }

    &.orange {
      background: var(--orange);
    }
  }

  &::before {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: url('assets/img/showcase.png') 650px bottom no-repeat;
    background-size: 1221px;
    pointer-events: none;
  }

  @media (max-device-width: 1024px) {
    &::before {
      background-position: 450px bottom;
    }
  }

  @media (max-device-width: 768px) {
    &::before {
      background-position: 300px bottom;
    }
  }

  @media (max-device-width: 414px) {
    .tagline {
      span {
        font-size: 1rem;
        padding: .75rem 1.5rem;
      }
    }

    &::before {
      display: none;
    }
  }
}
</style>
