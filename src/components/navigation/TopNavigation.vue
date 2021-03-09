<template>
	<div id="top-nav">
		<a v-for="link in links" :key="link.text" :href="link.href" :class="link.class">
			{{ link.text }}
		</a>
	</div>
</template>


<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	name: 'TopNavigation',
	props: {
		links: {
			type: Array,
			required: true,
		},
	}
})
</script>