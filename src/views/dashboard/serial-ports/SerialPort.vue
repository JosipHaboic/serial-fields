<template>
<div class="serial-port-info">
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

	<fieldset class="open-port-form">
		<legend>Open Port</legend>

		<label for="baud-rate">Baud Rate</label>
		<select v-model="openPortOptions.baudRate">
			<option v-for="baudRate in baudRates" :key="baudRate">{{ baudRate }}</option>
		</select>

		<!-- <label for="auto-open">Auto Open</label> -->
		<!-- <input type="checkbox" v-model="openPortOptions.autoOpen" /> -->

		<label for="data-bits">Data Bits</label>
		<select v-mode="openPortOptions.dataBits">
			<option>5</option>
			<option>6</option>
			<option>7</option>
			<option selected>8</option>
			<option>9</option>
		</select>

		<label for="stop-bits">Data Bits</label>
		<select v-mode="openPortOptions.stopBits">
			<option selected>1</option>
			<option>2</option>
			<option>3</option>
		</select>

		<button>Open Port</button>
	</fieldset>

</div>
</template>

<script lang="ts">
import Vue from 'vue';
import gql from 'graphql-tag';
import { OpenOptions, BAUD_RATES } from '@/models';

export default Vue.extend({
	data: () => ({
		listPorts: new Array<any>(),
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
		} as OpenOptions,
		baudRates: BAUD_RATES,
	}),
	apollo: {
		listPorts: {
			query: gql`query { listPorts {path, pnpId, productId, locationId, vendorId, serialNumber, manufacturer}}`,
		},
	},
	computed: {
		portInfo() {
			return [...this.listPorts].filter((item) => {
				return item.path === this.$route.params.path;
			})[0];
		},
	},
});
</script>

<style scoped>
	table, th, td {
		padding: var(--lg);
	}

	table {
		width: 95vw;
		/* border: 1px solid var(--color-0-3); */
	}

	td {
		background: var(--dark);
	}

	tr {
		border-bottom: 1px solid var(--color-0-3);
	}

	.serial-port-info {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
	}
</style>