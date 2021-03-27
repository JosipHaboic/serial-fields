<template>
	<div class="icon-bar icon-bar--vertical">
		<router-link v-for="iconLink in iconLinks" :key="iconLink.href" :to="iconLink.href">
			<component :is="iconRegister[iconLink.icon]" :classes="iconLink.classes"></component>
		</router-link>
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
		iconLinks: {
			type: Array,
		},
	},
	data: () => ({
			iconRegister: icons,
	}),
});
</script>
