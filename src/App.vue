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
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: linear-gradient(to bottom, #247291, #698dab, #9cabc2, #c8cbd7, #eeeeee),
    linear-gradient(to top, #247291, #698dab, #9cabc2, #c8cbd7, #eeeeee);
  height: 100vh;
}

#nav {
  display: flex;
  justify-content: flex-end;
  padding: 1vh;
  background: var(--primary-1);
}

#nav a:last-child {
  margin-right: 16vw;
}

#nav a {
  color: var(--light);
  text-decoration: none;
  margin: 0 12px;
  padding: 4px 12px;
}

#nav a:hover {
  color: var(--primary-4);
}
</style>
