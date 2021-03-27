<template>
	<div id="top-nav" :class="{'top-nav--closed': this.$props.isOpen}">
		<router-link v-for="link in links" :key="link.text" :to="link.href" :class="link.class" :exact=true>
			{{ link.text }}
		</router-link>
		<slot></slot>
	</div>
</template>


<script>
import Vue from 'vue';


export default Vue.extend({
	name: 'TopNavigation',
	props: {
		links: {
			type: Array,
			required: true,
		},
		isOpen: {
			type: Boolean,
			default: true,
		},
	},
});
</script>
