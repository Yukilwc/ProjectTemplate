<script setup lang="ts">
import { defineAsyncComponent } from "vue";

let Gauge1 = defineAsyncComponent(() => import("./gauge/Gauge1.vue"));
</script>

<template>
  <div class="">
    <div class="demo">
      <div class="ctnr">
        <Gauge1></Gauge1>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.demo-1 {
  .ctnr {
  }
}
</style>
