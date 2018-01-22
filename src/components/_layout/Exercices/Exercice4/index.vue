<template>
  <div class="first-container">
    <div class="header">
      <div class="buttons">
        <div class="button" @click="$router.go(-1)">
          Précédent
        </div>
        <div class="button" @click="$router.push({name: 'exercice5'})">
          Suivant
        </div>
      </div>
      <div class="title">
        Ton quatrième défi, utiliser le store.
      </div>
      <div class="content">
        <p>Le but de cet exercice est de découvrir le store (optionnel).</p>
        <p>Le store te permet de passer des données d'un composant frère à un autre.</p>
        <p>Retourne sur le premier exercice et enregistre les données de ta todo liste d'un un store,</p>
        <p>puis affiche les sur cette page.</p>
        <p>Aucun style imposé</p>
    </div>
  </div>
  <div class="body">
    <div class="left">
      <ul class="themes">
        Thèmes:
        <li>Store</li>
        <li>Setter</li>
        <li>Getter</li>
        <li>Configuration</li>
      </ul>
    </div>  
    <div class="separator">
    </div>
    <div class="right">
      <div>
      <h2>MA TODOLIST </h2>
      <input v-model="newTask" placeholder="saissir une tache">
        <button v-on:click="addTask(newTask)">Add</button>
          <ol >
            <div v-for="(todo , index) of todos" v-bind:key="todo.label">
            <li> {{todo.label}} 
          <button class="btn btn-warning" v-on:click="deleteTask(index)">x</button></li>
        </div>
      </ol> 
      </div>  
    </div>
  </div>
  </div>
</template>
<script>
import { mapMutations, Store } from "vuex";

export default {
  data() {
    return {
      newTask: this.$store.state.newTask,
      todos: this.$store.state.todo,
    };
  },
  methods: {
    ...mapMutations(["addTask", "deleteTask"])
  },
  components: {}
};
</script>
<style>

</style>
