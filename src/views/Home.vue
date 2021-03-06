<template>
  <div class="container">
    <img alt="logo" id="logo" src="../assets/arduino.svg">
    <h2 id="sublogo" class="mt-5">Serial Port Monitor and Tools</h2>
    <b-container>
      <button class="btn btn-dark btn-lg mt-5">To Controll Panel</button>
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


<style scoped>
#logo {
  width: 25vw;
  /* height: 33vh; */
}

#sublogo {
  color: #222222;
}
</style>