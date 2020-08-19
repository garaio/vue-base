import { GetterTree, MutationTree, ActionTree } from "vuex";
import { RootState } from "@/store/types";
import { STATE, GETTERS, ACTIONS, MUTATIONS } from "./types";
export const namespaced = true;

export const state: STATE = {
  counter: 0,
};

export const getters: GetterTree<STATE, RootState> = {
  [GETTERS.CURRENT_COUNT](state): number {
    return state.counter;
  },
};

export const actions: ActionTree<STATE, RootState> = {
  [ACTIONS.INCREMENT]({ commit }): void {
    commit(MUTATIONS.INCREMENT);
  },
  [ACTIONS.RESET]({ commit }): void {
    commit(MUTATIONS.RESET);
  },
};

export const mutations: MutationTree<STATE> = {
  [MUTATIONS.INCREMENT](state) {
    state.counter++;
  },
  [MUTATIONS.RESET](state) {
    state.counter = 0;
  },
};
