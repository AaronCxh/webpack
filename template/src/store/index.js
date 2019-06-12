import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as mutations from './mutations'


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