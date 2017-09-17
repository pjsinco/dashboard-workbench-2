import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {

  user: {


  },

}

const mutations = {

  setUser(state, user) {
    state.user = user;
  },

}

const actions = {

  getUser(store, id) {

    return new Promise((resolve, reject) => {

      axios.get('http://dashboardproto.app/api/v1/doctor/' + id)
        .then(data => {
          store.commit('setUser', data.data);
          resolve();
        })
        .catch(error => {
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
