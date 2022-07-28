<template>
  <div>首页</div>
  <div class=''>
    <GlobalTest :msg="$globalUrl" :labels="[]"></GlobalTest>
  </div>
  <div class=''>
    <van-button type="primary">van</van-button>
  </div>
</template>

<script lang='ts' setup>
import { useRoute } from 'vue-router';

const route = useRoute()
</script>

<style scoped lang="scss">
</style>