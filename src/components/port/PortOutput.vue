<template>
	<div class="output">
		{{ JSON.stringify(currentData) }}
	</div>
</template>


<script type="ts">
import Vue from 'vue';
import gql from 'graphql-tag';

export default Vue.extend({
	props: {
		path: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			currentData: {},
		};
	},
	apollo: {
		currentData: {
			query: gql`query ($path: String!) {
				currentData(path: $path) {ADC {vin, vout}, PWM {dutyCycle}}
			}`,
			variables() { // always write functions like this
					return {
						path: this.$props.path,
					};
			},
			pollInterval: 250,
		},
	},
});
</script>

<style>
.output {
	color: white;
}
</style>