// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import Vuex from 'vuex'
import axios from 'axios'
import VueTouch from 'vue-touch';
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/reset.css'
import router from './router'
import store from './store'
import App from './components/App'
// import TodoList from './components/TodoList'
Vue.use(VueTouch);
Vue.config.productionTip = false

axios.defaults.baseURL = 'http://api.fajarpatappari.tk:3000/api';
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')

Vue.use(Vuex)
Vue.use(ElementUI, {size: 'large'})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
  // template: '<App/>',
  // components: { App },
})
