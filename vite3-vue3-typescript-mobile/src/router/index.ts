
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("@/pages/home/index.vue"),
    meta: {
      showNavbar: true,
    },
  },
  {
    path: "/second",
    component: () => import("@/pages/second/index.vue"),
    meta: {
      showNavbar: false,
    },
  },
  {
    path: "/router",
    component: () => import("@/pages/router/index.vue"),
    meta: {
      showNavbar: false,
    },
  },
 
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
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

export { router };