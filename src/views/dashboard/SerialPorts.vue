<template>
	<div class="container">
		<port-list :ports="listPorts"/>
		<router-view></router-view>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import gql from 'graphql-tag';
import PortList from '../../components/port/PortList.vue';

export default Vue.extend({
	components: {
		'port-list': PortList,
	},
	data: () => ({
		listPorts: new Array<object>(),
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
	},
});
</script>