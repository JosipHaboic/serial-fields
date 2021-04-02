<template>
<div class="serial-port-info">
  <div class="row">
    <div class="col-6">pnpId</div>
    <div class="col-6">{{ this.portInfo.pnpId }}</div>
  </div>
  <div class="row">
    <div class="col-6">productId</div>
    <div class="col-6">{{ this.portInfo.productId }}</div>
  </div>
  <div class="row">
    <div class="col-6">locationId</div>
    <div class="col-6">{{ this.portInfo.locationId }}</div>
  </div>
  <div class="row">
    <div class="col-6">vendorId</div>
    <div class="col-6">{{ this.portInfo.vendorId }}</div>
  </div>
  <div class="row">
    <div class="col-6">serialNumber</div>
    <div class="col-6">{{ this.portInfo.serialNumber }}</div>
  </div>
  <div class="row">
    <div class="col-6">manufacturer</div>
    <div class="col-6">{{ this.portInfo.manufacturer }}</div>
  </div>
</div>
</template>

<script>
import Vue from 'vue';
import gql from 'graphql-tag';

export default Vue.extend({
	props: {
		path: {
			type: String,
      required: true,
		},
	},
  data: () => ({
		listPorts: [],
	}),
	apollo: {
		listPorts: {
			query: gql`query listPorts { listPorts {path, pnpId, productId, locationId, vendorId, serialNumber, manufacturer}}`,
		},
	},
	computed: {
		portInfo() {
			return [...this.listPorts].filter((item) => {
				return item.path === this.$props.path;
			})[0];
		},
	},
});
</script>