<template>
	<div class="container">
		<div class="port-list">
			<div v-for="port in ports" :key="port.path" class="port-list-item">
				<router-link class="link" :to="route(port.path)">
					{{ port.path }}
				</router-link>
				<div class="port-status" v-bind:class="portStatus(port.path)"></div>
			</div>
		</div>
		<router-view></router-view>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	data: () => ({
		ports: [
			{ path: 'COM5'},
			{ path: 'COM3'},
			{ path: 'COM1'},
		],
	}),
	methods: {
		portStatus(portPath?: string) {
			return portPath === 'COM3' ? 'port--open' : 'port--closed';
		},
		route: (path: string) => {
			return `/dashboard/serial-ports/${path}`;
		},
	},
});
</script>