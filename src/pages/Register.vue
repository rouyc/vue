<template>
  <div class="container">
    <div class="col s12 m8 l4">
      <div class="card bluePerso">
        <div class="card-content white-text">
          <span class="card-title">Inscription</span>
          <RegisterForm />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RegisterForm from "../components/RegisterForm";

export default {
  name: "Register",
  components: {
    RegisterForm
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