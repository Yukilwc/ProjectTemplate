<template>
  <div>全局组件</div>
</template>

<script lang="ts" setup>
const props = defineProps({
  msg: {
    type: String,
    default: "",
  },
  labels: {
    type: Array<number>,
    default: () => [] ,
  },
});
</script>

<style scoped lang="scss"></style>
