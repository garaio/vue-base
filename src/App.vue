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
  icons = ["widgets", "home", "heart"];

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
  <v-app id="app">
    <v-navigation-drawer app clipped>
      <v-list>
        <v-list-item v-for="i in 3" :key="i" :to="{ path: '/page' + i }">
          <v-list-item-action>
            <v-icon>mdi-{{ icons[i - 1] }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Page {{ i }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <img alt="Vuetify logo" src="./assets/logo.svg" height="219" />
      <HelloWorld msg="Welcome to the GARAIO Emergency Room Vue.js Base App" />
      <Counter />
    </v-main>
  </v-app>
</template>

<style lang="scss">
@import "@/scss/_main.scss";

#app {
  text-align: center;
  color: $vueBlack;
  margin-top: 60px;
}
</style>
