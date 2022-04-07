import Vue, { VNode } from "vue";
import App from "./App.vue";
import store from "./store";
import "./registerServiceWorker";

// Messages
import message from "@/mixins/message";
Vue.mixin(message);

// PWA State
import pwaState from "@/plugins/pwaState";
Vue.use(pwaState);

Vue.config.productionTip = false;

new Vue({
  store: store.original,
  render: (h): VNode => h(App),
}).$mount("#app");
