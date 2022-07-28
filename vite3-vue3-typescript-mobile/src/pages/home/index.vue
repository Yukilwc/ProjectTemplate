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
</script>

<style scoped lang="scss"></style>
