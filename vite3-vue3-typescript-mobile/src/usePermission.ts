import { Router } from "vue-router";

export function usePermission() {
  let router: Router | null = null;
  const initPermission = (routerInstance: Router) => {
    router = routerInstance;
    router.beforeEach((to, from) => {
      console.log("==========initPermission");
      return true;
    });
  };
  return {
    initPermission,
  };
}
