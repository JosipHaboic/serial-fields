<template>
  <fieldset class="serial-port-ctrl">
    <label for="baud-rate">Baud Rate</label>
    <select v-model="openPortOptions.baudRate">
      <option v-for="baudRate in baudRates" :key="baudRate">
        {{ baudRate }}
      </option>
    </select>

    <label for="data-bits">Data Bits</label>
    <select v-model="openPortOptions.dataBits">
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option selected>8</option>
      <option>9</option>
    </select>

    <label for="stop-bits">Stop Bits</label>
    <select v-model="openPortOptions.stopBits">
      <option selected>1</option>
      <option>2</option>
      <option>3</option>
    </select>

    <button v-if="isPortOpen" @click="closePort">Disconnect</button>
    <button v-else @click="openPort">Connect</button>
  </fieldset>
</template>

<script>
import Vue from 'vue';
import gql from 'graphql-tag';
import { BAUD_RATES } from '@/models';

export default Vue.extend({
	props: {
		path: {
			type: String,
			required: true,
		},
	},
	data: () => ({
		openPortOptions: {
			autoOpen: true,
			baudRate: 9600,
			parity: 'none',
			hupcl: true,
			rtscts: false,
			lock: true,
			endOnClose: false,
			stopBits: 1,
			xany: false,
			xon: false,
			dataBits: 8,
			highWaterMark: 64 * 1024,
		},
		baudRates: BAUD_RATES,
		isPortOpen: false,
	}),
	apollo: {
		isPortOpen: {
			query: gql`query isPortOpen($path: String!) { isPortOpen(path: $path) }`,
			variables() {
				return {
					path: this.$props.path,
				};
			},
			pollInterval: 200,
		},
	},
	methods: {
		openPort() {
			this.$apollo.mutate({
				mutation: gql`mutation openPort($path: String!, $openOptions: OpenOptions, $delimiter: String!) {
					openPort(path: $path, openOptions: $openOptions, delimiter: $delimiter)
				}`,
				variables: {
						path: this.$route.params.path,
						openOptions: this.openPortOptions,
						delimiter: '\r\n',
				},
			});
		},
		closePort() {
			this.$apollo.mutate({
				mutation: gql`mutation closePort($path: String!) {
					closePort(path: $path)
				}`,
				variables: {
						path: this.$route.params.path,
				},
			});
		},
	},
});
</script>