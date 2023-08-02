<template>
    <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/list">To-Do</router-link> |
    <router-link to="/mat">Mat</router-link>
  </nav>
  <div class="list">
    <div class="toDoTasksList">
      <h2>To do</h2>
      <div v-if="tasks.length" >
        <div v-for="task in tasks">
          <div class="task">
            <label>{{ task.task }}</label><input type="checkbox" />
          </div>
          <hr>
        </div>
      </div>
    </div>
    <div class="doneTasksList">
      <h2>Done</h2>
      <div v-if="doneTasks.length">
        <div v-for="task in doneTasks">
          <div class="task">
            <label>{{ task.task }}</label><input type="checkbox" checked>
          </div>
          <hr>
        </div>
      </div>
    </div>
    <button>New task</button>
  </div>
</template>
<script>
export default {
    name: "ListView",
    data() {
      return{
        tasks: [],
        doneTasks: [],
      }
    },
    mounted(){
      fetch('http://localhost:3000/tasks')
      .then(res => res.json())
      .then(data => this.tasks = data)
      .catch(err => console.log(err.message))

      fetch('http://localhost:3000/doneTasks')
      .then(res => res.json())
      .then(data => this.doneTasks = data)
      .catch(err => console.log(err.message))
    }
  }
</script>

<style scoped>
.list {
  border: solid blue 10px;
  margin-left: 30%;
  margin-right: 30%;
  padding-left: 2%;
  padding-right: 2%;
  padding-bottom: 2%;
}

.toDoTasksList {
  color: black;
}

.doneTasksList {
  color: #c3c3c3;
}

.task {
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  font-size: larger;

}

button {
  margin-top: 50px;
  border-radius: 4cm;
  border: solid blue;
  background-color: #c0e5f1;
}
</style>