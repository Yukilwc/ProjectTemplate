<template>
  <div>axios封装使用</div>
  <div class="">
    <button @click="postClick">接口调用post</button>
  </div>
</template>

<script lang="ts" setup>
import { API } from "@/api";
import { ListRes } from "@/model/response/ListRes";
import { useAxios } from "@/utils/useAxios";
let { jsonPost } = useAxios();
const postClick = async () => {
  try {
    let res = await jsonPost<ListRes>(API.main.list, { test: 1 });
    console.log("==========res", res);
    if (res.code === 1) {
      return true;
    } else return false;
  } catch (e: any) {
    console.error(e);
  }
};
</script>

<style scoped lang="scss"></style>
