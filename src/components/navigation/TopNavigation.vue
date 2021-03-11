<template>
	<div id="top-nav">
		<router-link v-for="link in links" :key="link.text" :to="link.href" :class="link.class" exact="true">
			{{ link.text }}
		</router-link>
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