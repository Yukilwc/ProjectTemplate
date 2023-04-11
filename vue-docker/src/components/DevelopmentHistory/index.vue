<template>
  <div class="develop-container">
    <div class="develop-bg-wrapper"></div>
    <div class="title-row">
      <div class="title-text">发展历程</div>
      <div class="title-desc">致力打造全球网络，开创海运拼箱业的卓越品牌</div>
    </div>
    <div class="develop-wrapper">
      <div class="develop-gray-wrapper">
        <div class="left-area">
          <DetailPanel
            ref="detailPanelRef"
            :list1="list1"
            :list2="list2"
          ></DetailPanel>
        </div>
        <div class="time-line-area">
          <div class="top-time">
            <TimeLine
              :initialIndex="0"
              @change="change1"
              title="拓展里程碑"
              :list="list1"
            ></TimeLine>
          </div>
          <div class="bottom-time">
            <TimeLine
              @change="change2"
              title="年度资质录"
              :list="list2"
            ></TimeLine>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import TimeLine from "./TimeLine/index.vue";
import DetailPanel from "./DetailPanel/index.vue";
export interface ChangeEvent {
  lastActiveIndex: number;
  activeIndex: number;
}
let list1 = ref([
  {
    year: "2023",
    desc: "ddescdescdesc",
  },
  {
    year: "2022",
    desc: "ddescdescdescdescdescdescdescdescdescdescescddescdescdescdescdescdescdescdescdescdescescddescdescdescdescdescdescdescdescdescdescesc",
  },
  {
    year: "2021",
    desc: "ddescdescdescdescdescdescdescdescdescdescesc",
  },
  {
    year: "2020",
    desc: "ddescdescdescdescdescdescdescdescdescdescesc",
  },
  {
    year: "2019",
    desc: "ddescdescdescdescdescdescdescdescdescdescesc",
  },
  {
    year: "2018",
    desc: "ddescdescdescdescdescdescdescdescdescdescesc",
  },
]);
let list2 = ref([
  {
    year: "b2023",
    desc: "ddesc",
  },
  {
    year: "b2022",
    desc: "ddesc",
  },
  {
    year: "b2021",
    desc: "ddescddescdescdescdescdescdescdescdescdescescddescdescdescdescdescdescdescdescdescdescescddescdescdescdescdescdescdescdescdescdescescescdescdescdescdescdescdescdescdescesc",
  },
  {
    year: "b2020",
    desc: "ddescdescdescdescdescdescdescdescdescdescesc",
  },
  {
    year: "b2019",
    desc: "ddescdescdescdescdescdescdescdescdescdescesc",
  },
  {
    year: "b2018",
    desc: "ddescdescdescdescdescdescdescdescdescdescesc",
  },
]);
let activeListType = 1;
let current = list1.value[0];
let target = list1.value[1];
let direction = "";
const change1 = (e: ChangeEvent) => {
  console.log("==========change1", e);
  if (activeListType === 1) {
    // 当前在list1上
    current = list1.value[e.lastActiveIndex];
    target = list1.value[e.activeIndex];
    if (e.activeIndex > e.lastActiveIndex) {
      direction = "right";
    } else direction = "left";
  } else {
    // 变换到1
    current = current;
    target = list1.value[e.activeIndex];
    // 方向判定不变
    if (e.activeIndex > e.lastActiveIndex) {
      direction = "right";
    } else direction = "left";
  }
  detailPanelRef.value?.doChange(current, target, direction);
};
const change2 = (e: ChangeEvent) => {
  console.log("==========change2", e);
  if (activeListType === 2) {
    // 当前在list1上
    current = list2.value[e.lastActiveIndex];
    target = list2.value[e.activeIndex];
    if (e.activeIndex > e.lastActiveIndex) {
      direction = "right";
    } else direction = "left";
  } else {
    // 变换到2
    current = current;
    target = list2.value[e.activeIndex];
    // 方向判定不变
    if (e.activeIndex > e.lastActiveIndex) {
      direction = "right";
    } else direction = "left";
  }
  detailPanelRef.value?.doChange(current, target, direction);
};
type CompType = InstanceType<typeof DetailPanel>;
const detailPanelRef = ref<CompType>();
</script>

<style scoped lang="less">
.develop-container {
  height: 784px;
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-top: 64px;
  .develop-bg-wrapper {
    position: absolute;
    top: 0px;
    bottom: 0px;
    right: 0px;
    width: 1370px;
    // left: calc(50vw - ((1920px / 2) - 545px));
    width: calc(50vw + ((1920px / 2) - 545px));
    background: #f8f9fb;
    border-radius: 84px 0px 0px 84px;
  }
  .title-row {
    text-align: center;
    .title-text {
      font-size: 30px;
      font-weight: 800;
      color: #24262b;
    }
    .title-desc {
      font-size: 14px;
      font-weight: 500;
      color: #5a5d6e;
      margin-top: 14px;
    }
  }

  .develop-wrapper {
    display: flex;
    justify-content: flex-end;
    margin-top: 40px;

    .develop-gray-wrapper {
      position: relative;
      // width: 100%;
      width: calc(50vw + ((1920px / 2) - 545px));
      // padding-left: calc(50vw - ((1920px / 2) - 545px));
      .left-area {
        position: absolute;
        top: 110px;
        left: -240px;
      }
      .time-line-area {
        padding-left: 234px;
        .top-time {
        }
        .bottom-time {
          margin-top: 100px;
        }
      }
    }
  }
}
</style>
