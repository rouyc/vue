import Home from "../pages/Home"
import ArticlesPreview from "../pages/ArticlesPreview"
import Article from "../pages/Article"
import Register from "../pages/Register"
import Login from "../pages/Login"
import MyArticle from "../pages/MyArticle"
import AddArticle from "../pages/AddArticle";
import UpdateArticle from "../pages/UpdateArticle";

import Vue from "vue";
import VueRouter from "vue-router"

Vue.use(VueRouter);

const routes = [
    {path: "/", name: "home", component: Home},
    {path: "/articles", name: "allarticlespreview", component: ArticlesPreview},
    {path: "/article/:idArticle", name: "article", component: Article},
    {path: "/my-articles", name: "myarticle", component: MyArticle},
    {path: "/add-article", name: "addarticle", component: AddArticle},
    {path: "/update-article/:idArticle", name: "updatearticle", component: UpdateArticle},
    {path: "/login", name: "login", component: Login},
    {path: "/register", name: "register", component: Register},
];

const router = new VueRouter({
    routes
});

export default router;