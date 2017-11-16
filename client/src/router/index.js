import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
<<<<<<< HEAD
import Register from '@/components/Register'
=======
>>>>>>> fb5c493b2fab726465c75cc9e9b0fba89da940c4
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: Login
<<<<<<< HEAD
    },
    {
      path: '/register',
      name: 'register',
      component: Register
=======
>>>>>>> fb5c493b2fab726465c75cc9e9b0fba89da940c4
    }
  ]
})
