<template>
	<div class="topnav">
		<a v-for="link in links" :key="link.href" :href="link.href" :class="link.class">{{ link.text }}</a>
	</div>
</template>


<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	props: {
		links: {
			type: Object,
			required: true,
		},
	}
})
</script>