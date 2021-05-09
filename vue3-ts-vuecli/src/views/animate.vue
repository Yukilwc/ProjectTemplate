<template>
  <div class="container">
    <div class="h1">动画测试</div>
    <div class="h2">吸顶sticky实验</div>
    <div class="content sticky-panel">
      <div class="left"></div>
      <div class="right"></div>
    </div>
    <div class="h2">tab切换的动画</div>
    <div class="h2">列表切换的动画</div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  components: {},
  setup() {
    onMounted(() => {
      //
    });
    return {};
  },
});
</script>

<style scoped lang="scss">
.container {
  position: relative;
  min-height: 1000vh;
}
.sticky-panel {
  display: flex;
  justify-content: space-between;
  .left {
    border: 1px solid red;
    width: 800px;
    height: 500px;
  }
  .right {
    border: 1px solid red;
    width: 300px;
    height: 200px;
    position: sticky;
    top: 0;
  }
}
</style>