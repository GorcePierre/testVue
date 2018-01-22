// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex, { Store } from 'vuex'
import App from './App'
import Home from '@/components/_layout/Home'
import Exercice1 from '@/components/_layout/Exercices/Exercice1'
import Exercice2 from '@/components/_layout/Exercices/Exercice2'
import Exercice3 from '@/components/_layout/Exercices/Exercice3'
import Exercice4 from '@/components/_layout/Exercices/Exercice4'
import Exercice5 from '@/components/_layout/Exercices/Exercice5'
import MySweetComponent from '@/components/_layout/Exercices/Exercice3/_commons/MySweetComponent.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.component('app-my-sweet-component', MySweetComponent)

const routes = [
  {
    path: '/',
    component: Home,
    name: 'home'
  },
  { path: '/exercice1', component: Exercice1, name: 'exercice1' },
  { path: '/exercice2', component: Exercice2, name: 'exercice2' },
  { path: '/exercice3', component: Exercice3, name: 'exercice3' },
  { path: '/exercice4', component: Exercice4, name: 'exercice4' },
  { path: '/exercice5', component: Exercice5, name: 'exercice5' }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

const store = new Vuex.Store({
  state: {
    newTask: "",
    todo: [
      {
        label: "ma première chose à faire"
      },
      {
        label: "ma deuxième chose à faire"
      }
    ]
  },
  mutations: {

    addTask: (state, newTask) => {
      console.log("console: " +  newTask)

      if (newTask) {
        console.log(newTask)
        state.todo.push({
          label: newTask
        });
        console.log("console 1 : " +  newTask)
      }
      else state.todo 
      state.newTask = "coucou";
      console.log(state.newTask)

    },
    deleteTask: (state, index) => {
      state.todo.splice(index, 1);
    }
  },
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  },
  router,
  store
})
