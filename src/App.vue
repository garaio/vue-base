<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
import Counter from "@/modules/counterExample/views/Counter.vue";
import store from "./store";

@Component({
  components: {
    HelloWorld,
    Counter,
  },
})
export default class App extends Vue {
  created(): void {
    store.dispatch
      .init()
      .then(() => {
        // eslint-disable-next-line no-console
        console.log("[store] init: store initialized");
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error(error);
      });
  }
}
</script>

<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to the GARAIO Emergency Room Vue.js Base App" />
    <Counter />
  </div>
</template>

<style lang="scss">
@import "@/scss/_main.scss";

#app {
  text-align: center;
  color: $vueBlack;
  margin-top: 60px;
}
</style>
