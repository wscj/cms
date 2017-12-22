import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import './assets/css/base.css'
import './assets/css/style.css'

const platformFn = process.env.IS_WEB ? require('./assets/js/fn-web.js') : require('./assets/js/fn-electron.js')
Vue.use(platformFn.default)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
