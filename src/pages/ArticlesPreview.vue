<template>
  <div class="row">
    <ArticlePreview v-for="article in articles"
             v-bind:idArticle="article.idArticle"
             v-bind:titreArticle="article.titreArticle"
             v-bind:contenuArticle="article.contenuArticle"
             v-bind:key="article.id"
    />
  </div>
</template>

<script>
import ArticlePreview from "@/components/ArticlePreview";

export default {
  name: "ArticlesPreview",
  components: {
    ArticlePreview,
  },
  data() {
    return {
      articles: []
    };
  },
  created() {
    this.$store.commit("loadArticles");
    this.articles = this.$store.state.articles;
  }
};
</script>

<style scoped>
</style>