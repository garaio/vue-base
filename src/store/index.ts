import Vue from "vue";
import Vuex from "vuex";
import { createDirectStore } from "direct-vuex";
import { RootState } from "./types";

Vue.use(Vuex);

const {
  store,
  rootActionContext,
  moduleActionContext,
  rootGetterContext,
  moduleGetterContext,
} = createDirectStore({
  strict: process.env.NODE_ENV !== "production",
  state: {} as RootState,
  actions: {},
  mutations: {},
  modules: {},
});

// Export the direct-store instead of the classic Vuex store.
export default store;

// The following exports will be used to enable types in the
// implementation of actions and getters.
export {
  rootActionContext,
  moduleActionContext,
  rootGetterContext,
  moduleGetterContext,
};

// The following lines enable types in the injected store '$store'.
export type AppStore = typeof store;
declare module "vuex" {
  interface Store<S> {
    direct: AppStore;
  }
}
