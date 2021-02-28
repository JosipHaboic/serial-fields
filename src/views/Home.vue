<template>
  <div class="home">
    <img alt="Vue logo" id="logo" src="../assets/Arduino_Logo.svg">
    <h4 id="sublogo">Serial Port Monitor and Tools</h4>
    <b-container>
      <b-row>
        <b-col cols="8">
        </b-col>
        <b-col cols="4">
          <SerialPortPanel />
        </b-col>
      </b-row>

    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SerialPortPanel from '../components/serial-port-panel/SerialPortPanel.vue';

@Component({
  components: {
    SerialPortPanel,
  },
})
export default class Home extends Vue {}
</script>


<style>
#logo {
  max-height: 128px;
}

#sublogo {
  color: #228888;
}
</style>