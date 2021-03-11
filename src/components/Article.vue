<template>
  <div class="col s12 m6">
    <div class="card bluePerso" >
      <div class="card-content white-text">
        <span class="card-title">{{ titreArticle }}</span>
        <p>{{ contenuArticle }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Article",
  props: {
    idArticle: Number,
    titreArticle: String,
    contenuArticle: String
  }
}
</script>

<style scoped>
.bluePerso {
  background-color: #1e56a0;
}
</style>