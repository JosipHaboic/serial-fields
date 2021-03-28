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
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import gql from 'graphql-tag';

export default Vue.extend({
	data: () => ({
		listPorts: new Array<any>(),
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
		justify-content: center;
		align-items: flex-start;
	}
</style>