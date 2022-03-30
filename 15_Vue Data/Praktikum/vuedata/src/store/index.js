import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        listNewsapi: [],
    },
    mutations: {
        setListNewsapi(state, payload){
            state.listNewsapi = payload;
        }
    },
    actions: {
        fetchNewsapi(store){
            axios.get("https://newsapi.org/v2/everything?q=tesla&from=2022-02-28&sortBy=publishedAt&apiKey=9fbc85d34a6447bfbf3329b95fdab973").then((response) => {
                console.log("response", response);
                store.commit("setListNewsapi", response.data.results);
            });
        },
    },
    modules: {},
});