<template>
  <div class="hello">
    <img src="~@/assets/logo-code-forefront.png">
    <h1>{{ msg }}</h1>
    <p>Ce test à pour but de tester ta compréhension du framework VueJs pour le suivi d'un stage chez CodeForefront</p>
    <h2>Liste des liens utiles pour réaliser ce test</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem de vueJs</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <div class="next" @click="$router.push({name: 'exercice1'})">
      Commencer l'exercice
    </div>
    <app-my-sweet-component></app-my-sweet-component>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Bienvenue'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  text-align: center;
}

.hello img {
  width: 200px;
}

.next {
  margin: 50px;
  cursor: pointer;
  font-size: 1.5em;
  color: blue;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
