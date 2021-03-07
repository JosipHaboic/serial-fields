<template>
	<svg :src="src"></svg>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	props: {
		src: {
			type: String,
		},
	}
})
</script>