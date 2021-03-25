<template>
<div class="port-list" v-if="ports.length > 0">
  <div v-for="port in ports" :key="port.path" class="port-list-item">
    <router-link class="link" :to="route(port.path)">
      {{ port.path }}
    </router-link>
  	<port-status :path="port.path"></port-status>
  </div>
</div>
<div v-else>
  <p class="warning message is-centered">No serial ports detected</p>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import PortStatus from '../port/PortStatus.vue';

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