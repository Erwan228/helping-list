<template>
    <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/list">To-Do</router-link> |
    <router-link to="/mat">Mat</router-link>
  </nav>
  <div class="interface">
    
      <router-link class="inInterface" to="/mat/middag">Middag</router-link>
    
    
      <router-link class="inInterface" to="/mat/handleliste">Handleliste</router-link>
    
  </div>
</template>

<script>
export default {
  name: "MatView",

}
</script>

<style scoped>
.interface {
  display: flex;
  justify-content: space-around;
  border: solid blue 10px;
  margin-left: 30%;
  margin-right: 30%;
  padding-left: 2%;
  padding-right: 2%;
  padding-top: 2%;
  padding-bottom: 2%;
  background-color: cornflowerblue;
}

.inInterface {
  background-color: aqua;
  text-decoration: none;
  padding: 60px;
  border-radius: 4px;
  border-bottom: #5a758f solid;
  border-right: #5a758f solid;
  color: black;
  font-size: larger;
}
</style>