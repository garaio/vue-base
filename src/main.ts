import Vue, { VNode } from "vue";
import App from "./App.vue";
import store from "./store";
import "./registerServiceWorker";

// Component registration
import "@/registerAllComponents";

// Messages
import message from "@/mixins/message";

import router from "./router";

Vue.mixin(message);

// PWA State
import pwaState from "@/plugins/pwaState";
Vue.use(pwaState);

Vue.config.productionTip = false;

new Vue({
  store: store.original,
  router,
  render: (h): VNode => h(App),
}).$mount("#app");
