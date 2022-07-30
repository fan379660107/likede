<template>
  <div id="app">
    <div class="login-container">
      <div class="login-form">
        <img src="./img/login.png" class="login-logo">
        <el-form
          label-width="auto"
          class="demo-ruleForm"
        >
          <el-form-item prop="pass">
            <el-input v-model="input" placeholder="请输入账号" el-icon-mobile class="input">
              <template #prefix>
                <i class="iconfont icon-shouji_o" />
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="pass">
            <el-input v-model="input" placeholder="请输入密码" el-icon-mobile class="input">
              <template #prefix>
                <i class="iconfont icon-suo" />
              </template>
              <template #suffix>
                <i v-if="CloseEyes" class="iconfont icon-guanbi-yanjing" />
                <i v-else class="iconfont icon-yanjing" />
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="pass">
            <el-input v-model="input" placeholder="请输入验证码" el-icon-mobile class="input">
              <template #prefix>
                <i class="iconfont icon-dunpai-" />
              </template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              @click="submitForm"
            >登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      CloseEyes: true
    }
  },
  methods: {
    submitForm() {

    }
  }
}
</script>

<style scoped lang="scss">
.login-container {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-image: url("./img/body.png");
  background-repeat: no-repeat;
  background-size: cover;
  .login-form {
    position: absolute;
    width: 518px;
    height: 388px;
    top: 50%;
    left: 50%;
    margin-top: -194px;
    margin-left: -259px;
    padding: 76px 35px 0;
    background: #fff;
    box-shadow: 0 3px 70px 0 rgb(30 111 72 / 35%);
    border-radius: 10px;
    .login-logo {
      position: absolute;
      width: 96px;
      height: 96px;
      top: -46px;
      left: 50%;
      margin-left: -48px;
    }
    .el-button--primary {
      width: 100%;
      height: 52px;
      background: linear-gradient(262deg, #2e50e1, #6878f0);
      opacity: 0.91;
      border-radius: 8px;
      color: #fff;
      text-shadow: 0 7px 22px #cfcfcf;
    }
  }
  .input {
    width: 450px;
    height: 50px;
  }
}
</style>
