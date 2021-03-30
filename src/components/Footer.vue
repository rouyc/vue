<template>
  <footer class="page-footer blue darken-4">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <img src="../assets/nodejs.png" alt="nodejs logo">
          <img src="../assets/vuejs.png" alt="vuejs logo">
          <p class="white-text">Projet réalisé dans le cadre de le licence APIDAE pour le cours de NodeJS et de VueJS</p>
        </div>
        <div class="col l4 offset-l2 s12">
          <h5 class="white-text">Liens Utiles</h5>
          <ul>
            <li><a class="grey-text text-lighten-3" href="https://github.com/rouyc/node" target="_blank">Code Source Node</a></li>
            <li><a class="grey-text text-lighten-3" href="https://github.com/rouyc/vue" target="_blank">Code Source Vue</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
        © 2020 Copyright
      </div>
    </div>
  </footer>
</template>

<script>
export default {
name: "Footer"
}
</script>

<style>
img{
  width: 75px;
  height: 75px;
  margin-left: 50px;
  margin-right: 50px;
}

footer{
  margin-top: 500px;
}
</style>