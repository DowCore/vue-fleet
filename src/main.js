import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/styles/index.scss"; // global css

import "./element-ui-init";
import "./icons"; // icon
import "./permission";
import "./utils/error-log"; // error log

if (process.env.NODE_ENV === "production") {
  const { mockXHR } = require("../mock");
  mockXHR();
}
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
