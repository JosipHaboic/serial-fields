<template>
	<div class="output">
		<div class="row">
			<div class="col-6">
				<h2>Vin: {{ currentData.ADC.vin }}</h2>
			</div>
			<div class="col-6">
				<h2>Vout: {{ currentData.ADC.vout }}</h2>
			</div>
		</div>

		<div class="row">
			<div class="col-12">
				<h2>PWM: {{ currentData.PWM.dutyCycle }}%</h2>
			</div>
		</div>
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