<template>
	<port-list :ports="listPorts"/>
</template>

<script lang="ts">
import Vue from 'vue';
import gql from 'graphql-tag';
import PortList from '@/components/port/PortList.vue';

export default Vue.extend({
	components: {
		'port-list': PortList,
	},
	data: () => ({
		listPorts: new Array<object>(),
	}),
	apollo: {
		listPorts: {
			query: gql`query listPorts { listPorts { path }}`,
			pollInterval: 250,
		},
	},
});
</script>