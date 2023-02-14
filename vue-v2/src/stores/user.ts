import { defineStore } from "pinia";
import { reactive } from "vue";
import { useCookies } from "@vueuse/integrations/useCookies";
const USER_STATE_TOKEN_KEY = "user_state_token_key";

let cookies = useCookies([USER_STATE_TOKEN_KEY]);
export const useUserStore = defineStore("user", {
  state: () => ({
    name: "",
    token: "",
  }),
  getters: {
    hasLogin: (state) => {
      if (state.token) return true;
      else return false;
    },
  },
  actions: {
    loginByPw() {
      this.name = "name";
      this.token = "123456";
      this.state2Cookies();
    },
    state2Cookies() {
      cookies.set(USER_STATE_TOKEN_KEY, this.token, {
        expires: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
      });
    },
    loadUserInfoFromBrowser() {
      let userStateJson = cookies.get(USER_STATE_TOKEN_KEY);
      if (userStateJson) {
        this.token = userStateJson;
        setTimeout(() => {
          this.name = "name";
        }, 1000);
      }
      console.log("==========loadUserInfoFromBrowser", userStateJson);
    },
    logout() {
      this.$reset();
      this.state2Cookies();
    },
  },
});
