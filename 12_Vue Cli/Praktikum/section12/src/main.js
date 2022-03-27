import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import VueRouter from "vue-router";

import Home from "@/views/Home.vue"
import About from "@/views/About.vue"

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
