<template>
  <div class="row">
<div class="port-info">
    <div class="col-6">pnpId</div>
    <div class="col-6">{{ portInfo.pnpId }}</div>
  </div>
  <div class="row">
    <div class="col-6">productId</div>
    <div class="col-6">{{ portInfo.productId }}</div>
  </div>
  <div class="row">
    <div class="col-6">locationId</div>
    <div class="col-6">{{ portInfo.locationId }}</div>
  </div>
  <div class="row">
    <div class="col-6">vendorId</div>
    <div class="col-6">{{ portInfo.vendorId }}</div>
  </div>
  <div class="row">
    <div class="col-6">serialNumber</div>
    <div class="col-6">{{ portInfo.serialNumber }}</div>
  </div>
  <div class="row">
    <div class="col-6">manufacturer</div>
    <div class="col-6">{{ portInfo.manufacturer }}</div>
  </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	props: {
		portInfo: {
			type: Object,
		},
	},
});
</script>