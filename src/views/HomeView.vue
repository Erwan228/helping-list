<template>
  <div class="home">
    <div class="overView">
      <div class="parts">
        <p>To-do</p>
      </div>
      <div class="parts">
        <p>Mat</p>
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
  background: rgb(192, 229, 241);
  margin: 50px 70px;
}
</style>
