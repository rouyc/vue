<template>
  <div class="container">
    <p> Projet Node | Vue ROUY Clément et BEC Pierre </p>
  </div>
</template>

<script>
export default {
  name: "Home",
  created() {
    this.$store.commit("loadArticles");
  }
};
</script>

<style>
</style>