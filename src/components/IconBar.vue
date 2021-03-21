<template>
	<div class="icon-bar icon-bar-vertical">
		<component :is="iconRegister[name]" v-for="name in icons" :key="name"></component>
	</div>
</template>

<script>
import Vue from 'vue';
import { icons } from './icons';

export default Vue.extend({
	components: {
		...icons,
	},
	props: {
		icons: {
			type: Array,
		},
	},
	data: () => ({
			iconRegister: icons,
	}),
});
</script>
