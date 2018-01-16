<template>
  <div class="component1-container">
    <div class="texte">
      <p>Ceci est un premier composant, il contient du texte</p>
    </div>
    <div class="content-body">
      <p class="first">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p class="second">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </div>
</template>
<script>

export default {
  props: {

  },
  data () {
    return {

    }
  },
  components: {
  },
  computed: {

  },
  methods: {

  }
}
</script>
<style>
.component1-container {
  display: flex;
  flex-direction: column;
}
.texte {
  font-size: 1.2rem;
  font-weight: bold;
}
.content-body {
  padding: 50px;
}
</style>
