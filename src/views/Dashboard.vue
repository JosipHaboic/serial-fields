<template>
	<div class="container">
		<sidenav :links="sidenavLink" />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import SideNav from '../components/navigation/SideNav.vue';

export default Vue.extend({
	components: {
		'sidenav': SideNav,
	},
	data: () => ({
		sidenavLinks: [
		]
	})
})
</script>