<template>
	<div class="dashboard">
		<icon-bar :iconLinks="iconBarLinks" />

		<div class="dashboard-view">
			<router-view></router-view>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import IconBar from '@/components/navigation/IconBar.vue';

export default Vue.extend({
	components: {
		'icon-bar': IconBar,
	},
	data: () => ({
		iconBarLinks: [
			{ href: '/dashboard/', 	             icon: 'dashboard', classes: 'icon'},
			{ href: '/dashboard/serial-ports', 	 icon: 'usb-interface', classes: 'icon'},
			{ href: '/dashboard/wi-fi',        	 icon: 'wi-fi', classes: 'icon'},
			{ href: '/dashboard/settings',       icon: 'settings', classes: 'icon'},
		],
	}),
});
</script>