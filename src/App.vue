<template>
  <div id="app">
    <top-nav :links="links" :isOpen="topNavIsOpen">
		  <nav-icon id="nav-icon" :onToggle="this.toggleMainMenu"/>
    </top-nav>

    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TopNavigation from './components/navigation/TopNavigation.vue';
import NavIcon from './components/navigation/NavIcon.vue';

export default Vue.extend({
  components: {
    'top-nav': TopNavigation,
    'nav-icon': NavIcon,
  },
  data: () => ({
      topNavIsOpen: false,
      links: [
        {href: '/', class: 'link', text: 'Home'},
        {href: '/dashboard', class: 'link', text: 'Dashboard'},
        {href: '/about', class: 'link', text: 'About'},
      ],
    }),
    methods: {
		  toggleMainMenu(state: boolean) {
			  if (this !== undefined) {
				  this.topNavIsOpen = state;
			  }
		  },
	  },
  },
);
</script>

<style>
#app {
  text-align: center;
  height: 100vh;
  -webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>
