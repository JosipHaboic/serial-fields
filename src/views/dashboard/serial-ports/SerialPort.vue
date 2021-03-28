<template>
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
		<td>{{ pnpId }}</td>
		<td>{{ productId }}</td>
		<td>{{ locationId }}</td>
		<td>{{ vendorId }}</td>
		<td>{{ serialNumber }}</td>
		<td>{{ manufacturer }}</td>
	</tr>
</table>
</template>

<script>
import Vue from 'vue';
import gql from 'graphql-tag';

export default Vue.extend({
	data: () => ({
		portInfo: {},
	}),
	apollo: {
		portInfo: {
			query: gql`query portInfo($path: String!) { portInfo(path: $path) {pnpId, productId, manufacturer, serialNumber, locationId, vendorId}}`,
			variables: {
				path: $route.path,
			}
		}
	}
});
</script>

query { listPorts {path, pnpId, productId, manufacturer, serialNumber, locationId, vendorId}}