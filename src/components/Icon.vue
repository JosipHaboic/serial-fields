<template>
	<img class="sidebar-icon" :src="src" />
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