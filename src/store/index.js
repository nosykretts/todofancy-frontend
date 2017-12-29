import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions'
// import * as getters from './getters'
import mutations from './mutations'

import auth from './modules/auth'
import todos from './modules/todos'

Vue.use(Vuex)


const state = {
  notify : {
    message : '',
    type : ''
  }
}

const getters = {
  notify : state => state.notify
}

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  // actions,
  getters,
  mutations,
  state,
  modules: {
    auth,
    todos,
  },
  strict: true,
})
