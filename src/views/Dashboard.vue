<template>
	<div class="dashboard">
		<sidenav :links="sidenavLink" class="dashboard-nav" />
		<div class="dashboard-view">
			<router-view></router-view>
		</div>
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