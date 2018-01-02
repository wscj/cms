import Vue from 'vue'
import axios from 'axios'
import conf from '../../../conf.js'

Vue.prototype.$axios = axios
Vue.prototype.$axios.bind(Vue)

// 统一出口
axios.interceptors.request.use(function (config) {
  config.url = conf.domain + config.url
  return config
}, function (error) {
  return Promise.reject(error)
})
