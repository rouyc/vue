<template>
  <div class="container">
    <div class="col s12 m8 l4">
      <div class="card bluePerso">
        <div class="card-content white-text">
          <span class="card-title">Connexion</span>
          <LoginForm />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from "../components/LoginForm";

export default {
  name: "Login",
  components: {
    LoginForm
  },
};
</script>

<style scoped>
.container{
  width: 25%;
}

.bluePerso{
  background-color: #1e56a0;
}
</style>