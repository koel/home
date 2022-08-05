<template>
  <PageSection id="install">
    <template #heading>The installation and documentation of <span class="font-thin">koel</span></template>
    <div class="console-wrap">
      <div class="console">
        <p><span class="prog">unzip</span> koel-latest.zip</p>
        <p><span class="prog">cd</span> koel</p>
        <p>
          <span class="prog">php</span>
          <span class="cmd">artisan</span> koel:init
          <span class="arg">--no-assets</span>
        </p>
        <p><span class="prog">php</span> <span class="cmd">artisan</span> serve</p>
        <p><span class="cmt">Server started on http://localhost:8000/</span></p>
      </div>
      <p class="muted note">
        Visit <a href="https://docs.koel.dev/#/?id=installation">documentation</a> for detailed instructions.
      </p>
    </div>

    <p>
      For more installation guides, documentation, and troubleshooting, head over to the repo’s
      <a href="https://docs.koel.dev">Documentation</a>
      and <a href="https://github.com/koel/koel/releases">Releases</a>.<br>
      While you’re there, make sure to fork and contribute!
    </p>
  </PageSection>
</template>

<script>
import PageSection from '~/components/PageSection'

export default {
  name: 'Installation',
  components: { PageSection }
}
</script>

<style lang="scss" scoped>
.console-wrap {
  width: 680px;
  margin: 50px auto;
}

.console {
  background-color: var(--purple);
  font: 15px/25px Consolas, Monaco, monospace;
  text-align: left;
  padding: 40px 35px;
  color: var(--white);
  overflow: hidden;

  p {
    &::before {
      content: '$';
      margin-right: 14px;
      opacity: .2;
    }
  }

  .prog {
    color: var(--orange);
  }

  .arg {
    color: var(--cyan);
  }

  .cmd {
    color: var(--yellow);
  }

  .cmt {
    color: var(--green);
  }

  &::after {
    content: " ";
    position: absolute;
    width: 200px;
    height: 350px;
    background: linear-gradient(to bottom,  rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);
    top: -41px;
    right: -89px;
    transform: rotate(30deg);
    opacity: .4;
    pointer-events: none;
  }
}

.note {
  font-size: .7rem;
  text-align: right;
  margin-top: 5px;
  opacity: .7;
}

@media (max-device-width: 414px) {
  .console-wrap {
    width: 100%;
    margin: 24px 0;
  }

  .console {
    padding: 1rem .8rem;
    font-size: .9rem;
    line-height: 1;
    overflow: auto;

    p {
      white-space: nowrap;
    }

    &::after {
      display: none;
    }
  }

  .note {
    line-height: 1.6;
  }
}
</style>
