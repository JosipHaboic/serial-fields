<template>
<div class="serial-port">
	<table>
		<tr>
			<th>pnpId</th>
			<th>productId</th>
			<th>locationId</th>
			<th>vendorId</th>
			<th>serialNumber</th>
			<th>manufacturer</th>
		</tr>
		<tr>
			<td>{{ portInfo.pnpId }}</td>
			<td>{{ portInfo.productId }}</td>
			<td>{{ portInfo.locationId }}</td>
			<td>{{ portInfo.vendorId }}</td>
			<td>{{ portInfo.serialNumber }}</td>
			<td>{{ portInfo.manufacturer }}</td>
		</tr>
	</table>

	<fieldset class="mt-5">
		<legend>Open Port</legend>

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
		<input type="text" v-model="delimiter" value="\r\n" />

		<button v-if="isPortOpen" @click="closePort">Disconnect</button>
		<button v-else @click="openPort">Connect</button>
	</fieldset>

</div>
</template>

<script>
import Vue from 'vue';
import gql from 'graphql-tag';
import { BAUD_RATES } from '@/models';

export default Vue.extend({
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
		baudRates: BAUD_RATES,
		delimiter: '\r\n',
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
			pollInterval: 250,
		},
	},
	computed: {
		portInfo() {
			return [...this.listPorts].filter((item) => {
				return item.path === this.$route.params.path;
			})[0];
		},
		buttonText() {
			if (this.isPortOpen === true) {
				return 'Close Port';
			}
			return 'Open Port';
		},
	},
	methods: {
		openPort() {
			this.$apollo.mutate({
				mutation: gql`mutation ($path: String!, $openOptions: OpenOptions, $delimiter: String!) {
					openPort(path: $path, openOptions: $openOptions, delimiter: $delimiter)
				}`,
				variables: {
					// return {
						path: this.$route.params.path,
						openOptions: this.openPortOptions,
						delimiter: this.delimiter,
					// };
				},
			});
		},
		closePort() {
			this.$apollo.mutate({
				mutation: gql`mutation ($path: String!) {
					closePort(path: $path)
				}`,
				variables: {
					// return {
						path: this.$route.params.path,
					// };
				},
			});
		},
	},
});
</script>