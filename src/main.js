import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementInit from "./element-ui-init";

// 初始化element配置
ElementInit();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
