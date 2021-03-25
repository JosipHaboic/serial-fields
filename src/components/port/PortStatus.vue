<template>
	<div class="port-status" v-bind:class="portStatus(path)"></div>
</template>

<script lang="ts">
import Vue from 'vue';
import gql from 'graphql-tag';

export default Vue.extend({
	props: {
		path: {
			type: String,
			required: true,
		},
	},
	data: () => ({
		listOpenPorts: new Array<string>(),
	}),
	apollo: {
		listOpenPorts: {
			query: gql`query listOpenPorts { listOpenPorts }`,
			pollInterval: 250,
		},
	},
	methods: {
		portStatus(portPath: string) {
			for (const item of this.listOpenPorts) {
				if (item === portPath) {
					return 'port--open';
				}
			}
			return 'port--closed';
			// return [...this.listOpenPorts].find((item) => item === portPath)  ? 'port--open' : 'port--closed';
		},
	},
});
</script>