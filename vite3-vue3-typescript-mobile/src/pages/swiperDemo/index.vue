<script lang="ts" setup>
// import Swiper JS
import Swiper from "swiper";
// import Swiper styles
import "swiper/css";
onMounted(() => {
  initSwiper1();
  initSwiper2();
});
let s1: Swiper | null = null;
let s2: Swiper | null = null;
const initSwiper1 = () => {
  s1 = new Swiper(".swiper-1-ctnr", {
    spaceBetween: 0,
    slidesPerView: "auto",
    on: {
      slideChange: (s) => {
        console.log("==========swiper-1 slide change ", s.realIndex);
        s2?.slideTo(s.realIndex);
      },
    },
  });
};
const onPrev = () => {
  s1?.slideNext();
};
const onNext = () => {
  s1?.slidePrev();
};
const initSwiper2 = () => {
  s2 = new Swiper(".swiper-2-ctnr", {
    spaceBetween: 0,
    slidesPerView: "auto",
    on: {
      slideChange: (s) => {
        console.log("==========swiper-2 slide change ", s.realIndex);
        s1?.slideTo(s.realIndex);
      },
    },
  });
};
</script>

<template>
  <div>swiper demo</div>
  <div class="show-area">
    <div class="swiper-1">
      <div class="swiper-1-wrp">
        <div class="prev-bg">
          <div class="prev-btn" @click="onPrev">
            <van-icon name="arrow-left"></van-icon>
          </div>
        </div>
        <div class="hidden-wrapper">
          <div class="swiper-1-ctnr">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item, index) in 7" :key="index">
                <div class="slide-content">
                  <div class="wrp">
                    <div class="text">
                      <div class="year">{{ 2008 + index }}</div>
                      <div class="unit">年</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="next-bg">
          <div class="opacity-bg"></div>
          <div class="next-btn" @click="onNext">
            <van-icon name="arrow"></van-icon>
          </div>
        </div>
      </div>
    </div>
    <div class="swiper-2">
      <div class="swiper-2-wrp">
        <div class="swiper-2-ctnr">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, index) in 7" :key="index">
              <div class="slide-content">
                <div class="wrp">
                  <div class="top-line"></div>
                  <div class="title">
                    <div class="year">{{ 2008 + index }}</div>
                  </div>
                  <div class="content-list">
                    <div class="item">
                      <div class="point"></div>
                      <div class="info">
                        <div class="date">{{ 2008 + index }}年05月05日</div>
                        <div class="text">成立</div>
                      </div>
                    </div>
                    <div class="item">
                      <div class="point"></div>
                      <div class="info">
                        <div class="date">{{ 2008 + index }}年05月05日</div>
                        <div class="text">成立</div>
                      </div>
                    </div>
                    <template v-if="index===1">
                      <div class="item">
                        <div class="point"></div>
                        <div class="info">
                          <div class="date">{{ 2008 + index }}年05月05日</div>
                          <div class="text">成立</div>
                        </div>
                      </div>
                      <div class="item">
                        <div class="point"></div>
                        <div class="info">
                          <div class="date">{{ 2008 + index }}年05月05日</div>
                          <div class="text">成立</div>
                        </div>
                      </div>
                      <div class="item">
                        <div class="point"></div>
                        <div class="info">
                          <div class="date">{{ 2008 + index }}年05月05日</div>
                          <div class="text">成立</div>
                        </div>
                      </div>
                    </template>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.show-area {
  * {
    box-sizing: border-box;
  }
  .swiper-1 {
    width: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 84px;
    background-color: #f4f8fb;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    .swiper-1-wrp {
      position: relative;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      .prev-bg {
        background-color: #f4f8fb;
        position: absolute;
        top: 0%;
        bottom: 0;
        left: -18px;
        width: 36px;
        display: flex;
        align-items: center;
        z-index: 10;
        .prev-btn {
          flex: 0 0 auto;
          width: 36px;
          height: 36px;
          border: 1px solid #c9cdd6;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
      .hidden-wrapper {
        width: 1200px-36px;
        overflow: hidden;
        $slideW: 165px;
        .swiper-1-ctnr {
          height: 100%;
          width: $slideW;
          .swiper-wrapper {
            .swiper-slide {
              width: $slideW;
              .slide-content {
                width: 100%;
                .wrp {
                  width: 100%;
                  display: flex;
                  align-items: center;
                  justify-content: center;

                  .text {
                    font-weight: 500;
                    color: #8a8e9f;
                    display: flex;
                    align-items: baseline;

                    .year {
                      font-size: 20px;
                    }
                    .unit {
                      font-size: 14px;
                    }
                  }
                }
              }
            }
            :deep(.swiper-slide-active) {
              .slide-content {
                .wrp {
                  .text {
                    color: #00a4ff;
                  }
                }
              }
            }
          }
        }
      }

      .next-bg {
        background-color: #f4f8fb;
        position: absolute;
        top: 0%;
        bottom: 0;
        right: -18px;
        width: 36px;
        display: flex;
        align-items: center;
        z-index: 10;
        .opacity-bg {
          top: 0;
          right: 0;
          bottom: 0;
          position: absolute;
          width: 114px;
          height: 100%;
          background: linear-gradient(
            -90deg,
            #f4f8fb 0%,
            rgba(244, 248, 251, 0) 100%
          );
        }
        .next-btn {
          position: relative;
          flex: 0 0 auto;
          width: 36px;
          height: 36px;
          border: 1px solid #c9cdd6;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
  .swiper-2 {
    width: 100%;
    margin-top: 24px;
    overflow: hidden;
    .swiper-2-wrp {
      padding-left: calc((100vw - 1200px) / 2);
      .swiper-2-ctnr {
        $slideW: 434px;
        width: $slideW;
        .swiper-wrapper {
          align-items: stretch;
          .swiper-slide {
            width: $slideW;
            height: auto;
            .slide-content {
              width: 100%;
              height: 100%;
              border-left: 1px solid red;
              border-top: 1px solid red;
              padding: 50px 30px 155px;
              transition: all 0.35s;
              .wrp {
                width: 100%;
                height: 100%;
                position: relative;
                .top-line {
                }
                .title {
                  .year {
                    font-size: 38px;
                    font-weight: 800;
                    color: #15161c;
                  }
                }
                .content-list {
                  .item {
                    display: flex;
                    align-items: baseline;
                    margin-top: 14px;
                    .point {
                      width: 6px;
                      height: 6px;
                      background: #6b7b9a;
                      border-radius: 50%;
                      position: relative;
                      left: -34px;
                      top: -3px;
                    }
                    .info {
                      .date {
                        font-size: 18px;
                        font-weight: bold;
                        color: #5e6476;
                      }
                      .text {
                        font-size: 14px;
                        font-weight: 500;
                        color: #393b49;
                        margin-top: 6px;
                      }
                    }
                  }
                }
              }
            }
          }
          :deep(.swiper-slide-active) {
            .slide-content {
              border-top: 2px solid #00a4ff;
            }
          }
        }
      }
    }
  }
}
</style>
