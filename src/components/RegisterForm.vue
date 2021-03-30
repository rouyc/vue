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
      const bodyFormData = new URLSearchParams();
      bodyFormData.append("nom", this.nom);
      bodyFormData.append("prenom", this.prenom);
      bodyFormData.append("email", this.email);
      bodyFormData.append("password", this.password);

      axios
          .post(
              "https://projet-node-rouy.herokuapp.com/register",
              bodyFormData,
              {'Content-Type': 'application/x-www-form-urlencoded'})
          .then(response => {
            console.log(response)
            alert("Compte crée");
            this.$router.push({ name: 'login' });
          })
          .catch(error => {
            console.log(error)
            alert("Problème a la création du compte");
          });
    }
  }
};
</script>

<style scoped>
</style>