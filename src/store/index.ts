import Vue from "vue";
import Vuex from "vuex";
import * as counter from "@/modules/counterExample/store/counterStore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { counter },
});
