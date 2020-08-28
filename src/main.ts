import Vue, { VNode } from "vue";
import App from "./App.vue";
import store from "./store";
import vuetify from "./plugins/vuetify";

// Messages
import message from "@/mixins/message";
Vue.mixin(message);

Vue.config.productionTip = false;

new Vue({
  store: store.original,
  vuetify,
  render: (h): VNode => h(App),
}).$mount("#app");
