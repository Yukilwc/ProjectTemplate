import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

// TODO: 参数类型扩展

// TODO: 路由守卫

// TODO: 页面内监听路有变化

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("@/pages/home/index.vue"),
  },
  {
    path: "/second",
    component: () => import("@/pages/second/index.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect:'/',
    // component: () => import("@/pages/home/index.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    if (from.path === to.path) return;
    return { top: 0, behavior: "smooth" };
  },
});

export {
    router
}