<template>
  <form>
    <div class="row">
      <form class="col s12">
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
            <button class="btn waves-effect waves-light" type="submit" name="action" v-on:click="submit">Connexion </button>
          </div>
        </div>
      </form>
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginForm",
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    submit() {
      const bodyFormData = new URLSearchParams();
      bodyFormData.append("email", this.email);
      bodyFormData.append("password", this.password);

      axios
          .post(
              "https://projet-node-rouy.herokuapp.com/login",
              bodyFormData,
              {'Content-Type': 'application/x-www-form-urlencoded'})
          .then(response => {
            this.$store.dispatch("setId", response.data.id)
            this.$store.dispatch("setJWT", response.data.jwt)
            this.$router.push({ name: 'myarticle' });
          })
          .catch(error => {
            console.log(error)
            alert(`Error: ${error}`);
          });
    }
  }
};
</script>

<style>
</style>