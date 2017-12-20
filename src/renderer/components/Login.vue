<template>
  <div class="login">
    <div class="container"></div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {}
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
  .container {
    width: 700px;
    height: 480px;
    background: url('../assets/img/login_bg.png') no-repeat;
    background-position: bottom;
    background-color: #22252e;
  }
}
</style>
