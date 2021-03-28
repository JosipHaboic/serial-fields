<template>
	<div
		class="port-status"
		v-bind:class="portStatus"
		@click="togglePort()"></div>
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
	computed: {
		portStatus() {
			for (const item of this.listOpenPorts) {
				if (item === this.$props.path) {
					return 'port--open';
				}
			}
			return 'port--closed';
		},
	},
	methods: {
		togglePort() {
			if (this.portStatus === 'port--open') {
				this.$apollo.mutate({
					mutation: gql`mutation ($path: String!) {closePort(path: $path)}`,
					variables: {
						path: this.$props.path,
					},
				});
			} else {
				this.$apollo.mutate({
					mutation: gql`mutation ($path: String!)
					{
						openPort(path: $path, openOptions: {baudRate: 9600}, delimiter: "\r\n")
					}`,
					variables: {
						path: this.$props.path,
					},
				});
			}
		},
	},
});
</script>