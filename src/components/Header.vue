<template>
  <header>
    <nav class="blue darken-4">
      <div class="nav-wrapper">
        <ul class="left hide-on-med-and-down">
          <li>
            <router-link to="/"> Accueil</router-link>
          </li>
          <li>
            <router-link to="/articles"> Articles</router-link>
          </li>
        </ul>
        <ul class="right hide-on-med-and-down" v-if='this.$store.state.jwt == ""'>
          <li>
            <router-link to="/register"> Inscription</router-link>
          </li>
          <li>
            <router-link to="/login"> Connexion</router-link>
          </li>
        </ul>
        <ul class="right hide-on-med-and-down" v-if='this.$store.state.jwt != ""'>
          <li>
            <router-link to="/my-articles"> Gestion de mes articles</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>

</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
nav {
  color: black;
  background-color: #163172;
}
</style>