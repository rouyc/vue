<template>
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
            <button class="btn waves-effect waves-light" type="submit" name="action" v-on:click="add">Ajouter article
            </button>
          </div>
        </div>
      </form>
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "AddArticleForm",
  data() {
    return {
      titre: '',
      contenu: '',
    }
  },
  methods: {
    add() {
      const bodyFormData = new URLSearchParams();
      bodyFormData.append("title", this.titre);
      bodyFormData.append("content", this.contenu);
      bodyFormData.append("idUser", this.$store.state.idUser);

      axios
          .post(
              "https://projet-node-rouy.herokuapp.com/add-article",
              bodyFormData,
              {
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
                  'Authorization': 'Bearer ' + this.$store.state.jwt
                }
              })
          .then(response => {
            console.log(response.data)
            alert(`Article crée`);
            this.$router.push({name: 'myarticle'});
          })
          .catch(error => {
            console.log(error)
            alert(`Error: ${error}`);
          });

    }
  }
}
</script>

<style scoped>

</style>