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
    singleAccount: {},
  },
  mutations: {
    GET_ACCOUNTS(state, payload) {
      Vue.set(state, 'accounts', payload);
    },
    GET_ACCOUNT_BY_NAME(state, payload) {
      Vue.set(state, 'singleAccount', payload);
    },
    UPDATE_BALANCE(state, payload) {
      Vue.set(state.singleAccount, 'balance', parseInt(payload));
    },
    UPDATE_PERCENT(state, payload) {
      Vue.set(state.singleAccount.percentageByCategory, `${payload.category}`, parseFloat(payload.percent));
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
    async getAccountByName({ commit }, payload) {
      await axios
        .get(`${baseURI}/api/Account/${payload}`)
        .then(response => response.data)
        .then((account) => {
          commit('GET_ACCOUNT_BY_NAME', account);
        });
    },
    updateBalance({ commit }, payload) {
      commit('UPDATE_BALANCE', payload);
    },
    updatePercent({ commit }, payload) {
      commit('UPDATE_PERCENT', payload);
    },
    async saveEdits({ commit, state }) {
      await axios({
        method: 'post',
        url: `${baseURI}/api/Account/edit`,
        data: {
          Name: state.singleAccount.name,
          Balance: state.singleAccount.balance,
          PercentageByCategory: state.singleAccount.percentageByCategory,
        },
        referrer: 'no-referrer',
      })
        .then(response => response.data)
        .then((edited) => {
          console.log(edited);
        })
        .catch(ex => console.error(ex));
    },
  },
});
