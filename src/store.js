import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import api from './utils/api.js'
import Errors from './utils/Errors.js'

Vue.use(Vuex)

const apiUrl = 'http://dashboardproto.app/api/v1'

const state = {

  user: {},
  loading: true,
}

const mutations = {

  setUser(state, user) {
    state.user = user;
  },
  

  updateUser(state, data) {
    state.user = Object.assign({}, state.user, data);
  },
  
  setLoading(state, isLoading = false) {
    state.loading = isLoading;
  }
}

const actions = {

  fetchUser(store, id) {

    return new Promise((resolve, reject) => {

      axios.get(`${apiUrl}/users/${id}`)
        .then(data => {
          store.commit('setLoading', false);
          //store.commit('setUser', data.data);
          resolve(data);
        })
        .catch(error => {
          store.commit('setLoading', false);
          console.dir(error);
          reject(error);
        });
    });
  },

  updateUser(store, data) {
    store.commit('updateUser', data);
  },

}

export default new Vuex.Store({

  strict: true,

  state,
  mutations,
  actions,

})
