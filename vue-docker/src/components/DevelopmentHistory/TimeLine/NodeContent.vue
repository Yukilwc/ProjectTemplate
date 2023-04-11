<template>
  <div class="node-content" :class="contentClass">
    <div class="top">
      <div class="text-wrapper">
        {{ detail.desc }}
      </div>
    </div>
    <div class="point">
      <div class="point-wrapper">
        <div class="point-center"></div>
      </div>
    </div>
    <div class="bottom">
      <div class="time-text">
        <div class="year">{{ detail.year }}</div>
        <div class="label-text">年</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "@vue/reactivity";
import type { PropType } from "vue";

export interface Detail {
  year: string;
  desc: string;
}
const props = defineProps({
  detail: {
    required: true,
    type: Object as PropType<Detail>,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  isReverse: {
    type: Boolean,
    default: false,
  },
});
const contentClass = computed(() => {
  let list = [];
  if (props.isActive) {
    list.push("node-content--active");
  }
  if (props.isReverse) {
    list.push("node-content--reverse");
  }
  return list.join(" ");
});
// let detail = props.detail;
</script>

<style scoped lang="less">
@h: 94px;
.node-content {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .top {
    width: 100%;
    font-size: 14px;
    font-weight: 500;
    color: #3d404e;
    line-height: 24px;
    // position: absolute;
    // bottom: 40px;
    height: @h;
    position: relative;
    // top: -14px;
    .text-wrapper {
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      word-wrap: break-word;
      position: absolute;
      bottom: 14px;
      width: 100%;
    }
  }
  .point {
    width: 20px;
    height: 20px;
    background: #ced2de;
    border: 4px solid #ffffff;
    box-shadow: 0px 6px 17px 1px #eaedf5;
    border-radius: 50%;
    .point-wrapper {
      .point-center {
      }
    }
  }
  .bottom {
    height: @h;
    display: flex;
    // align-items: center;
    justify-content: center;
    position: relative;
    top: 0px;

    .time-text {
      font-weight: bold;
      color: #808495;
      display: flex;
      align-items: baseline;
      justify-content: center;
      position: absolute;
      top: 12px;

      .year {
        font-size: 24px;
      }
      .label-text {
        font-size: 12px;
      }
    }
  }
}
.node-content--active {
  .top {
    color: #3d404e;
    .text-wrapper {
    }
  }
  .point {
    width: 20px;
    height: 20px;
    background: #f86710;
    box-shadow: 0px 6px 17px 1px #eaedf5;
    .point-wrapper {
      .point-center {
      }
    }
  }
  .bottom {
    .time-text {
      color: #f86710;

      .year {
      }
      .label-text {
      }
    }
  }
}
.node-content--reverse {
  flex-direction: column-reverse;
  .top {
    .text-wrapper {
        top: 14px;
        bottom: auto;
    }
  }
  .bottom {
    .time-text {
      position: absolute;
      top: auto;
      bottom: 12px;
    }
  }
}
</style>
