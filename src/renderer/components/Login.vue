<template>
  <div class="login">
    <div class="container">
      <div class="title">
        <img src="../assets/img/github.png">
        <span>躲猫猫</span>
      </div>
      <div class="content">
        <div class="inputs">
          <p>用户登录</p>
          <div class="account">
            <v-input
              :class="'icon-password'"
              :emptyText="'输入帐号'"
              :focus="'autofocus'"
              @changeValue="changeAccount"></v-input>
          </div>
          <div class="pwd">
            <v-input
              :type="'password'"
              :class="'icon-lock'"
              :emptyText="'输入密码'"
              @changeValue="changePwd"></v-input>
          </div>
          <div class="checkbox">
            <div class="remember-pwd">
              <input type="checkbox" id="remember_pwd">
              <label class="icon-unchecked" for="remember_pwd">记住密码</label>
            </div>
            <div class="auto-login">
              <input type="checkbox" id="auto_login">
              <label class="icon-unchecked" for="auto_login">自动登录</label>
            </div>
          </div>
          <div class="btn">
            <input type="button" value="登录" @click="login">
          </div>
          <div class="forgot">
            <a href="">忘记密码？</a>
          </div>
        </div> 
      </div>
      <span class="icon-Exits close" @click="close"></span>
    </div>
  </div>
</template>

<script>
import vInput from './common/Input'
export default {
  data () {
    return {
      account: '',
      pwd: ''
    }
  },
  components: {
    vInput
  },
  methods: {
    close () {
      this.$store.commit('SET_LOGIN')
    },
    login () {
      this.$fn.login(this.$axios, this.account, this.pwd)
    },
    changeAccount (newValue, oldValue) {
      this.account = newValue
    },
    changePwd (newValue, oldValue) {
      this.pwd = newValue
    }
  }
}
</script>

<style scoped lang="scss">
.login {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .5);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #666;
  user-select: none;
  .container {
    width: 700px;
    height: 480px;
    background: url('../assets/img/login_bg.png') no-repeat;
    background-position: bottom;
    background-color: #22252e;
    display: flex;
    flex-direction: column;
    position: relative;
    .title {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 110px;
      img {
        width: 40px;
        height: 40px;
        margin-right: 8px;
      }
      span {
        font-size: 23px;
        color: #fff;
        margin-left: 8px;
      }
    }
    .content {
      background-color: #22252e;
      flex: 1;
      .inputs {
        width: 318px;
        height: 300px;
        background: #fff;
        margin: 0 auto;
        border-radius: 8px;
        p {
          font-size: 18px;
          color: #0f56a9;
          text-align: center;
          line-height: 60px;
        }
        .pwd,
        .account {
          padding: 6px 34px;
        }
        .checkbox {
          padding: 2px 34px;
          overflow-y: hidden;
          input {
            position: fixed;
            left: -9999px;
          }
          label {
            position: relative;
            padding-left: 20px;
            user-select: none;
            cursor: pointer;
          }
          label:before {
            position: absolute;
            top: 1px;
            left: 0;
          }
          input:checked + label:before {
            content: '\e982';
          }
          .remember-pwd {
            float: left;
          }
          .auto-login {
            float: right;
          }
        }
        .btn {
          margin: 16px 34px 8px;
          input {
            width: 100%;
            height: 42px;
            border-radius: 6px;
            border: none;
            background: #0f56a9;
            font-size: 18px;
            color: #fff;
            cursor: pointer;
          }
          input:hover {
            background: #226abf;
          }
        }
        .forgot {
          text-align: center;
          a {
            display: inline-block;
            color: #999;
          }
          a:hover {
            color: #1d74d9;
          }
        }
      }
    }
    .close {
      color: #999;
      position: absolute;
      top: 12px;
      right: 12px;
      display: block;
      width: 22px;
      height: 22px;
      font-size: 22px;
      cursor: pointer;
    }
    .close:hover {
      color: #fff;
    }
  }
}
</style>
