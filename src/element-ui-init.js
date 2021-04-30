import Vue from "vue";
import Element from "element-ui";
// size 与 zIndex 字段。size 用于改变组件的默认尺寸，zIndex 设置弹框的初始 z-index（默认值：2000）
export default function ElementInit() {
  Vue.use(Element, { size: "small", zIndex: 3000 });
}
