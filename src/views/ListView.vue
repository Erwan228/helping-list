<template>
    <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/list">To-Do</router-link> |
    <router-link to="/mat">Mat</router-link>
  </nav>
</template>
<script>
export default {
    name: 'ListView',
    components: {
  
    }
  }
</script>

<style scoped>
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
</style>