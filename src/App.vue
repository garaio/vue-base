<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to the GARAIO Emergency Room Vue.js Base App" />
    <Counter />
    <PwaRefreshUi />
    <h2>Version: {{ packageName }} {{ packageVersion }}</h2>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import packageJSON from "@/../package.json";
import HelloWorld from "./components/HelloWorld.vue";
import Counter from "@/modules/counterExample/views/Counter.vue";
import PwaRefreshUi from "@/components/PwaRefreshUi.vue";

@Component({
  components: {
    HelloWorld,
    Counter,
    PwaRefreshUi,
  },
})
export default class App extends Vue {
  private packageVersion = packageJSON.version;
  private packageName = packageJSON.name;
}
</script>

<style lang="scss">
@import "@/scss/_main.scss";

#app {
  text-align: center;
  color: $vueBlack;
  margin-top: 60px;
}
</style>
