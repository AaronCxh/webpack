import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'

import order from './modules/order'

Vue.use(Vuex)


const debug = process.env.NODE_ENV !== 'production'

const state = {
  mylogin: true
}

const store = new Vuex.Store({
  state,
  actions,
  mutations,
  modules: {
    order
  },
  strict: debug,
})


export default store;