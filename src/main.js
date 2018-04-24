// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

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
  components: { App }
})
