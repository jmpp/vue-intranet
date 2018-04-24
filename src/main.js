// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'

Vue.use(VueRouter)
Vue.use(Vuelidate)

import router from './router.js'

import App from './App'
import { age, dateFr, trim } from './filters/globalFilters.js'


Vue.config.productionTip = false

Vue.filter('age', age)
Vue.filter('dateFr', dateFr)
Vue.filter('trim', trim)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
