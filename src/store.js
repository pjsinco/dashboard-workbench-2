import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import api from './utils/api.js'
import Errors from './utils/Errors.js'

Vue.use(Vuex)

const apiUrl = 'http://dashboardproto.app/api/v1'

const state = {

//  user: {
//    id: '',
//    name: '',
//    password: '',
//    first_name: '',
//    middle_name: '',
//    last_name: '',
//    suffix: '',
//    designation: '',
//    email: '',
//    website: '',
//    home_addr_1: '',
//    home_addr_2: '',
//    home_city: '',
//    home_state: '',
//    home_zip: '',
//    home_phone: '',
//    bus_addr_1: '',
//    bus_addr_2: '',
//    bus_city: '',
//    bus_state: '',
//    bus_zip: '',
//    bus_phone: '',
//    aoa_id: '',
//    status: '',
//    paid_thru: '',
//    member_type: '',
//  },

  user: {},
  loading: true,

  errors: new Errors(),
}

const mutations = {

  setUser(state, user) {
    state.user = user;
  },
  
  setError(state, errors) {
    state.errors = new Errors(Object.assign({}, state.errors, errors))
  },

  

  updateUser(state, data) {
    state.user = Object.assign({}, state.user, data);
  },
  
  setLoading(state, isLoading = false) {
    state.loading = isLoading;
  }
}

const actions = {

  setError(store, errors) {
    store.commit('setError', errors)
  },

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

//  updateUser(store, id, data) {
//
//    return new Promise((resolve, reject) => {
//
//      axios.post(`${apiUrl}/users/${id}`, data)
//        .then(data => {
//          debugger
//          resolve();
//        })
//        .catch(error => {
//          debugger
//          reject(error)
//        })
//      
//
//    });

//  }
}

export default new Vuex.Store({

  strict: true,

  state,
  mutations,
  actions,

})
