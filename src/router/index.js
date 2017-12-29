import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import TodoList from '@/components/TodoList'
import LoginPage from '@/components/LoginPage'
import PrivacyPage from '@/components/PrivacyPage'
Vue.use(Router)

let commonRoute = [
  // {
  //   path: '/',
  //   name: 'homePage',
  //   component: Home,
  //   meta : {}
  // },
  {
    path: '/',
    name: 'loginPage',
    component: LoginPage,
    meta : {}
  },
  {
    path: '/privacypolicy',
    name: 'privacyPolicy',
    component: PrivacyPage,
    meta : {}
  },  
]

let authRoute = [
  {
    path: '/todo',
    name: 'todoPage',
    component: TodoList,
    meta: {}
  },
]

authRoute = authRoute.map(route => {
  route.meta.requireAuth = true
  return route
})

// commonRoute = commonRoute.map(route => {
  
//   return route
// })

const router = new Router({
  mode: 'history',
  routes: [
    ...authRoute,
    ...commonRoute
  ],
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(route => route.meta.requireAuth)){
    if(localStorage.getItem('token')){
      next()
    }else{
      next({name:'loginPage'})
    }
  }else{
    console.log('hai', to)
    if(to.name == 'loginPage'){
      if(localStorage.getItem('token')){
        next({name: 'todoPage'})
      }else{
        next()
      }
      
    }else{
      next()
    }
  }
})

export default router