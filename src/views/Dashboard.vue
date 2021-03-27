<template>
	<div class="dashboard">
		<icon-bar :iconLinks="iconBarLinks" />

		<div class="dashboard-view">
			<section class="serial-ports-summary">
				<h4>Ports</h4>
				<hr />
				<p>4 Serial Ports detected</p>
				<p>1 Serial Ports open</p>
				<p>3 Serial Ports closed</p>
			</section>
			<section class="wifi-ports-summary">
				<h4>Ports</h4>
				<hr />
				<p>2 WiFi Ports detected</p>
				<p>1 WiFi Ports open</p>
				<p>1 WiFi Ports closed</p>
			</section>
		</div>
		<router-view></router-view>
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
			{ href: '/dashboard/serial-ports', 	 icon: 'usb-interface', classes: 'icon'},
			{ href: '/dashboard/wi-fi',        	 icon: 'wi-fi', classes: 'icon'},
			{ href: '/dashboard/settings',       icon: 'settings', classes: 'icon'},
		],
	}),
});
</script>