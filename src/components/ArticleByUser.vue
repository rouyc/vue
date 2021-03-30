<template>
  <div class="col s12 m6">
    <div class="card bluePerso" >
      <div class="card-content white-text">
        <span class="card-title">{{ titreArticle }}</span>
        <p>{{ contenuArticle }}</p>
        <button class="btn waves-effect waves-light" type="submit" name="action" v-on:click="updateArticle"> Modifier
        </button>
        <button class="btn waves-effect waves-light" type="submit" name="action" v-on:click="deleteArticle"> Supprimer
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MyArticle",
  props: {
    idArticle: Number,
    titreArticle: String,
    contenuArticle: String,
    idUser: Number,
  },
  methods: {
    updateArticle() {
      this.$router.push({ path: `/update-article/${this.idArticle}` });
    },
    deleteArticle() {
      axios
          .delete(
              "https://projet-node-rouy.herokuapp.com/delete-article/" + this.idArticle,
              {
                headers: {
                  'Authorization': 'Bearer ' + this.$store.state.jwt
                }
              })
          .then(response => {
            console.log(response)
            alert('Article supprimer')
          })
          .catch(error => {
            console.log(error)
            alert(`Error: ${error}`);
          });
    }
  },
}
</script>

<style scoped>
.bluePerso {
  background-color: #1e56a0;
}

button{
  margin: 10px;
}
</style>