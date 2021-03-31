<template>
<div class="container is-centered h-100" v-if="ports.length > 0">
  <div v-for="port in ports" :key="port.path" class="port-link">
    <router-link class="link" :to="route(port.path)">
      {{ port.path }}
    </router-link>
  	<port-status :path="port.path" />
  </div>
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

<style>
.port-link {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 20vw;
	height: 10vh;
	background: var(--dark);
	box-shadow: 0 0 0 1px var(--color-0-3);
	transition: background 1s;
}

.port-link:hover {
	background: var(--color-0-3);
	transition: background 1s;
}

.port-link .link {
	font-size: 1.6rem;
}

.port-link .port-status {
	height: 100%;
	width: 1rem;
}
</style>