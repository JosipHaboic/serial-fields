<template>
	<b-card no-body>
		<b-card-header>
			<b-row>
				<b-col>MAX: { max }</b-col>
				<b-col>MIN: { min }</b-col>
			</b-row>
		</b-card-header>

		<b-card-body>
			<h2>{ data }</h2>
		</b-card-body>

		<b-card-footer>
			<line-chart :chartData="dataHistory" />
		</b-card-footer>
	</b-card>
</template>

<script>
import LineChart from './LineChart.vue';

export default {
	data() {
		return {
			currentValue: 0,
			max: 0,
			min: 0,
			datasets: {
				data: [1.12, 1.8, 1.5, 2.4, 2.8, 3.2, 2.2, 3.5, 2.4],
			},
			options: null,
		};
	},
	props: {
		title: String,
	},
};
</script>