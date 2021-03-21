<template>
	<div class="dashboard">
		<sidenav :links="sidenavLinks" class="dashboard-nav" />
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
			{ class: 'link', href: '/dashboard/serial-ports', text: 'Serial Ports'},
			{ class: 'link', href: '/dashboard/serial-ports', text: 'Graphs'},
			{ class: 'link', href: '/dashboard/serial-ports', text: 'Data'},
			{ class: 'link', href: '/dashboard/serial-ports', text: 'Settings'},
		]
	})
})
</script>