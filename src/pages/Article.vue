<template>
    <div class="container">
      <div class="col s12 m8 l6">
        <div class="card bluePerso">
          <div class="card-content white-text">
            <span class="card-title">{{article.titreArticle }}</span>
            <p> {{article.contenuArticle}}</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: "Article",
  computed: {
      article() {
        return this.$store.state.articles.filter((articles) => articles.idArticle == this.$route.params.idArticle)[0]
    },
  },
};
</script>

<style scoped>
.container{
  width: 75%;
}

.bluePerso{
  background-color: #1e56a0;
}
</style>