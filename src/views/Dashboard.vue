<template>
	<div class="container">
		<!-- <icon-bar> -->
			<icon :src="getIcon('013-computer.svg')"></icon>
		<!-- </icon-bar> -->
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import IconBar from '../components/IconBar.vue'
import Icon from '../components/Icon.vue'
export default Vue.extend({
	components: {
		'icon-bar': IconBar,
		'icon': Icon,
	},
	methods: {
		getIcon(icon) {
			return require('../assets/svg-icons/' + icon);
		}
	}
})
</script>