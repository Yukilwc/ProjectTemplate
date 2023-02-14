// axois基类封装，常规调用封装
// 使用class封装？还是直接导出方法?
// 考虑权限，通用url的刷新与注入,切换
// 核心问题1 如何动态化修改实例的auth，url等，同步到全局
// 核心问题2 如何导出其他配置的实例

import { baseUrl } from "@/config";
import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { useUserStore } from "@/stores/user";

class HttpClient {
  private instance: AxiosInstance;
  token: string =
    "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoie1wiY29ublR5cGVcIjpudWxsLFwic3lzVHlwZVwiOjQsXCJ1c2VySWRcIjo5NDM2OCxcIm9wZW5JZFwiOm51bGwsXCJ1c2VyTmFtZVwiOm51bGwsXCJuYW1lXCI6bnVsbCxcIm5pY2tOYW1lXCI6XCLluIPmnJflsLxCcm9ueWFcIixcInBsYXRmb3JtXCI6bnVsbCxcInBob25lTnVtYmVyXCI6XCIxODU3MTUwMTcyMVwiLFwicGFzc1dvcmRcIjpcImUxMGFkYzM5NDliYTU5YWJiZTU2ZTA1N2YyMGY4ODNlXCIsXCJlbWFpbFwiOlwiNTMxMTQ5Nzg1QHFxLmNvbVwiLFwiY29tcGFueUlkXCI6MSxcImNvbXBhbnlUeXBlXCI6bnVsbCxcImNvbXBhbnlOYW1lXCI6bnVsbCxcImxvZ29cIjpudWxsLFwidXNlckxldmVsXCI6bnVsbCxcInVzZXJUeXBlXCI6MixcInBlcm1pc3Npb25zXCI6bnVsbCxcImhlYWRQaWNcIjpcImh0dHBzOi8vdGhpcmR3eC5xbG9nby5jbi9tbW9wZW4vdmlfMzIvRFlBSU9ncTgzZXBrZXM3NElZUGliVE4zQzQyUkx3N0pJcjA0VUxNMFBRaWEwclA1Q1FCampjaWE2SHE3Mnh5YXJ0N3ZhckhpYncxTndFYTFpY1lrNTFBTU5CQS8xMzJcIixcImJpbmRNcFVzZUlkXCI6bnVsbCxcIm5hbWVDblwiOlwi5p2O5paH6LaFXCIsXCJuYW1lRW5cIjpcImxpd2VuY2hhb1wiLFwiYmxhY2tsaXN0RmxhZ1wiOjIsXCJjZXJ0aWZpY2F0aW9uU3RhdHVzXCI6MyxcInVuaW9uaWRcIjpudWxsfSIsImV4cCI6MjUzMzcwNzM2MDAwfQ.ccTQD4b7BVRRCf9vOAswz6MvS0TK473t5iqtnl8YuvQ";
  // token: string = ''
  constructor() {
    this.instance = axios.create();
  }
  // 基础的，非动态的配置
  init = () => {
    this.instance = axios.create({
      baseURL: this.baseUrlGet(),
    });
    return this;
  };
  baseUrlGet = () => {
    return baseUrl;
  };
  // 实时获取最新的
  tokenGet = () => {
    return this.token;
  };
  jsonPost = async <R = any, P = any>(url: string, data: P) => {
    const config: AxiosRequestConfig = {
      headers: {
        "Content-Type": "application/json",
        sys_source: "etransweb",
        Authorization: this.tokenGet(),
      },
    };
    try {
      let res = await this.instance.post<R>(url, data, config);
      return res.data;
    } catch (e) {
      console.error(e);
      return e as R;
    }
  };
}

const httpClient = new HttpClient().init();
export { httpClient };
