// 导出一个axios的实例  而且这个实例要有请求拦截器 响应拦截器
import axios from "axios";
import { Message } from "element-ui";
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
}); // 创建一个axios的实例
service.interceptors.request.use(); // 请求拦截器
service.interceptors.response.use(
  (res) => {
    if (res.config.responseType === "blob") {
      return res;
    }
    const { success, msg } = res.data;
    if (success) {
      return res.data;
    }
    Message.error(msg);
    return Promise.reject(new Error(msg));
  },
  function (error) {
    Message.error("系统异常");
    return Promise.reject(error);
  }
); // 响应拦截器
export default service; // 导出axios实例
