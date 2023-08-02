<template>
  <div class="home">
    <div class="overView">
      <div class="parts">
        <router-link to="/list">To-Do</router-link>
      </div>
      <div class="parts">
        <router-link to="/mat">Mat</router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {

  }
}
</script>

<style scoped>
.overView {
  border: solid blue;
  background: cornflowerblue;
}
.parts {
  border: solid 1px black;
  background: #c0e5f1;
  margin: 50px 70px;
}
</style>
