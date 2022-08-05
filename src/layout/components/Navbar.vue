<template>
  <div class="navbar">
    <div class="right-menu">
      <div class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img :src="image" class="user-avatar" v-imgError="defaultImg" />
          <span>欢迎您，{{ userInfo.userName }}</span>
          <div @click="logout" class="logout">
            <span style="display: block">退出</span>
            <i class="el-icon-caret-bottom" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, createNamespacedHelpers } from "vuex";
import Breadcrumb from "@/components/Breadcrumb";
import Hamburger from "@/components/Hamburger";
import defaultImg from "@/assets/user.jpg";
const { mapState: mapUserState } = createNamespacedHelpers("user");
export default {
  data() {
    return {
      defaultImg,
    };
  },
  components: {
    Breadcrumb,
    Hamburger,
  },
  computed: {
    ...mapGetters(["sidebar", "avatar"]),
    ...mapUserState(["userInfo"]),
    image() {
      if (!this.userInfo.image) {
        return this.userInfo.image + 123;
      }
      return this.userInfo.image;
    },
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch("app/toggleSideBar");
    },
    async logout() {
      await this.$store.dispatch("user/logout");
      this.$router.push(`/login?redirect=${this.$route.fullPath}`);
    },
  },
  created() {},
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 60px;
  overflow: hidden;
  position: relative;
  // background: #fff;
  background-image: url("./img/navbar.png");
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;
        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;
      .avatar-wrapper {
        position: relative;
        display: flex;
        align-items: center;
        color: #fff;
        span {
          margin: 7px;
        }
        .logout {
          margin-left: 7px;
          cursor: pointer;
        }
        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -10px;
          top: 40%;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
