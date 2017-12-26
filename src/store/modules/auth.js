import axios from 'axios'
import router from '@/router'
import {Message} from 'element-ui'
import * as types from '../mutation-types'

const state = {
  errorMessage : null
}

const getters = {
  errorMessage : state => errorMessage
}

const actions = {
  login({ commit }, { email, password }) {
    axios
      .post('/auth/signin', {
        email,
        password,
      })
      .then(({ data }) => {
        commit(types.SAVE_TOKEN, {
          token: data.data.token,
        })
      })
      .catch(error => {
        commit(types.SIGNIN_FAILURE, {
          message : error.response.data.message
        }) 
      })
  },
}

const mutations = {
  [types.SAVE_TOKEN](state, { token }) {
    console.log('login berhasil')
    const bearerToken = 'Bearer ' + token
    localStorage.setItem('token', bearerToken)
    axios.defaults.headers.common['Authorization'] = bearerToken
    router.push({name: 'todoPage'})
  },
  [types.SIGNIN_FAILURE](state, { message }) {
    state.errorMessage = message
    Message.error(message)
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
