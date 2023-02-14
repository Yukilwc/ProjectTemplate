// 双职责，提供路由数组，提供侧边栏

export const sideMenu = [
  {
    menuName: "菜单名字",
    path: "/menu",
    children: [
      {
        path: "home2", // 如果填入/home2,则在join时，会变成 /home2，不加斜线，则是/menu/home2
        name: "home2",
        menuName: "菜单名字",
        component: () => import("@/views/HomeView2.vue"),
      },
    ],
  },
];
