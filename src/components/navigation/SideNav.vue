<template>
	<div id="side-nav">
		<div class="btn-close"></div>
		<router-link
			v-for="item in sidebarItems"
			v-bind:class="item.class"
			:key="item.text"
			:to="item.href">
			{{ item.text }}
		</router-link>
	</div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
	props: {
		links: {
			type: Array,
			required: false,
		}
	},
	data: () => ({
		sidebarItems: [
			{ class: 'link', href: '/dashboard/serial-ports', text: 'Serial Ports'},
			{ class: 'link', href: '/dashboard/serial-ports', text: 'Graphs'},
			{ class: 'link', href: '/dashboard/serial-ports', text: 'Data'},
			{ class: 'link', href: '/dashboard/serial-ports', text: 'Settings'},
		]
	})
})
</script>