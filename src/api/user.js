import request from "@/utils/request";
/**
 *   登录
 * @param {Object} data loginName/password/mobile/code/clientToken/loginType/account
 * @returns promise
 */
export const login = (data) =>
  request({
    url: "/api/user-service/user/login",
    method: "POST",
    data,
  });

/**
 *  图片验证码
 * @param {Number} clientToken 请求随机数
 * @returns promise
 */
export const code = (clientToken) =>
  request({
    url: `/api/user-service/user/imageCode/${clientToken}`,
    responseType: "blob",
  });
