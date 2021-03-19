<template>
	<div class="menu-icon"
		@click="toggle()"
		v-bind:class="{'menu-icon--closed': menuOpen}">

		<div class="menu-icon-bar-1"></div>
		<div class="menu-icon-bar-2"></div>
		<div class="menu-icon-bar-3"></div>
	</div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
	name: 'MenuIcon',
	data: () => {
		return {
			menuOpen: false, // false for closed, true for open
		}
	},
	methods: {
		toggle: () => {
			if (this !== undefined) {
				this.menuOpen = !(this.menuOpen);
			}
		}
	}
})
</script>

<style scoped>
	.menu-icon {
	  display: inline-block;
	  cursor: pointer;
	}

	.menu-icon-bar-1, .menu-icon-bar-2, .menu-icon-bar-3 {
	  width: 35px;
	  height: 5px;
	  background-color: var(--color-0-0);
	  margin: 6px 0;
	  transition: 0.4s;
	}

	/* Rotate first bar */
	.menu-icon--closed .menu-icon-bar-1 {
	  -webkit-transform: rotate(-45deg) translate(-9px, 6px) ;
	  transform: rotate(-45deg) translate(-9px, 6px) ;
	}

	/* Fade out the second bar */
	.menu-icon--closed .menu-icon-bar-2 {
	  opacity: 0;
	}

	/* Rotate last bar */
	.menu-icon--closed .menu-icon-bar-3 {
	  -webkit-transform: rotate(45deg) translate(-8px, -8px) ;
	  transform: rotate(45deg) translate(-8px, -8px) ;
	}
</style>