<template>
	<div id="top-nav-container">

		<div id="top-nav" v-bind:class="{'top-nav--closed': this.navOpen}">
			<router-link v-for="link in links" :key="link.text" :to="link.href" :class="link.class" :exact=true>
				{{ link.text }}
			</router-link>

			<nav-icon id="nav-icon" :onToggle="this.toggle"/>
		</div>
	</div>
</template>


<script>
import Vue from 'vue'
import NavIcon from './NavIcon.vue';

export default Vue.extend({
	name: 'TopNavigation',
	components: {
		'nav-icon': NavIcon,
	},
	data: () => ({
		navOpen: false,
	}),
	props: {
		links: {
			type: Array,
			required: true,
		},
	},
	methods: {
		toggle(state) {
			if (this !== undefined) {
				this.navOpen = state;
			}
		}
	}
});
</script>

<style scoped>
#nav-icon {
	display: none;
}

.top-nav--closed {
	height: 0px;
	padding: 0 0 0 0;
}

@media screen and (max-width: 425px) {
	#nav-icon {
		display: initial;
	}

	.top-nav--closed {
		height: 0px;
		padding: 0 0 0 0;
	}
}
</style>