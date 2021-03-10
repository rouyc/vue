<template>
  <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <input id="password" type="password" class="validate">
          <label for="password">Mot de passe</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="email" type="email" class="validate">
          <label for="email">Email</label>
        </div>
      </div>
      <div class="row">
        <div class="col s1">
          <a class="waves-effect waves-light btn" onclick="">Connexion</a>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
};
</script>

<style>
</style>