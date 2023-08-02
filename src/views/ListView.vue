<template>
    <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/list">To-Do</router-link> |
    <router-link to="/mat">Mat</router-link>
  </nav>
  <div class="list">
    <h2>To do</h2>
    <div v-if="tasks.length" class="toDoTasks">
      <div v-for="task in tasks">
        <p>{{ task.task }} <input type="checkbox" /></p>
        
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name: "ListView",
    data() {
      return{
        tasks: [],
      }
    },
    mounted(){
      fetch('http://localhost:3000/tasks')
      .then(res => res.json())
      .then(data => this.tasks = data)
      .catch(err => console.log(err.message))
    }
  }
</script>

<style scoped>
.list {
  border: solid blue 10px;
}
</style>