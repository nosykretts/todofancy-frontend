import axios from 'axios'
import router from '@/router'
import { Message } from 'element-ui'
import * as types from '../mutation-types'

const state = {
  errorMessage: null,
  isLoggedIn: localStorage.getItem('token') !== null ? true : false,
}

const getters = {
  isLoggedIn: state => state.isLoggedIn,
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
      .catch(err => {
        commit(types.NOTIFY_ERROR, err.response.data.message, { root: true })
      })
  },
  loginWithFacebook({ commit }, payload) {
    axios
      .post('/auth/signinfacebook', payload)
      .then(({ data }) => {
        commit(types.SAVE_TOKEN, {
          token: data.data.token,
        })
      })
      .catch(err =>{
        commit(types.NOTIFY_ERROR, err.response.data.message, { root: true })
      })
  },
}

const mutations = {
  [types.SAVE_TOKEN](state, { token }) {
    console.log('save token berhasil')
    state.isLoggedIn = true
    localStorage.setItem('token', 'Bearer ' + token)
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
    router.push({ name: 'todoPage' })
  },
  [types.SIGNIN_FAILURE](state, { message }) {
    state.errorMessage = message
    Message.error(message)
  },
  [types.USER_LOGOUT](state) {
    localStorage.removeItem('token')
    state.isLoggedIn = false
    FB.logout()
    axios.defaults.headers.common['Authorization'] = 'Bearer jwt'
    router.push({ name: 'loginPage' })
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
