<script lang="ts" setup>
import * as echarts from "echarts";
import type { ECBasicOption } from "echarts/types/src/util/types.js";
import { onMounted, ref } from "vue";
let demo1Node = ref<HTMLElement>();

/** 
 * 构成要素：绘制的主区域，tooltip面板，legend图例。单个tooltip和legend，与series数组的一个元素关联。
 * 什么叫series系列？为什么会是一个数组？
 * 需要知道visualMap的详解
 * */ 
let options = {
  tooltip: {
    formatter: "{a} <br/>{b} : {c}%",
  },
  series: [
    {
      name: "Name key",
      type: "gauge",
      progress: {
        show: true,
      },
      detail: {
        valueAnimation: true,
        formatter: "{value}",
      },
      data: [
        {
          value: 50,
          name: "data name",
        },
      ],
    },
  ],
} as ECBasicOption;
onMounted(() => {
  let myChart = echarts.init(demo1Node.value);
  myChart.setOption(options);
});
</script>

<template>
  <div>简单仪表盘</div>
  <div class="node" ref="demo1Node"></div>
</template>

<style scoped lang="scss">
.node {
  width: 600px;
  height: 600px;
}
</style>
