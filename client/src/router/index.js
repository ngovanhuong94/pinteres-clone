import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import Winboard from '@/components/Winboard'
import Recents from '@/components/Recents'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Signup
    },
    {
      path: '/winboard',
      name: 'winboard',
      component: Winboard
    },
    {
      path: '/recents',
      name: 'recents',
      component: Recents
    },
    {
      path: '*',
      redirect: 'recents'
    }
  ]
})
