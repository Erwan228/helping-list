<template>
    <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/list">To-Do</router-link> |
    <router-link to="/mat">Mat</router-link>
  </nav>
  <div class="interface">
    <div>
      <router-link class="inInterface" to="/mat/middag">Middag</router-link>
    </div>
    <div>
      <router-link class="inInterface" to="/mat/handleliste">Handleliste</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "MatView",

}
</script>

<style scoped>

</style>