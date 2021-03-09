<template>
	<div class="container">
		<icon-bar :icons="['usb-interface']"></icon-bar>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import IconBar from '../components/IconBar.vue';

export default Vue.extend({
	components: {
		'icon-bar': IconBar,
	},
})
</script>