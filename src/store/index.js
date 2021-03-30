import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        idUser : "" ,
        jwt: "",
        articles: [],
    },
    mutations: {
        setId (state, idUser) {
            state.idUser = idUser
        },
        setJWT (state, jwt) {
            state.jwt = jwt
        },
        loadArticles(state) {
            axios
                .get("https://projet-node-rouy.herokuapp.com/articles")
                .then(response => {
                    state.articles = [];
                    for (let i=0; i<response.data.data.length; i++){
                        state.articles.push(response.data.data[i])
                        console.log(response.data)
                    }

                })
                .catch(error => console.log(error));
        }
    },
    actions: {
        setId(context, idUser) {
            context.commit('setId', idUser)
        },
        setJWT(context, jwt) {
            context.commit('setJWT', jwt)
        }
    }
});

export default store;