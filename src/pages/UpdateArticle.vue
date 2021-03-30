<template>
  <div class="container">
    <div class="col s12 m8 l4">
      <div class="card bluePerso">
        <div class="card-content white-text">
          <span class="card-title">Modifier un article</span>
          <form>
            <div class="row">
              <form class="col s12">
                <div class="row">
                  <div class="input-field col s12">
                    <input id="titre" placeholder="Titre" type="text" v-model="titre">
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12">
                    <textarea id="contenu" placeholder="Contenu" type="text" v-model="contenu"></textarea>
                  </div>
                </div>
                <div class="row">
                  <div class="col s1">
                    <button class="btn waves-effect waves-light" type="submit" name="action" v-on:click="update">
                      Modifier article
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UpdateArticle",
  data() {
    return {
      titre: "",
      contenu: "",
      generateId:"",
      idAuteur: ""
    }
  },
  methods: {
    update() {
      const bodyFormData = new URLSearchParams();
      bodyFormData.append("title", this.titre);
      bodyFormData.append("content", this.contenu);

      if (this.idAuteur == this.$store.state.idUser){
        axios
            .put(
                "https://projet-node-rouy.herokuapp.com/put-article/" + this.generateId,
                bodyFormData,
                {
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Bearer ' + this.$store.state.jwt
                  }
                })
            .then(response => {
              console.log(response.data)
              alert(`Article modifié`);
              this.$router.push({name: 'myarticle'});
            })
            .catch(error => {
              console.log(error)
              alert(`Error: ${error}`);
            });
      }
      else{
        alert(`Vous ne pouvez pas modifier cette article il ne vous appartient pas`);
      }


    },
  },
  created() {
    this.generateId = this.$store.state.articles.filter((articles) => articles.idArticle == this.$route.params.idArticle)[0]._id
    this.idAuteur = this.$store.state.articles.filter((articles) => articles.idArticle == this.$route.params.idArticle)[0].idUser
  }
};
</script>

<style scoped>
.container {
  width: 50%;
}

.bluePerso {
  background-color: #1e56a0;
}
</style>