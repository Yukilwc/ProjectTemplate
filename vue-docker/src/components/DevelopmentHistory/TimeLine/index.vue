<template>
  <div class="time-line-container">
    <div class="left">
      <div class="row-1">{{ title }}</div>
      <div class="row-2">
        <div class="current">0{{ activeIndex + 1 }}</div>
        <div class="split">/</div>
        <div class="total">0{{ list.length }}</div>
      </div>
      <div class="nav-btns">
        <button class="pre-btn" @click="preClick">上一页</button>
        <button class="next-btn" @click="nextClick">下一页</button>
      </div>
    </div>
    <div class="right">
      <div class="bg-wrapper">
        <div class="line"></div>
      </div>
      <div
        class="time-line-swiper-container swiper-no-swiping"
        ref="timeLineSwiperContainer"
      >
        <div class="swiper-wrapper">
          <!-- Slides -->
          <div class="swiper-slide" v-for="(item, index) in list" :key="index">
            <NodeContent
              :detail="item"
              :class="index < activeIndex ? 'is-pre' : ''"
              :isActive="activeIndex === index"
              :isReverse="index % 2 !== 0"
            ></NodeContent>
          </div>
          ...
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Detail } from "./NodeContent.vue";
import Swiper, { Navigation, Pagination } from "swiper";
import NodeContent from "./NodeContent.vue";
import { onMounted, ref, type PropType } from "vue";
let swiper: Swiper | null = null;
let lastActiveIndex = ref(-1);
let activeIndex = ref(-1);
let props = defineProps({
  list: {
    default: () => [],
    type: Array as PropType<Detail[]>,
  },
  title: String,
  initialIndex: {
    default: -1,
    type: Number,
  },
});
activeIndex.value = props.initialIndex;
const emit = defineEmits<{
  (
    e: "change",
    detail: {
      lastActiveIndex: number;
      activeIndex: number;
    }
  ): void;
}>();
onMounted(() => {
  initSwiper();
});
let timeLineSwiperContainer = ref<HTMLElement | null>(null);
const initSwiper = () => {
  if (!timeLineSwiperContainer.value) return;
  swiper = new Swiper(timeLineSwiperContainer.value, {
    // Optional parameters
    direction: "horizontal",
    loop: false,
    speed:800,
    // slidesPerView: "auto",
    spaceBetween: 100,
    on: {
      transitionStart: function (s) {
        for (let i = 0; i < s.slides.length; i++) {
          if (s.slides[i].classList.contains("swiper-slide-prev")) {
            s.slides[i].classList.add("opacity-animate");
          }
          //   console.log("==========s.slides[i].classList", s.slides[i].classList);
        }
      },
      transitionEnd: function (s) {
        // slide = this.slides.eq(this.activeIndex);
        // slide.addClass("ani-slide");
        for (let i = 0; i < s.slides.length; i++) {
          if (s.slides[i].classList.contains("swiper-slide-prev")) {
            // s.slides[i].classList.remove("opacity-animate");
          }
          //   console.log("==========s.slides[i].classList", s.slides[i].classList);
        }
      },
    },
  });
};
const preClick = () => {
  swiper?.slidePrev();
  lastActiveIndex.value = activeIndex.value;
  activeIndex.value = swiper?.activeIndex || 0;
  console.log("==========active index", swiper?.activeIndex);
  doEmit();
};
const nextClick = () => {
  lastActiveIndex.value = activeIndex.value;
  if (activeIndex.value === -1) {
    activeIndex.value = 0;
    doEmit();
    return;
  }
  swiper?.slideNext();
  console.log("==========active index", swiper?.activeIndex);
  activeIndex.value = swiper?.activeIndex || 0;
  doEmit();
};
const doEmit = () => {
  if (lastActiveIndex.value === activeIndex.value) return;
  emit("change", {
    lastActiveIndex: lastActiveIndex.value,
    activeIndex: activeIndex.value,
  });
};
</script>

<style scoped lang="less">
.time-line-container {
  display: flex;
  align-items: center;
  width: 100%;
  overflow: hidden;
  .left {
    flex: 0 0 auto;
    .row-1 {
      font-size: 22px;
      font-weight: 800;
      color: #24262b;
    }
    .row-2 {
      margin-top: 14px;
      display: flex;
      align-items: baseline;
      color: #8a8e9f;
      font-style: italic;
      font-size: 14px;
      font-weight: bold;

      .current {
        font-size: 24px;
        color: #f86710;
      }
      .split {
      }
      .total {
      }
    }
    .nav-btns {
      margin-top: 8px;
      .pre-btn {
        cursor: pointer;
        width: 97px;
        height: 34px;
        background: #ced2de;
        border-radius: 10px;
        border: none;
        font-size: 14px;
        font-weight: 500;
        color: #ffffff;
      }
      .next-btn {
        cursor: pointer;
        font-size: 14px;
        font-weight: 500;
        color: #ffffff;
        border: none;
        width: 97px;
        height: 34px;
        background: #f86710;
        border-radius: 10px;
        margin-left: 10px;
      }
    }
  }
  .right {
    margin-left: 16px;
    flex: 1 1 auto;
    position: relative;
    overflow: hidden;
    .bg-wrapper {
      position: absolute;
      left: 83px;
      right: 0px;
      top: 50%;
      transform: translateY(-50%);

      .line {
        width: 100%;
        height: 2px;
        background: #ced2de;
      }
    }
    .time-line-swiper-container {
      position: relative;
      width: 100%;
      overflow: visible;
      width: 182px;
      .swiper-wrapper {
        width: 100%;
        .swiper-slide {
          width: 100%;
          .is-pre {
            // opacity: 0;
          }
        }
      }
    }
  }
}
</style>

<style lang="less">
.opacity-animate {
    transition: all 800ms;
    // opacity: 0;
    transform: translateX(182px) !important;
    position: relative;
    z-index:10;
}
</style>