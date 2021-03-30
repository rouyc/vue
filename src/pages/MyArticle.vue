<template>
  <div>
    <button class="btn waves-effect waves-light" type="submit" name="action" v-on:click="createArticle">
      Ajouter un article
    </button>
    <div class="row">
      <ArticleByUser v-for="article in myArticle"
                     v-bind:idArticle="article.idArticle"
                     v-bind:titreArticle="article.titreArticle"
                     v-bind:contenuArticle="article.contenuArticle"
                     v-bind:idUser="article.idUser"
                     v-bind:key="article.idArticle"
      />
    </div>
  </div>
</template>

<script>
import ArticleByUser from "../components/ArticleByUser";

export default {
  name: "MyArticle",
  components: {
    ArticleByUser,
  },
  computed: {
    myArticle() {
      return this.$store.state.articles.filter((article) => article.idUser == this.$store.state.idUser);
    },
  },
  methods: {
    createArticle() {
      this.$router.push({name: 'addarticle'});
    },
  },
  created() {
    this.$store.commit("loadArticles");
  }
}
</script>

<style scoped>
button {
  margin: 10px;
}
</style>