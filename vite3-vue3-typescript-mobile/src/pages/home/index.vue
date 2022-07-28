<template>
  <div>首页</div>
  <div class=''>
    <GlobalTest msg="test" :labels="[]"></GlobalTest>
  </div>
</template>

<script lang='ts' setup>
import { useRoute } from 'vue-router';

const route = useRoute()
</script>

<style scoped lang="scss">
</style>