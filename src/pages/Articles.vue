<template>
  <div class="row">
    <Article v-for="article in articles"
             v-bind:idArticle="article.idArticle"
             v-bind:titreArticle="article.titreArticle"
             v-bind:contenuArticle="article.contenuArticle"
             v-bind:key="article.id"
    />
  </div>
</template>

<script>
import axios from "axios";
import Article from "../components/Article";

export default {
  name: "Articles",
  components: {
    Article,
  },
  data() {
    return {
      articles: []
    };
  },
  mounted() {
    axios
        .get("https://projet-node-rouy.herokuapp.com/articles")
        .then(response => this.articles = (response.data.data))
        .catch(error => console.log(error));
  },
}
</script>

<style scoped>
</style>