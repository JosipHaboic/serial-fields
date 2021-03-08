<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  text-align: center;
  height: 100vh;
  -webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>
