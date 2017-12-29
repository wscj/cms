import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import fn from './assets/js/fn.js'
import pc from './assets/js/pc.js'
import './assets/css/base.css'
import './assets/css/style.css'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.prototype.$axios = axios
Vue.prototype.$axios.bind(Vue)
Vue.config.productionTip = false
Vue.use(pc)
Vue.use(fn)

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
