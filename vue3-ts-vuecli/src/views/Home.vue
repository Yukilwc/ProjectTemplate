<!--
 * @Author: 李文超
 * @Date: 2021-05-10 09:17:54
 * @LastEditors: 李文超
 * @LastEditTime: 2021-05-10 09:23:05
 * @Description: file content
 * @FilePath: \library\通用库\ProjectTemplate\vue3-ts-vuecli\src\views\Home.vue
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <el-button type="primary">测试按钮</el-button>
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from "vue";
// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld: defineAsyncComponent(
      () => import("@/components/HelloWorld.vue")
    ),
  },
});
</script>
