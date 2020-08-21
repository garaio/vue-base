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
    <nav>
      <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link> |
      <router-link to="/counter">Counter</router-link>
    </nav>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <h2>Version: {{ packageName }} {{ packageVersion }}</h2>
    <PwaRefreshUi />
  </div>
</template>

<style lang="scss">
@import "@/scss/_main.scss";
</style>

<style lang="scss">
#app {
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
