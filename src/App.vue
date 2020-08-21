<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import packageJSON from "@/../package.json";
import HelloWorld from "./components/HelloWorld.vue";
import Counter from "@/modules/counterExample/views/Counter.vue";
import store from "./store";
import PwaRefreshUi from "@/components/PwaRefreshUi.vue";

@Component({
  components: {
    HelloWorld,
    Counter,
    PwaRefreshUi,
  },
})
export default class App extends Vue {
  packageVersion = packageJSON.version;
  packageName = packageJSON.name;

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
    <h2>Version: {{ packageName }} {{ packageVersion }}</h2>
    <PwaRefreshUi />
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
