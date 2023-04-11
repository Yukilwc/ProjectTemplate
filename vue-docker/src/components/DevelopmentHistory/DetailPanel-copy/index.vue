<template>
  <div class="detail-panel-container">
    <div class="detail-panel-wrapper">
      <div
        class="detail-panel-image-swiper-container"
        ref="imageSwiperContainer"
      >
        <div class="swiper-wrapper">
          <!-- Slides -->
          <div
            class="swiper-slide"
            v-for="(item, index) in panelList"
            :key="index"
          >
            <div class="panel-content">
              <div class="image-wrapper">
                <!-- <img class="image" src="@/images/.png" /> -->
                <div class="image">{{ item.year }}</div>
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
          <div class="swiper-wrapper">
            <!-- Slides -->
            <div
              class="swiper-slide"
              v-for="(item, index) in panelList"
              :key="index"
            >
              <div class="panel-content">
                <div class="text-wrapper">
                  <div class="date">
                    <div class="date-text">{{ item.year }}</div>
                    <div class="label-text">年</div>
                  </div>
                  <div class="desc">{{ item.desc }}</div>
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
let listMap = computed(() => {
  return {
    1: props.list1,
    2: props.list2,
  };
});
onMounted(() => {
  initImageSwiper();
  initTextSwiper();
});
let lastListType = ref(1);
let currentListType = ref(1);
let panelList = ref(props.list1.slice(0, 2));
let imageSwiper: Swiper | null = null;
let initialSlide = ref(0);
let imageSwiperContainer = ref<HTMLElement | null>(null);
const initImageSwiper = () => {
  if (!imageSwiperContainer.value) return;
  imageSwiper = new Swiper(imageSwiperContainer.value, {
    // Optional parameters
    direction: "horizontal",
    initialSlide: initialSlide.value,
  });
};
let textSwiper: Swiper | null = null;
let textSwiperContainer = ref<HTMLElement | null>(null);
const initTextSwiper = () => {
  if (!textSwiperContainer.value) return;
  imageSwiper = new Swiper(textSwiperContainer.value, {
    // Optional parameters
    direction: "horizontal",
    initialSlide: initialSlide.value,
  });
};
// let list1Status = {
//   last: 0,
//   active: 0,
// };
// let list2Status = {
//   last: -1,
//   active: -1,
// };
const doChange = (listType: number, e: ChangeEvent) => {
  console.log("==========detail panel do change", listType, e);
  lastListType.value = currentListType.value;
  currentListType.value = listType;
  if (lastListType.value === currentListType.value) {
    // 同序列变换
    let list = Reflect.get(listMap.value, listType) as Detail[];
    if (e.activeIndex === e.lastActiveIndex) {
      return;
    } else if (e.activeIndex > e.lastActiveIndex) {
      // 下一页
      panelList.value = [list[e.lastActiveIndex], list[e.activeIndex]];
      initialSlide.value = 0;
      nextTick(() => {
        initImageSwiper();
        initTextSwiper();
        setTimeout(() => {
          imageSwiper?.slideNext();
          textSwiper?.slideNext();
        }, 1000);
        // nextTick(() => {
        // });
      });
    } else if (e.activeIndex < e.lastActiveIndex) {
      // 上一页
      panelList.value = [list[e.activeIndex], list[e.lastActiveIndex]];
      initialSlide.value = 1;
      nextTick(() => {
        initImageSwiper();
        initTextSwiper();
        imageSwiper?.slidePrev();
        textSwiper?.slidePrev();
      });
    }
  } else {
  }
  //   if (listType === 1) {
  //     list1Status.last = e.lastActiveIndex;
  //     list1Status.active = e.activeIndex;
  //   } else if (listType === 2) {
  //     list2Status.last = e.lastActiveIndex;
  //     list2Status.active = e.activeIndex;
  //   }
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
      .swiper-wrapper {
        .swiper-slide {
          .panel-content {
            background-color: gray;
            width: 414px;
            height: 244px;

            .image-wrapper {
              width: 100%;
              height: 100%;

              .image {
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
              }
            }
            .text-wrapper {
              .date {
                .date-text {
                }
                .label-text {
                }
              }
              .desc {
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
        .swiper-wrapper {
          .swiper-slide {
            .panel-content {
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
