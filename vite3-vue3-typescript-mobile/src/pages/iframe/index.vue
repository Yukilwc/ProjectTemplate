<template>
  <button @click="langSwitch">切换语言</button>
  <div class="iframe-container" @click="handleClick">
    <div class="iframe-wrapper">
      <iframe
        ref="iframeTest"
        id="iframe-test"
        :src="lang === 'cn' ? base + '?lang=cn' : base + '?lang=en'"
      ></iframe>
      <!-- <div class="iframe-cover" @click="handleCoverClick"></div> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
let iframeTest = ref<HTMLIFrameElement | null>(null);
onMounted(() => {});
const base = "http://192.168.3.29:8182/publicRatesEmbededPage";
const lang = ref("cn");
const langSwitch = () => {
  if (lang.value === "cn") lang.value = "en";
  else lang.value = "cn";
};
const iframeLoad = () => {
  if (!iframeTest.value) return;
  console.log("==========iframeTest", iframeTest.value.contentWindow?.document);
  if (iframeTest.value.contentWindow) {
    iframeTest.value.contentWindow.document.body.onclick = handleClick;
  }
  window.addEventListener("message", (e: MessageEvent) => {
    console.log("==========window.addEventListener message", e);
  });
  iframeTest.value.contentWindow?.addEventListener(
    "message",
    (e: MessageEvent) => {
      console.log(
        "==========iframeTest.value.contentWindow?.addEventListener",
        e
      );
    }
  );
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
  background-color: #f8f9fd;
  // background-color: #fff;
  width: 100%;
  .iframe-wrapper {
    position: relative;
    width: 100%;
    #iframe-test {
      width: 100%;
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
