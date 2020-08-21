import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import "./registerServiceWorker";

// PWA State
import PwaState from "@/plugins/pwaState";
Vue.use(PwaState);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount("#app");
