<template>
  <div id="app">
    <top-nav :links="links"></top-nav>
    <router-view/>
  </div>
</template>

<script lang="ts">
import TopNavigation from './components/navigation/TopNavigation.vue';
import Vue from 'vue'
export default Vue.extend({
  components: {
    'top-nav': TopNavigation,
  },
  data: () => {
    return {
      links: [
        {href: '/', class: 'link', text: 'Home'},
        {href: '/dashboard', class: 'link', text: 'Dashboard'},
        {href: '/about', class: 'link', text: 'About'},
      ]
    }
  }
})
</script>

<style>
#app {
  text-align: center;
  height: 100vh;
  -webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>
