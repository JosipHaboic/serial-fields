<template>
<div class="container p-lg" v-if="ports.length > 0">
    <router-link v-for="port in ports" :to="route(port.path)" :key="port.path" class="port-link">
		{{ port.path }}
		<port-status :path="port.path" />
    </router-link>
</div>

<div v-else class="container is-centered h-100">
  <p class="info-text">No serial ports detected</p>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import PortStatus from '@/components/port/PortStatus.vue';


export default Vue.extend({
	components: {
		'port-status': PortStatus,
	},
	props: {
		ports: {
			type: Array,
			required: false,
		},
	},
	methods: {
		route(path: string) {
			return `/dashboard/serial-ports/${path}`;
		},
	},
});
</script>
