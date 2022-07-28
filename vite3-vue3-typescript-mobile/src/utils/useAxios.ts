import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { baseUrl } from "@/config/index";
import { useUserStore } from "@/store/user";

export function useAxios() {
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
  return {
    jsonPost,
    initAxios,
  };
}
