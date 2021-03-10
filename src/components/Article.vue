<template>
  <div class="container">
    <div class="row">
      <div class="col s12 m6" v-for="article in articles" :key="article.id">
        <div class="card bluePerso" >
          <div class="card-content white-text">
            <span class="card-title">{{article.titreArticle}}</span>
            <p>{{article.contenuArticle}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Article",
  data() {
    return {
      articles: [
        {
          id : 1,
          titreArticle: 'tttttt',
          contenuArticle : 'TTTT'
        },
        {
          id : 2,
          titreArticle: 'aaaaa',
          contenuArticle : 'TTaaaaaTT'
        },
        {
          id : 3,
          titreArticle: 'af"fefefefaaaa',
          contenuArticle : 'TTaaefeffefeeffefefaaaTT'
        },
      ]
    }
  }
}
</script>

<style scoped>
.bluePerso{
  background-color: #1e56a0;
}
</style>