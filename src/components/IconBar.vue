<template>
	<div class="icon-bar icon-bar-vertical">
		<component :is="component" v-for="(component, index) in this.$children" :key="index"></component>
	</div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
})
</script>
