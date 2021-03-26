<template>
  <div class="container">
    <Jumbotron/>
    <Introduction/>
    <Technologies/>
    <Requirements/>
    <Installation/>
    <PageFooter/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Jumbotron from '~/components/Jumbotron.vue'
import Introduction from '~/components/Introduction.vue'
import Requirements from '~/components/Requirements.vue'
import Technologies from '~/components/Technologies.vue'
import Installation from '~/components/Installation.vue'
import PageFooter from '~/components/PageFooter.vue'

export default Vue.extend({
  components: { PageFooter, Installation, Technologies, Requirements, Introduction, Jumbotron }
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  text-align: center;
}
</style>
