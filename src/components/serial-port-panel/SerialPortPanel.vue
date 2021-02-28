<template>
	<b-container class="serialport-panel-container">
		<b-row>

			<b-col cols="8">
				<!-- <p>{{ currentData.ADC }}</p> -->
				<!-- <p>{{ currentData.PWM }}</p> -->
			</b-col>

			<b-col cols="4">
				<b-form>
					<b-form-group
						id="path-select-group"
						label="Path Select"
						label-for="path-select"
						description="Select Path">
						<b-form-select
							id="path-select"
							v-model="openPortForm.path"
							:options="availablePaths">
						</b-form-select>
					</b-form-group>

					<b-form-group
						id="baudrate-select-group"
						label="Baudrate"
						label-for="baudrate-select"
						description="Select Baud Rate">
						<b-form-select
							id="baudrate-select"
							v-model="openPortForm.baudRate"
							:options="baudRateOptions">
						</b-form-select>
					</b-form-group>

					<b-form-group
						id="delimiter-input-group"
						label="Delimiter"
						label-for="delimiter-input"
						description="Input parser delimiter">
						<b-form-input
							id="delimiter-input"
							v-model="openPortForm.delimiter"
							placeholder="\r\n">
						</b-form-input>
					</b-form-group>

					<b-button-group>
						<b-button squared type="button" variant="primary" @click="openPort()">
							Connect
						</b-button>
						<b-button squared type="button" variant="primary" @click="closePort()">
							Disconnect
						</b-button>
					</b-button-group>
				</b-form>
			</b-col>
		</b-row>

	</b-container>
</template>

<script>
import gql from 'graphql-tag';
import { BAUD_RATES } from '../../serial-port';


export default {
	data() {
		return {
			openPortForm: {
				path: '',
				baudRate: 300,
				delimiter: '\n',
			},
			selectedPortPath: '',
			baudRateOptions: BAUD_RATES,
			openPorts: {},
			statusMessage:  'Not connected',
			isPortOpen: false,
			currentData: {},
			dataBuffer: [],
			portList: [],
		};
	},
	apollo: {
		portList: {
			query: gql`query portList { portList
			  	{
			  		path,
				}
			}`,
			pollInterval: 250, // ms
		},
		// isPortOpen: {
		// 	query: gql`query isPortOpen($path: String!) { isPortOpen(path: $path) }`,
		// 	variables: {
		// 		path: this.formData.path,
		// 	},
		// },
		// currentData: {
		// 	query: gql`query currentData($path: String!) { currentData(path: $path) { ADC {vin, vout}, PWM { dutyCycle }} }`,
		// 	pollInterval: 250,
		// 	variables: {
		// 		path: this.selectedPortPath,
		// 	}
		// },
		// dataBuffer: {
		// 	query: gql`query dataBuffer($path: String!) { dataBuffer(path: $path) { ADC {vin vout}, PWM { dutyCycle }}}`,
		// 	pollInterval: 250,
		// 	variables: {
		// 		path: this.selectedPortPath,
		// 	}
		// },
	},
	methods: {
		openPort() {
			this.$apollo.mutate({
				mutation: gql`mutation openPort($path: String!, $openOptions: OpenOptions!, $delimiter: String!) {
					openPort(path: $path, openOptions: $openOptions, delimiter: $delimiter)
				}`,
				variables: {
					path: this.form.path,
					openOptions: { baudRate: this.form.baudRate },
					delimiter: this.openPortForm.delimiter,
				},
			});
		},
		// closePort() {
		// 	this.$apollo.mutate({
		// 		mutation: gql`mutation closePort {
		// 			closePort(path: $path)
		// 		}`,
		// 		variables: {
		// 			path: this.openPortForm.path,
		// 		},
		// 	});
		// },
	},
	computed: {
		availablePaths() {
			if (this.portsList.length > 0) {
				return this.portList.map((port) => port.path);
			}

			return [];
		},
	},
};
</script>

<style>
.serialport-panel-container {
	max-width: 320px;
}
</style>