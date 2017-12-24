import axios from 'axios'
import * as types from '../mutation-types'

const state = {}

const getters = {}

const actions = {
  login({ commit }) {
    axios
      .post('/auth/signin', {
        email: 'top.sick.red@gmail.com',
        password: '1234',
      })
      .then(({ data }) => {
        commit(types.SAVE_TOKEN, {
          token: data.data.token,
        })
      })
      .catch(console.error)
  },
}

const mutations = {
  [types.SAVE_TOKEN](state, { token }) {
    const bearerToken = 'Bearer ' + token
    localStorage.setItem('token', bearerToken)
    axios.defaults.headers.common['Authorization'] = bearerToken
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
