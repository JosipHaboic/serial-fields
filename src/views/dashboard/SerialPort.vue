<template>
	<div>
		<h2 style="color: white;">{{ $route.params.path }}</h2>
	</div>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
	computed: {
		path: () => this.$route.params.path,
	},
});
</script>