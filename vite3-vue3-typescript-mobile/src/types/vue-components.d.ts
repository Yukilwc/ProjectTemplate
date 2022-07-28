declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    GlobalTest: typeof import("@/components/GlobalTest.vue")["default"];
  }
}

export {}