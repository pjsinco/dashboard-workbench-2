import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {

  user: {},
  loading: true,
}

const mutations = {

  setUser(state, user) {
    state.user = user;
  },

  setLoading(state, isLoading = false) {
    state.loading = isLoading;
  }
}

const actions = {

  getUser(store, id) {

    return new Promise((resolve, reject) => {

      axios.get('http://dashboardproto.app/api/v1/doctors/' + id)
        .then(data => {
          store.commit('setLoading', false);
          store.commit('setUser', data.data);
          resolve();
        })
        .catch(error => {
          store.commit('setLoading', false);
          console.dir(error);
          reject(error);
        });
    });
  }
}

export default new Vuex.Store({

  state,
  mutations,
  actions,

})
