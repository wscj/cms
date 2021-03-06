/**
 * PC环境下的全局公用方法
 */
export default {
  install (Vue, options) {
    Vue.prototype.$pc = {
      /**
       * 弹出提示框
       * @method alert
       * @param  {string} msg 提示的消息文字
       */
      alert: function (msg) {
        // console.warn(process.env)
      },
      error (msg) {
        console.error(msg)
      }
    }
  }
}
