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
import Vue from 'vue';
export default Vue.extend({
	props: {
		onToggle: {
			type: Function,
			required: false,
		},
	},
	data: () => ({
			menuOpen: false, // false for closed, true for open
	}),
	methods: {
		toggle() {
			if (this !== undefined) {
				this.menuOpen = !(this.menuOpen);
				this.$props.onToggle(this.menuOpen);
			}
		},
	},
});
</script>

<style scoped>
	.menu-icon {
	  display: inline-block;
	  cursor: pointer;
	}

	.menu-icon-bar-1, .menu-icon-bar-2, .menu-icon-bar-3 {
	  width: 35px;
	  height: 2px;
	  background-color: #ffffff;
	  margin: 6px 0;
	  transition: 0.25s;
	}

	.menu-icon--closed .menu-icon-bar-1 {
		background-color: #ffffff;
		margin: 0px 0;
		transition: 0.25s;
	  /* -webkit-transform: rotate(-45deg) translate(-9px, 6px) ; */
	  /* transform: rotate(-45deg) translate(-9px, 6px) ; */
	}

	.menu-icon--closed .menu-icon-bar-2 {
		background-color: #ffffff;
		margin: 0px 0;
	  	transition: 0.25s;
	  /* opacity: 0; */
	}

	.menu-icon--closed .menu-icon-bar-3 {
		background-color: #ffffff;
		margin: 0px 0;
	  	transition: 0.25s;
	  /* -webkit-transform: rotate(45deg) translate(-8px, -8px); */
	  /* transform: rotate(45deg) translate(-8px, -8px); */
	}

	@media screen and (max-width: 425px) {
		.menu-icon {
			margin: 12px 0 0 0;
		}
	}
</style>