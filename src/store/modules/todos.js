import axios from 'axios'
import * as types from '../mutation-types'

const state = {
  todos: [],
}

const getters = {
  todos: state => state.todos.slice().reverse(),
  completedTodos: state => state.todos.filter(todo => todo.completed),
  uncompletedTodos: state => state.todos.filter(todo => !todo.completed),
}

const actions = {
  getTodos({commit}) {
    axios
      .get('/todos')
      .then(({data}) => {
        commit(types.GET_TODOS, {
          todos: data.data,
        })
      })
      .catch(err => {
        commit(types.NOTIFY_ERROR, err.response.data.message, { root: true })
      })
  },
  addTodo({commit}, payload) {
    axios
      .post('/todos', payload)
      .then(({data}) => {
        commit(types.ADD_TODO, {
          todo: data.data,
        })
      })
      .catch(err => {
        commit(types.NOTIFY_ERROR, err.response.data.message, { root: true })
      })
  },
  removeTodo({commit}, {todo}) {
    commit(types.REMOVE_TODO, todo)
    axios
      .delete(`/todos/${todo._id}`)
      .then(({data}) => {
        commit(types.REMOVE_TODO, data.data)
      })
      .catch(err => {
        commit(types.NOTIFY_ERROR, err.response.data.message, { root: true })
      })
  },
  updateTodo({commit}, {todo, title}) {
    commit(types.UPDATE_TODO, {...todo, title})
    axios
      .put(`/todos/${todo._id}`, {title})
      .then(({data}) => {
        commit(types.UPDATE_TODO, data.data)
      })
      .catch(err => {
        commit(types.NOTIFY_ERROR, err.response.data.message, { root: true })
      })
  },
  markTodo({commit}, {todo, completed}) {
    commit(types.MARK_TODO, {...todo, completed})
    axios
      .put(`/todos/${todo._id}/mark`, {completed})
      .then(({data}) => {
        commit(types.MARK_TODO, data.data)
      })
      .catch(err => {
        commit(types.NOTIFY_ERROR, err.response.data.message, { root: true })
      })
  },
}

const mutations = {
  [types.GET_TODOS](state, {todos}) {
    state.todos = todos
  },
  [types.ADD_TODO](state, {todo}) {
    state.todos.push(todo)
  },
  [types.REMOVE_TODO](state, todo) {
    state.todos = state.todos.filter(item => todo._id !== item._id)
  },
  [types.UPDATE_TODO](state, todo) {
    state.todos = state.todos.map(item => {
      return item._id == todo._id ? todo : item
    })
  },
  [types.MARK_TODO](state, todo) {
    state.todos = state.todos.map(item => {
      return item._id == todo._id ? todo : item
    })
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
