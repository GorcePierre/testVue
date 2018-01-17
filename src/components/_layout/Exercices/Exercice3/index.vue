<template>
  <div class="first-container">
    <div class="header">
      <div class="buttons">
        <div class="button" @click="$router.go(-1)">
          Précédent
        </div>
        <div class="button" @click="$router.push({name: 'exercice4'})">
          Suivant
        </div>
      </div>
      <div class="title">
        Ton troisième défi, créer ton propre composant.
      </div>
      <div class="content">
        <p>Le but de cet exercice est de creer ton propre composant.</p>
        <p>Celui-ci doit être accessible dans toute l'application</p>
        <p>ton composant devra faire apparaitre les valeurs présente dans l'objet donnée</p>
        <p>Les composant doit se situer dans le dossier "./_commons/" </p>
        <p>Aucun style imposé</p>
    </div>
  </div>
  <div class="body">
    <div class="left">
      <ul class="themes">
        Thèmes:
        <li>Components</li>
        <li>Configuration</li>
      </ul>
    </div>
    <div class="separator">
    </div>
    <div class="right">
    <app-my-sweet-component></app-my-sweet-component>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {

  },
  components: {
  }
}
</script>
<style>
</style>
