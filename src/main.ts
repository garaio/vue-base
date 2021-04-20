import Vue from "vue";
import App from "./App.vue";
import store from "./store";

// Messages
import message from "@/mixins/message";
Vue.mixin(message);

Vue.config.productionTip = false;

new Vue({
  store: store.original,
  render: h => h(App),
}).$mount("#app");
