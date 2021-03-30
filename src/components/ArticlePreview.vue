<template>
  <div class="col s12 m6">
    <div class="card bluePerso" >
      <div class="card-content white-text">
        <span class="card-title">{{ titreArticle }}</span>
        <button class="btn waves-effect waves-light" type="submit" name="action" v-on:click="article">Voir plus
        </button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "ArticlePreview",
  props: {
    idArticle: Number,
    titreArticle: String,
    contenuArticle: String,
    idUser : Number,
  },
  methods: {
    article() {
      this.$router.push({ path: `/article/${this.idArticle}` });
    }
  }
}
</script>

<style scoped>
.bluePerso {
  background-color: #1e56a0;
}
</style>