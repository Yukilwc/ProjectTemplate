import { useWindowSize } from "@vant/use";

export function useRem() {
  let rootValue = 37.5; // 插件配置的基数
  let blueprintSize = 375; // 基于得设计图尺寸
  const { width } = useWindowSize();
  const setRemSize = () => {
    // let viewWidth =
    //   window.innerWidth ||
    //   document.documentElement.clientWidth ||
    //   document.body.clientWidth;
    let viewWidth = width.value;
    let htmlFontSize = (viewWidth * rootValue) / blueprintSize;
    console.log("==========htmlFontSize ", htmlFontSize);
    let htmlEl = document.getElementsByTagName("html")[0];
    htmlEl.style.fontSize = `${htmlFontSize}px`;
  };
  const initRem = () => {
    setRemSize();
    // window.addEventListener("resize", () => {
    //   setRemSize();
    // });
    watch(width, () => {
      setRemSize();
    });
  };
  return {
    initRem,
    setRemSize,
  };
}
