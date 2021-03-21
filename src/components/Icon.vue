<template>
	<img class="sidebar-icon" :src="getIcon(name)" />
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	props: {
		name: {
			type: String,
		},
	},
	methods: {
		getIcon(icon: string) {
			return require('../assets/icons/' + icon + '.svg');
		},
	},
});
</script>