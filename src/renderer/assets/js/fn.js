/**
 * 全局公用方法（不分平台）
 */
export default {
  install (Vue, options) {
    Vue.prototype.fn = {
      /**
       * 登录
       * @method login
       */
      login: function () {
        console.log('login')
      }
    }
  }
}
