import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";

export const useProfileStore = defineStore("profile", () => {
  const themeColor = ref("#2a9d8f");
  const navbarInfo = reactive({
    id: 1,
    height: "80",
  });
  const navbarHeight = computed(() => {
    return navbarInfo.height + "px";
  });
  const changeTheme = (color: string) => {
    themeColor.value = color;
  };
  return {
    navbarInfo,
    navbarHeight,
    themeColor,
    changeTheme
  };
});
