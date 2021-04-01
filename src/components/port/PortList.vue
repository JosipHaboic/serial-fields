<template>
<div class="container is-centered h-100" v-if="ports.length > 0">
    <router-link v-for="port in ports" class="row port-link" :to="route(port.path)" :key="port.path">
		<div class="col-6">{{ port.path }}</div>
		<div class="col-6"><port-status :path="port.path" /></div>
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
