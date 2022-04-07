import Vue from "vue";
import Vuex from "vuex";
import { createDirectStore } from "direct-vuex";
import * as message from "@/store/message/messageStore";
import * as counter from "@/modules/counterExample/store/counterStore";
import { RootState } from "./types";

Vue.use(Vuex);

const { store, rootActionContext, moduleActionContext, rootGetterContext, moduleGetterContext } = createDirectStore({
  strict: process.env.NODE_ENV !== "production",
  state: {} as RootState,
  actions: {
    // OPTIONAL EXAMPLE: If you want to initialize things on APP-start
    // Call this init function and add all init stores you need
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    init(context): Promise<any> {
      const { dispatch } = rootActionContext(context);
      const initCounterPromise = dispatch.counter.init();
      return Promise.allSettled([initCounterPromise]);
    },
  },
  mutations: {},
  modules: {
    counter,
    message,
  },
});

// Export the direct-store instead of the classic Vuex store.
export default store;

// The following exports will be used to enable types in the
// implementation of actions and getters.
export { rootActionContext, moduleActionContext, rootGetterContext, moduleGetterContext };

// The following lines enable types in the injected store '$store'.
export type AppStore = typeof store;
declare module "vuex" {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Store<S> {
    direct: AppStore;
  }
}
