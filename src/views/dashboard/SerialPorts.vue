<template>
	<div class="container">
		<fieldset>
			<legend>Ports</legend>
			<div class="port-list" v-if="testPortList.length > 0">
				<div v-for="port in testPortList" :key="port.path" class="port-list-item">
					<router-link class="link" :to="route(port.path)">
						{{ port.path }}
					</router-link>
					<div class="port-status" v-bind:class="portStatus(port.path)"></div>
				</div>
			</div>
			<div v-else>
				<p class="warning message">No serial ports detected</p>
			</div>
		</fieldset>
		<router-view></router-view>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import gql from 'graphql-tag';

export default Vue.extend({
	data: () => ({
		listPorts: new Array<Object>(),
		listOpenPorts: new Array<string>(),
		testPortList: [
			{path: 'COM0'},
			{path: 'COM1'},
			{path: 'COM2'},
			{path: 'COM5'},
		],
	}),
	apollo: {
		listPorts: {
			query: gql`query listPorts { listPorts { path }}`,
			pollInterval: 250,
		},
		listOpenPorts: {
			query: gql`query listOpenPorts { listOpenPorts }`,
			pollInterval: 250,
		}
	},
	methods: {
		portStatus(portPath: string) {
			for (let item of this.listOpenPorts) {
				console.log(item);
				if (item === portPath) {
					return 'port--open';
				}
			}
			return 'port--closed';
			// return [...this.listOpenPorts].find((item) => item === portPath)  ? 'port--open' : 'port--closed';
		},
		route(path: string) {
			return `/dashboard/serial-ports/${path}`;
		},
	},
});
</script>