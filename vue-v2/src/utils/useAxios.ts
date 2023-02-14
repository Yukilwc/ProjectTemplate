import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig } from "axios";
import { baseUrl } from "@/config/index";
import { useUserStore } from "@/stores/user";
import { reactive, ref } from "vue";

export function useAxios() {
  // TODO: 加新的状态合集
  const loading = ref(true);
  const messages = reactive({
    success: "成功",
    error: "失败",
  });
  const userStore = useUserStore();
  let instance: AxiosInstance;
  //   console.log("==========base url", baseUrl, userStore.token);
  const initAxios = () => {
    instance = axios.create({
      timeout: 10000,
      baseURL: baseUrl,
    });
  };
  initAxios();
  const tokenCheck = () => {};
  const jsonPost = async <R>(url: string, data: any) => {
    const config: AxiosRequestConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        sys_source: "",
        Authorization: userStore.token || "",
      },
    };
    let res = await instance.post<R>(url, data, config);
    return res.data;
  };
  const setMessages = (success: string, error: string) => {
    messages.success = success;
    messages.error = error;
  };
  //   带提示的标准化的接口调用
  const jsonPostMessage = () => {};
  return {
    jsonPost,
    initAxios,
  };
}
