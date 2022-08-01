<template>
  <van-pull-refresh v-model="loading" @refresh="onRefresh">
    <div>首页</div>
    <div class="">
      <GlobalTest :msg="$globalUrl" :labels="[]"></GlobalTest>
    </div>
    <div class="">
      <van-button type="primary" @click="toastClick">van</van-button>
    </div>
    <p>刷新次数: {{ count }}</p>
    <div class="auto-prefixer">
      样式自动补全
      <input placeholder="请输入样式" />
    </div>
    <div class="px-2-rem">rem转换</div>
    <div class="">
      <button class="global-tool-btn">全局工具样式导入</button>
    </div>
  </van-pull-refresh>
</template>

<script lang="ts" setup>
// import { useRoute } from "vue-router";
import { Toast } from "vant";
// import { ref } from "vue";
const route = useRoute();
const loading = ref(false);
const count = ref(0);
const onRefresh = () => {
  setTimeout(() => {
    Toast("刷新成功");
    loading.value = false;
    count.value++;
  }, 1000);
};
const toastClick = () => {
  Toast("提示");
};
console.log("log");
console.warn("warn");
console.error("error");
</script>

<style scoped lang="scss">
.auto-prefixer {
  transform: translateX(30px);
  filter: blur(1px);
  input::placeholder {
    color: gray;
  }
}
.px-2-rem {
  width: 100px;
  height: 30px;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid gray;
}
.global-tool-btn {
  @include rmBtn();
  @include gradientBtn();
}
</style>
