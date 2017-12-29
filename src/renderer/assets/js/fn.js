/**
 * 全局公用方法（不分平台）
 */
export default {
  install (Vue, options) {
    Vue.prototype.$fn = {
      /**
       * 登录
       * @method login
       * @param {object} axios
       * @param {string} account 帐号
       * @param {string} pwd 密码
       * @param {function} callback 回调函数
       */
      login: function (axios, account, pwd, callback) {
        axios.get('/api/login', { params: { account: account, pwd: pwd } })
          .then(resp => {
            console.log(666)
          })
      }
    }
  }
}
