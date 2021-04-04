<template>
<div class="serial-port">
	<div class="row">
		<div class="col-12">
			<port-output :path="this.$route.params.path"/>
		</div>
	</div>

	<div class="row">
		<div class="col-4">
			<port-gate :path="this.$route.params.path" />
		</div>
		<div class="col-8">
			<port-info :path="this.$route.params.path"/>
		</div>
	</div>
</div>
</template>

<script>
import Vue from 'vue';
import PortOutput from '@/components/port/PortOutput.vue';
import PortGate from '@/components/port/PortGate.vue';
import PortInfo from '@/components/port/PortInfo.vue';


export default Vue.extend({
	components: {
		'port-output': PortOutput,
		'port-gate': PortGate,
		'port-info': PortInfo,
	},
});
</script>