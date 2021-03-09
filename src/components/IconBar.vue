<template>
	<div class="icon-bar icon-bar-vertical">
		<component :is="iconsRegister[name]" v-for="name in icons" :key="name"></component>
	</div>
</template>

<script>
import Vue from 'vue';
import { iconsRegister } from './icons/iconRegister';

export default Vue.extend({
	components: {
		...iconsRegister,
	},
	props: {
		icons: {
			type: Array,
		}
	},
	data: () => {
		return {
			iconsRegister,
		};
	},
})
</script>
