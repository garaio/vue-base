<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
import Counter from "@/modules/counterExample/views/Counter.vue";
import store from "./store";
import APP_ROUTE_NAMES from "@/router/routeNames";

@Component({
  components: {
    HelloWorld,
    Counter,
  },
})
export default class App extends Vue {
  APP_ROUTE_NAMES = APP_ROUTE_NAMES;

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
        <v-list-item exact :to="{ name: APP_ROUTE_NAMES.HOME.OVERVIEW }">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item :to="{ name: APP_ROUTE_NAMES.HOME.ABOUT }">
          <v-list-item-action>
            <v-icon>mdi-information</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item :to="{ name: APP_ROUTE_NAMES.COUNTER.OVERVIEW }">
          <v-list-item-action>
            <v-icon>mdi-counter</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Counter</v-list-item-title>
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
        GARAIO vue-base-vuetify
      </div>

      <v-spacer></v-spacer>

      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </v-main>
  </v-app>
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
