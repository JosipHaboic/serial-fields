<template>
<div class="serial-port">
	<div class="row">
		<div class="col-8">
			<port-info v-if="portInfo" :portInfo="portInfo"/>
		</div>

		<div class="col-4">
			<port-gate :path="this.$route.params.path" />
		</div>
	</div>

	<port-output :path="this.$route.params.path"/>

</div>
</template>

<script>
import Vue from 'vue';
import gql from 'graphql-tag';
import PortOutput from '@/components/port/PortOutput.vue';
import PortInfo from '@/components/port/PortInfo.vue';
import PortGate from '@/components/port/PortGate.vue';

export default Vue.extend({
	components: {
		'port-output': PortOutput,
		'port-info': PortInfo,
		'port-gate': PortGate,
	},
	data: () => ({
		listPorts: [],
	}),
	apollo: {
		listPorts: {
			query: gql`query listPorts { listPorts {path, pnpId, productId, locationId, vendorId, serialNumber, manufacturer}}`,
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