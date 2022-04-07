/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-use-before-define */
import { defineActions, defineGetters, defineModule, defineMutations } from "direct-vuex";
import { moduleActionContext, moduleGetterContext } from "@/store";
export const namespaced = true;

export interface ApiDemoState {
  counter: number;
  demo: any;
}

export const state: ApiDemoState = {
  counter: 0,
  demo: {},
};

export const getters = defineGetters<ApiDemoState>()({
  currentCount(...args): number {
    const { state } = getGetterContext(args);
    return state.counter;
  },
});

export const actions = defineActions({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  init(context): void {
    // Possible init call from rootStore
    // const { commit } = getActionContext(context);
    return;
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  someAsyncFunction(context): Promise<void | null> | undefined {
    // Possible async call here, mostly used with imported API Clients
    // const { commit } = getActionContext(context);
    // const client = new DemoApiClient();
    // return client.demoCall().then((response: any) => {
    //   commit.setDemo(response);
    // });
    return;
  },
});

export const mutations = defineMutations<ApiDemoState>()({
  setDemo(state, demo) {
    state.demo = demo;
  },
  increment(state) {
    state.counter++;
  },
  reset(state) {
    state.counter = 0;
  },
});

const apiDemo = defineModule({
  state,
  getters,
  actions,
  mutations,
});

export default apiDemo;
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type,@typescript-eslint/no-unused-vars
const getGetterContext = (args: [any, any, any, any]) => moduleGetterContext(args, apiDemo);
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type,@typescript-eslint/no-unused-vars
const getActionContext = (context: any) => moduleActionContext(context, apiDemo);
