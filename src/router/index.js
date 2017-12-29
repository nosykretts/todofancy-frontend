import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import TodoList from '@/components/TodoList'
import LoginPage from '@/components/LoginPage'
import RegisterPage from '@/components/RegisterPage'
Vue.use(Router)

let commonRoute = [
  {
    path: '/',
    name: 'loginPage',
    component: LoginPage,
    meta : {}
  },
  {
    path: '/register',
    name: 'registerPage',
    component: RegisterPage,
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

const router = new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },  
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