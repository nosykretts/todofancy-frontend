import axios from 'axios'
import * as types from '../mutation-types'

const state = {
  todos: [{
    title : 'halo'
  },{
    title : 'bandung'
  }],
}

const getters = {
  todos: state => state.todos,
}

const actions = {
  getTodos({ commit }) {
    axios
      .get('/todos')
      .then(({ data }) => {
        console.table(data.data)
        commit(types.GET_TODOS, { 
          todos : data.data
        })
      })
      .catch(console.error)
  },
}

const mutations = {
  [types.GET_TODOS](state, { todos }) {
    state.todos = todos
  },

}

export default {
  state,
  getters,
  actions,
  mutations,
}
