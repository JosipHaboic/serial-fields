<template>
  <div class="container">
    <img alt="logo" id="logo" src="../assets/andromeda/logo_transparent.png">
    <h1 id="sub-logo" class="mt-5">Serial Fields</h1>
      <router-link to="/dashboard">
        <button class="btn mt-5">Dashboard</button>
      </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Home extends Vue {}
</script>
