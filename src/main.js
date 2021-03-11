import Vue from 'vue'
import Vuex from 'vuex'
// import axios from "axios"
import App from './App.vue'

import 'materialize-css/dist/css/materialize.min.css'


import VueRouter from "vue-router"

import Home from "./pages/Home"
import Articles from "./pages/Articles"
import Register from "./pages/Register"
import Login from "./pages/Login"

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.config.productionTip = false

const routes = [
    {path: "/", component: Home},
    {path: "/articles", component: Articles},
    {path: "/login", component: Login},
    {path: "/register", component: Register},
];

const router = new VueRouter({
    routes
});

const store = new Vuex.Store({/*state: {
        articles: [],
    },
    mutations: {
        loadArticles(state) {
            axios
                .get("https://projet-node-rouy.herokuapp.com/articles")
                .then(response => {
                    state.articles = [];
                    for (let i = 0; i < response.data.length; i++) {
                        console.log(response.data[i])
                    }
                })
                /!*.then(response => {
                    state.articles = [];
                    for (let i = 0; i < response.data.length; i++) {
                        state.articles.push(response.data[i])
                    }
                })*!/
                .catch(error => console.log(error));
        },
    }*/

})

new Vue({
    render: (h) => h(App),
    router,
    store
}).$mount('#app')
