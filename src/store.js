import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(Vuex);
Vue.use(VueAxios, axios);

const baseURI = 'https://localhost:44367';

export default new Vuex.Store({
  state: {
    accounts: [],
  },
  mutations: {
    GET_ACCOUNTS(state, payload) {
      Vue.set(state, 'accounts', payload);
    },
  },
  actions: {
    async getAccounts({ commit }) {
      await axios
        .get(`${baseURI}/api/Account`)
        .then(response => response.data)
        .then((accounts) => {
          commit('GET_ACCOUNTS', accounts);
        });
    },
  },
});
