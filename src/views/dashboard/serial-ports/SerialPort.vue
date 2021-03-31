<template>
<div class="serial-port">

	<port-info v-if="portInfo" :portInfo="portInfo" />

	<fieldset class="serial-port-ctrl">
		<label for="baud-rate">Baud Rate</label>
		<select v-model="openPortOptions.baudRate">
			<option v-for="baudRate in baudRates" :key="baudRate">{{ baudRate }}</option>
		</select>

		<label for="data-bits">Data Bits</label>
		<select v-model="openPortOptions.dataBits">
			<option>5</option>
			<option>6</option>
			<option>7</option>
			<option selected>8</option>
			<option>9</option>
		</select>

		<label for="stop-bits">Stop Bits</label>
		<select v-model="openPortOptions.stopBits">
			<option selected>1</option>
			<option>2</option>
			<option>3</option>
		</select>

		<label for="delimiter">Delimiter</label>
		<input type="text" v-model="parserOptions.delimiter" />

		<button v-if="isPortOpen" @click="closePort">Disconnect</button>
		<button v-else @click="openPort">Connect</button>
	</fieldset>

	<port-output :path="this.$route.params.path"/>

</div>
</template>

<script>
import Vue from 'vue';
import gql from 'graphql-tag';
import { BAUD_RATES } from '@/models';
import PortOutput from '@/components/port/PortOutput.vue';
import PortInfo from '@/components/port/PortInfo.vue';

export default Vue.extend({
	components: {
		'port-output': PortOutput,
		'port-info': PortInfo,
	},
	data: () => ({
		listPorts: [],
		openPortOptions: {
			autoOpen: true,
			baudRate: 9600,
			parity: 'none',
			hupcl: true,
			rtscts: false,
			lock: true,
			endOnClose: false,
			stopBits: 1,
			xany: false,
			xon: false,
			dataBits: 8,
			highWaterMark: 64 * 1024,
		},
		parserOptions: {
			delimiter: '\r\n',
		},
		baudRates: BAUD_RATES,
		isPortOpen: false,
	}),
	apollo: {
		listPorts: {
			query: gql`query { listPorts {path, pnpId, productId, locationId, vendorId, serialNumber, manufacturer}}`,
		},
		isPortOpen: {
			query: gql`query isPortOpen($path: String!) { isPortOpen(path: $path) }`,
			variables() {
				return {
					path: this.$route.params.path,
				};
			},
			pollInterval: 200,
		},
	},
	computed: {
		portInfo() {
			return [...this.listPorts].filter((item) => {
				return item.path === this.$route.params.path;
			})[0];
		},
	},
	methods: {
		openPort() {
			this.$apollo.mutate({
				mutation: gql`mutation ($path: String!, $openOptions: OpenOptions, $delimiter: String!) {
					openPort(path: $path, openOptions: $openOptions, delimiter: $delimiter)
				}`,
				variables: {
						path: this.$route.params.path,
						openOptions: this.openPortOptions,
						delimiter: '\r\n',
				},
			});
		},
		closePort() {
			this.$apollo.mutate({
				mutation: gql`mutation ($path: String!) {
					closePort(path: $path)
				}`,
				variables: {
						path: this.$route.params.path,
				},
			});
		},
	},
});
</script>