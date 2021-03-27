<template>
	<div class="dashboard">
		<icon-bar :iconLinks="iconBarLinks" />
		<!-- <div class="dashboard-status">
			<h2>Status</h2>
			<a>4 Serial ports detected</a>
			<a>3 Serial ports connected</a>
			<a>1 Serial ports disconnected</a>
		</div>
		<div class="dashboard-notifications">
			<h2>Notifications</h2>
			<p>GraphQL Backend Server Started!</p>
			<p>Error: Parsing JSON data</p>
			<p>Error: Parsing JSON data</p>
			<p>Info: Parsing JSON data</p>
		</div>
		<div class="dashboard-options">
			<h2>Options</h2>
			<div>Ports</div>
			<div>WiFi</div>
			<div>Data</div>
			<div>Settings</div>
		</div> -->
		<!-- <router-view></router-view> -->
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import IconBar from '../components/IconBar.vue';

export default Vue.extend({
	components: {
		'icon-bar': IconBar,
	},
	data: () => ({
		iconBarLinks: [
			{ href: '/dashboard/serial-ports', 	 icon: 'usb-interface', classes: 'icon',},
			{ href: '/dashboard/wi-fi',        	 icon: 'wi-fi', classes: 'icon',},
			{ href: '/dashboard/settings',       icon: 'settings', classes: 'icon',},
		],
	}),
});
</script>