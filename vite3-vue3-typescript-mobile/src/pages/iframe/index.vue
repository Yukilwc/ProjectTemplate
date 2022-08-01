<template>
  <div class="iframe-container" @click="handleClick">
    <div class="iframe-wrapper">
      <iframe
        ref="iframeTest"
        id="iframe-test"
        src="https://sales.tungee.com/enterprise-details/37622fb78a853e5b/enterprise-information/basic-information"
        :onload="iframeLoad"
      ></iframe>
      <!-- <div class="iframe-cover" @click="handleCoverClick"></div> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
let iframeTest = ref<HTMLIFrameElement | null>(null);
onMounted(() => {});
const iframeLoad = () => {
  if (!iframeTest.value) return;
  console.log("==========iframeTest", iframeTest.value.contentWindow?.document);
  if (iframeTest.value.contentWindow) {
    iframeTest.value.contentWindow.document.body.onclick = handleClick;
  }
  window.addEventListener("message", (e:MessageEvent) => {
    console.log("==========window.addEventListener message", e);
  });
  iframeTest.value.contentWindow?.addEventListener("message", (e:MessageEvent) => {
    console.log('==========iframeTest.value.contentWindow?.addEventListener',e)
  });
};
const handleClick = (e: MouseEvent) => {
  console.log("==========handleClick ", e);
  if (!iframeTest.value) return;
};
const handleCoverClick = (e: MouseEvent) => {
  console.log("==========handleCoverClick ", e);
};
</script>

<style scoped lang="scss">
.iframe-container {
  position: relative;
  display: flex;
  justify-content: center;
  .iframe-wrapper {
    position: relative;
    #iframe-test {
      width: 80vw;
      height: 100vh;
      border: none;
      //   pointer-events: none;
    }
    .iframe-cover {
      position: absolute;
      top: 0px;
      left: 0;
      right: 0;
      bottom: 0;
      pointer-events: none;
    }
  }
}
</style>
