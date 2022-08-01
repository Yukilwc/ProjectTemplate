<template>
  <div><h1>{{ msg }}</h1></div>
</template>

<script lang="ts" setup>
const props = defineProps({
  msg: {
    type: String,
    default: "",
  },
});
let { msg } = toRefs(props);
</script>

<style scoped lang="scss"></style>
