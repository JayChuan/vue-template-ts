<template>
  <div id="app">
    <layout>
      <template v-slot:main>
        <router-view/>
      </template>
    </layout>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Layout from '@/components/public/Layout.vue'
@Component({
  components: {
    Layout
  }
})
export default class App extends Vue{
  // created() {
  // }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
