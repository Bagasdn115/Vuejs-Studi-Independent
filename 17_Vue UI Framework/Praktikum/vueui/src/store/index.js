import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const state = () => ({
    list: [],
})

const mutations = {
    setList(state, param) {
        state.list = param;
    },
};

const actions = {
    fetchList(store) {
        axios.get('https://newsapi.org/v2/everything?q=tesla&from=2022-03-06&sortBy=publishedAt&apiKey=9fbc85d34a6447bfbf3329b95fdab973').
        then((response) => {
            console.warn(response)
            store.commit("setLis", response.data.results);
        });
    },
};

export default {
    state,
    mutations,
    actions,
}