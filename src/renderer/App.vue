<template>
  <div id="app">
    <router-view></router-view>
    <v-login v-if="!this.$store.state.Global.isLogined"></v-login>
  </div>
</template>

<script>
  import vLogin from './components/Login'
  export default {
    name: 'cms',
    components: {
      vLogin
    }
  }
</script>

<style scoped>
</style>
