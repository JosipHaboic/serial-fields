<template>
	<div id="top-nav">
		<router-link v-for="link in links" :key="link.text" :to="link.href" :class="link.class" exact="true">
			{{ link.text }}
		</router-link>

		<nav-icon id="nav-icon" />
	</div>
</template>


<script lang="ts">
import Vue from 'vue'
import NavIcon from './NavIcon.vue';
// import "~@/styles/palette.css";

export default Vue.extend({
	name: 'TopNavigation',
	components: {
		'nav-icon': NavIcon,
	},
	props: {
		links: {
			type: Array,
			required: true,
		},
	}
})
</script>

<style scoped>
#nav-icon {
	display: none;
}

@media screen and (max-width: 425px) {
	#nav-icon {
		display: initial;
	}
}
</style>