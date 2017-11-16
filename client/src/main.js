// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
<<<<<<< HEAD
import Panel from '@/components/globals/Panel'
Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.component('panel', Panel)
=======
Vue.config.productionTip = false

Vue.use(Vuetify)
>>>>>>> fb5c493b2fab726465c75cc9e9b0fba89da940c4
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
