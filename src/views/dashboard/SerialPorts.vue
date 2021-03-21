<template>
	<div class="container">
		<ul>
			<li v-for="port in ports" :key="port.path" class="port">
				<router-link class="link" :to="route(port.path)">
					<div class="port-path">{{ port.path }}</div>
					<div class="port-status">{{ portStatus(port.path) }}</div>
				</router-link>
			</li>
		</ul>
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
			return 'OPEN';
		},
		route: (path: string) => {
			return `/serial-ports/${path}`;
		},
	},
});
</script>

<style scoped>
.port {
	color: var(--color-0-1);
}
</style>