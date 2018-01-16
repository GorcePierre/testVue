<template>
  <div class="first-container">
    <div class="header">
      <div class="buttons">
        <div class="button" @click="$router.go(-1)">
          Précédent
        </div>
        <div class="button" @click="$router.push({name: 'exercice2'})">
          Suivant
        </div>
      </div>
      <div class="title">
        Ton premier défi, la TODO list.
      </div>
      <div class="content">
        <p>Si tu es familier de cet exercice, cela ne devrait pas poser de problème.</p>
        <p>Sinon l'exercice consiste à créer une liste, qui s'implémentera avec les valeurs que tu rentreras dans un input</p>
        <p>(bonus: créer un bouton pour supprimer un élément)</p>
    </div>
  </div>
  <div class="body">
    <div class="left">
      <ul class="themes">
        Thèmes:
        <li>List rendering</li>
        <li>Data Binging</li>
        <li>Event listener</li>
      </ul>
    </div>
    <div class="separator">
    </div>
    <div class="right">
      <input v-model="message" placeholder="saissir une tache">
      <p>Message is: {{ message }}</p>
     <button v-on:click="addTask(message)">Add</button>
      <ol >
        <div v-for="(todo , index) of todos" :key="todo.label">
        <li> {{todo.label}} </li>
       <button class="btn btn-warning" v-on:click="deleteTask(index)">x</button>
        </div>
      </ol> 
  </div>
    </div>
  </div>
</template>
<script>
const todo = [
  {
    label: "ma première chose à faire"
  },
  {
    label: "ma deuxième chose à faire"
  }
];
let newTodo = this.todos;
let message = "";
let newTask = {
  label: ""
};

console.log(todo);

export default {
  data() {
    return {
      todos: todo,
      message: "",
    };
  },
  methods: {
    addTask(text) {
      newTask.label = text;
      console.log(newTask.label);
      this.message = "";
      newTodo = this.todos.push(newTask.label);
      console.log("todos: " + this.newTodo)
      return newTodo;
    },
    deleteTask(index) {
      console.log(index)
      this.todos.splice(index,1)
    }
  }
};
</script>
<style>

</style>
