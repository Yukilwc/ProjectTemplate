<template>
  <div class="container">
    <div class="h1">动画测试</div>
    <div class="h2">吸顶sticky实验</div>
    <!-- <div class="content sticky-panel">
      <div class="left"></div>
      <div class="right"></div>
    </div> -->
    <div class="h2">tab切换的动画</div>
    <el-button @click="switchShow">switch</el-button>
    <div class="content transition">
      <transition name="name" mode="out-in">
        <div class="list" :key="key">
          <div class="item" v-for="(item, index) in test.list" :key="index">
            {{ item }}
          </div>
        </div>
      </transition>
    </div>
    <div class="h2">列表切换的动画</div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, onMounted, ref, reactive } from "vue";

export default defineComponent({
  components: {},
  setup() {
    onMounted(() => {
      //
    });
    let showList = ref(true);
    const switchShow = () => {
      //   showList.value = !showList.value;
      key.value++;
    };
    let key = ref(0);
    interface iTest {
      [propName: string]: any;
    }
    let test: iTest = reactive({
      list: [],
    });
    test.list = [
      "内容",
      "内容",
      "内容",
      "内容",
      "内容",
      "内容",
      "内容",
      "内容",
      "内容",
    ];
    return {
      showList,
      switchShow,
      test,
      key,
    };
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
.transition {
  min-height: 300px;
}
.name-enter-from {
  opacity: 0;
  transform: scale(0);
}
.name-enter-to,
.name-leave-from {
  opacity: 1;
  transform: scale(1);
}
.name-leave-to {
  opacity: 0;
  transform: scale(0);
}
.name-enter-active {
  transition: all 0.35s;
}
.name-leave-active {
  transition: all 0.35s;
}
</style>