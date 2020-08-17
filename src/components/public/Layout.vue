<template>
  <div class="layout">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <section class="main">
      <slot name="main"></slot>
    </section>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'

export default class Layout extends Vue {

}
</script>

<style>

</style>