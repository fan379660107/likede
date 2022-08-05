// 导出一个axios的实例  而且这个实例要有请求拦截器 响应拦截器
import axios from "axios";
import { Message } from "element-ui";
import store from "@/store";
import { getTokenTime } from "./auth";
import router from "@/router";
function isTimeout() {
  const currentTime = Date.now();
  const tokenTime = getTokenTime();
  const timeout = 2 * 60 * 60 * 1000;
  return currentTime - tokenTime > timeout;
}
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
}); // 创建一个axios的实例
service.interceptors.request.use(async (config) => {
  if (store.state.user.token) {
    if (isTimeout()) {
      await store.dispatch("user/logout");
      router.push("/login");
      return Promise.reject(new Error("登录过期"));
    } else {
      config.headers.Authorization = store.state.user.token;
    }
  }
  return config;
}); // 请求拦截器
service.interceptors.response.use(
  (res) => {
    if (res.config.responseType === "blob") {
      return res;
    }
    if (res.data.success) {
      const { success, msg } = res.data;
      if (success) {
        return res.data;
      }
      Message.error(msg);
      return Promise.reject(new Error(msg));
    }
    return res;
  },
  async function (error) {
    if (error?.response?.status === 401) {
      Message.error("登录过期");
      await store.dispatch("user/logout");
      router.push("/login");
    } else {
      Message.error(error.message);
    }
    return Promise.reject(error);
  }
); // 响应拦截器
export default service; // 导出axios实例
