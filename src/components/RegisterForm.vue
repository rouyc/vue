<template>
  <form>
    <div class="row">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s6">
            <input id="firstname" placeholder="Prénom" type="text" class="validate" v-model="prenom">
          </div>
          <div class="input-field col s6">
            <input id="lastname" placeholder="Nom" type="text" class="validate" v-model="nom">
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="email" placeholder="Email" type="email" class="validate" v-model="email">
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="password" placeholder="Mot de passe" type="password" class="validate" v-model="password">
          </div>
        </div>
        <div class="row">
          <div class="col s1">
            <button class="btn waves-effect waves-light" type="submit" name="action" v-on:click="submit">Inscription
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
  name: "RegisterForm",
  data() {
    return {
      prenom: '',
      nom: '',
      email: '',
      password: '',
    }
  },
  methods: {
    submit() {
      const data = {prenom: this.prenom, nom: this.nom, email: this.email, password: this.password}
      console.log(data)
      axios
          .post(
              "https://projet-node-rouy.herokuapp.com/register",
              {prenom: this.prenom, nom: this.nom, email: this.email, password: this.password},
              {'Content-Type': 'application/x-www-form-urlencoded'})
          .then(response => {
            console.log(response.data)
          })
          .catch(error => console.log(error));
    }
  }
};
</script>

<style scoped>
</style>