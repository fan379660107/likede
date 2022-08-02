<template>
  <div id="app">
    <div class="login-container">
      <div class="login-form">
        <img src="./img/login.png" class="login-logo" />
        <el-form
          ref="loginForm"
          label-width="auto"
          class="demo-ruleForm"
          :model="loginForm"
          :rules="loginFormRules"
        >
          <!-- 表单区域 -->
          <el-form-item prop="loginName">
            <el-input
              v-model="loginForm.loginName"
              placeholder="请输入账号"
              el-icon-mobile
              @keydown.enter.native="submitForm"
            >
              <template #prefix>
                <i class="iconfont icon-shouji_o" />
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="loginForm.password"
              placeholder="请输入密码"
              el-icon-mobile
              :type="passwordType"
              @keydown.enter.native="submitForm"
            >
              <template #prefix>
                <i class="iconfont icon-suo" />
              </template>
              <template #suffix>
                <span @click="clearFn">
                  <i
                    v-if="CloseEyes"
                    class="iconfont icon-guanbi-yanjing yanjing"
                  />
                  <i v-else class="iconfont icon-yanjing yanjing" />
                </span>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="code">
            <el-input
              v-model="loginForm.code"
              placeholder="请输入验证码"
              el-icon-mobile
              @keydown.enter.native="submitForm"
            >
              <template #prefix>
                <i class="iconfont icon-dunpai-" />
              </template>
              <template #suffix>
                <img :src="imgBanner" class="imgclass" @click="imgFn" />
              </template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm" :loading="isloading"
              >登录</el-button
            >
          </el-form-item>
          <!-- 表单区域 -->
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { code } from "@/api/user";
export default {
  data() {
    return {
      loginForm: {
        loginName: "admin",
        password: "admin",
        code: "",
        loginType: 0,
        clientToken: "",
      },
      loginFormRules: {
        loginName: [
          { required: true, message: "请输入账号", trigger: "blur" },
          {
            pattern: /^[a-zA-Z]+$/,
            message: "账号格式不正确",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            pattern: /^[a-zA-Z]+$/,
            message: "密码格式不正确",
            trigger: "blur",
          },
        ],
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
      },
      CloseEyes: true, // 切换闭眼睁眼变量
      passwordType: "password", // input 类型切换变量
      imgBanner: "", // 验证码图片
      timer: null, //节流阀
      isloading: false, //loading事件
    };
  },
  created() {
    this.imgFn();
  },
  methods: {
    //登录
    async submitForm() {
      this.isloading = true;
      try {
        await this.$refs.loginForm.validate();
        await this.$store.dispatch("user/getToken", this.loginForm);
        this.$router.push("/");
        this.$message.success("登录成功");
      } finally {
        this.isloading = false;
      }
    },
    //验证码
    async imgFn() {
      if (this.timer) return;
      this.timer = setTimeout(async () => {
        this.loginForm.clientToken = Math.random() * 10;
        const { data } = await code(this.loginForm.clientToken);
        this.imgBanner = URL.createObjectURL(data);
        this.timer = null;
      }, 1000);
    },
    //登录表单眼睛闭合
    clearFn() {
      this.CloseEyes = !this.CloseEyes;
      this.passwordType =
        this.passwordType === "password" ? "text" : "password";
    },
  },
};
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
    ::v-deep.el-input__prefix {
      text-align: center;
      left: 5px;
      margin-top: 5px;
      width: 20px;
      .icon-shouji_o {
        font-size: 27px;
        text-align: center;
      }
      .icon-suo {
        font-size: 20px;
      }
      .icon-dunpai- {
        font-size: 20px;
      }
    }
    ::v-deep.el-input__suffix {
      right: 10px;
      margin-top: 8px;
      .yanjing {
        font-size: 16px;
      }
    }
    .imgclass {
      position: absolute;
      top: -7px;
      right: -11px;
      width: 125px;
      height: 48px;
      background-color: #fff;
      border-right: 1px solid #c6c6c6;
    }
  }
  ::v-deep.el-input__inner {
    height: 50px;
    width: 450px;
    text-indent: 8px;
  }
}
</style>
