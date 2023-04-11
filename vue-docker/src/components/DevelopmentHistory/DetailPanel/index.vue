<template>
  <div class="detail-panel-container">
    <div class="detail-panel-wrapper">
      <div class="detail-panel-image-swiper-container">
        <!-- Slides -->
        <div class="panel-content">
          <div class="custom-swiper-container">
            <div class="custom-swiper-wrapper" :style="animateStyle">
              <!-- <img class="image" src="@/images/.png" /> -->
              <div class="custom-swiper-slide">
                <div class="image">{{ prev.year }}</div>
              </div>

              <div class="custom-swiper-slide custom-swiper-slide--active">
                <div class="image">{{ current.year }}</div>
              </div>
              <div class="custom-swiper-slide">
                <div class="image">{{ next.year }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-area">
        <div
          class="detail-panel-text-swiper-container"
          ref="textSwiperContainer"
        >
          <div class="panel-content">
            <div class="custom-swiper-container">
              <div class="custom-swiper-wrapper" :style="animateStyle">
                <div class="custom-swiper-slide">
                  <div class="text-wrapper">
                    <div class="date">
                      <div class="date-text">{{ prev.year }}</div>
                      <div class="label-text">年</div>
                    </div>
                    <div class="desc">{{ prev.desc }}</div>
                  </div>
                </div>
                <div class="custom-swiper-slide">
                  <div class="text-wrapper">
                    <div class="date">
                      <div class="date-text">{{ current.year }}</div>
                      <div class="label-text">年</div>
                    </div>
                    <div class="desc">{{ current.desc }}</div>
                  </div>
                </div>
                <div class="custom-swiper-slide">
                  <div class="text-wrapper">
                    <div class="date">
                      <div class="date-text">{{ next.year }}</div>
                      <div class="label-text">年</div>
                    </div>
                    <div class="desc">{{ next.desc }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="line"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, type PropType, nextTick } from "vue";
import type { Detail } from "../TimeLine/NodeContent.vue";
import Swiper, { Navigation, Pagination } from "swiper";
import type { ChangeEvent } from "../index.vue";
import { computed } from "@vue/reactivity";

let props = defineProps({
  list1: {
    default: () => [],
    type: Array as PropType<Detail[]>,
  },
  list2: {
    default: () => [],
    type: Array as PropType<Detail[]>,
  },
});

let direction = ref("right");
const prev = ref<Detail>({
  year: "",
  desc: "",
});
const current = ref<Detail>(props.list1[0]);
const next = ref<Detail>({
  year: "",
  desc: "",
});
onMounted(() => {});
let animateStyle = ref({
  transform: `translateX(-33.333%)`,
  transition: `all 0.35s`,
});
// let list1Status = {
//   last: 0,
//   active: 0,
// };
// let list2Status = {
//   last: -1,
//   active: -1,
// };
const doChange = (currentDetail: Detail, targetDetail: Detail, d: string) => {
  console.log("==========do change", currentDetail, targetDetail, d);
  current.value = currentDetail;
  direction.value = d;
  if (direction.value === "right") {
    next.value = targetDetail;
    animateStyle.value.transition = `all 0.35s`;
    animateStyle.value.transform = `translateX(-66.666%)`;
  } else {
    prev.value = targetDetail;
    animateStyle.value.transition = `all 0.35s`;
    animateStyle.value.transform = `translateX(0)`;
  }
  setTimeout(() => {
    // 动画复位
    animateStyle.value.transition = `all 0s`;
    animateStyle.value.transform = `translateX(-33.333%)`;
    current.value = targetDetail;
  }, 350);
};
defineExpose({
  doChange,
});
</script>

<style scoped lang="less">
.detail-panel-container {
  width: 424px;
  height: 394px;
  background: #ffffff;
  box-shadow: 1px 8px 44px 0px #eaedf5;
  border-radius: 14px;
  .detail-panel-wrapper {
    width: 100%;
    height: 100%;
    padding-top: 5px;

    .detail-panel-image-swiper-container {
      width: 414px;
      height: 244px;
      margin: auto;
      background: #ffffff;
      box-shadow: 1px 8px 44px 0px #eaedf5;
      border-radius: 14px;
      overflow: hidden;
      .panel-content {
        width: 414px;
        height: 244px;
        .custom-swiper-container {
          width: 100%;
          height: 100%;
          overflow: hidden;
          .custom-swiper-wrapper {
            width: 300%;
            height: 100%;
            position: relative;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            // transform: translateX(-33.333%);
            .custom-swiper-slide {
              width: 100%;
              height: 100%;
              .image {
                background-color: gray;
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
              }
            }
          }
        }
      }
    }

    .text-area {
      margin: auto;
      margin-top: -35px;
      width: 384px;
      height: 140px;
      background: #ffffff;
      border-radius: 14px;
      position: relative;
      z-index: 1;
      .detail-panel-text-swiper-container {
        overflow: hidden;
        width: 100%;
        height: 100%;
        .panel-content {
          .custom-swiper-container {
            width: 100%;
            height: 100%;
            overflow: hidden;
            .custom-swiper-wrapper {
              width: 300%;
              height: 100%;
              position: relative;
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              // transform: translateX(-33.333%);
              .custom-swiper-slide {
                width: 100%;
                height: 100%;
                padding: 16px 24px;
                .text-wrapper {
                  .date {
                    font-weight: bold;
                    color: #24262b;
                    display: flex;
                    align-items: baseline;

                    .date-text {
                      font-size: 24px;
                    }
                    .label-text {
                      font-size: 12px;
                    }
                  }
                  .desc {
                    word-break: break-word;
                    overflow-wrap: break-word;
                    word-wrap: break-word;
                    white-space: normal;
                  }
                }
              }
            }
          }
        }
      }
    }
    .line {
      margin-top: 15px;
      margin: auto;
      width: 384px;
      height: 1px;
      background: #f86710;
      opacity: 0.2;
      border-radius: 1px;
    }
  }
}
</style>
