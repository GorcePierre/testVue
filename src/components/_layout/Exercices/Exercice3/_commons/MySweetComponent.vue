<template>
<div>
  <h1>{{donnee.title}}</h1>
  <h2>{{donnee.content}}</h2>
<div>{{donnee.question}}</div>

</div>
</template>
<script>
console.log(this);
export default {
  data() {
    return {
      donnee: {
        title: "Mon super composant",
        content: "je suis utilisable où tu veux",
        question: "Classe ou pas classe ?"
      }
    };
  },
  methods: {}
};
</script>
<style>

</style>


