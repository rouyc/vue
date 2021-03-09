<template>
  <nav>
    <div class="nav-wrapper">
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li>
          <router-link to="/"> Home</router-link>
        </li>
        <li>
          <router-link to="/articles"> Articles</router-link>
        </li>
      </ul>
      <ul id="nav-mobile1" class="right hide-on-med-and-down">
        <li>
          <router-link to="/register"> Register</router-link>
        </li>
        <li>
          <router-link to="/login"> Login</router-link>
        </li>
      </ul>
    </div>
  </nav>
<!--  <div>
    Je suis le header
    <router-link to="/"> Home</router-link>
    <router-link to="/articles"> Articles</router-link>
    <router-link to="/register"> Register</router-link>
    <router-link to="/login"> Login</router-link>
  </div>-->
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
</style>