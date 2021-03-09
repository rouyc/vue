import Vue from 'vue'
import App from './App.vue'

import 'materialize-css/dist/css/materialize.min.css'


import VueRouter from "vue-router"

import Home from "./pages/Home"
import Article from "./pages/Article"
import Register from "./pages/Register"
import Login from "./pages/Login"

Vue.use(VueRouter);
Vue.config.productionTip = false

const routes = [
  { path: "/", component: Home },
  { path: "/articles", component: Article },
  { path: "/login", component: Login},
  { path: "/register", component: Register },
];

const router = new VueRouter({
  routes
});

new Vue({
  render: (h) => h(App),
  router
}).$mount('#app')
