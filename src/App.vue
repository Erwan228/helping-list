<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #1c2732;
}

nav a.router-link-exact-active {
  color: blue;
}

* {
  user-select: none;
}

.addButton{
  margin-top: 50px;
  border-radius: 4cm;
  border: solid blue;
  background-color: #c0e5f1;
}
</style>
