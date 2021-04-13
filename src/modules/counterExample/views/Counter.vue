<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-row>
        <v-col>
          <h1>Counter Example</h1>
          <p>
            This is an example of a Vue.js component integrated with Vuex, in a
            more modular way.
          </p>
          <Counter />
          <h1>Possible Translation usage:</h1>
          <!-- Example of using the translation system: -->
          <h1>{{ $t($Resources.Counter_Title) }}</h1>
          <p>{{ $t($Resources.Counter_Text) }}</p>
          <p>{{ abcExample }}</p>
        </v-col>
      </v-row>
    </v-slide-y-transition>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Counter from "../components/Counter.vue";

@Component({
  components: { Counter },
})
export default class CounterView extends Vue {
  abcExample = "";

  created() {
    // How to access translation string in the TS/JS part:
    this.abcExample = this.$t(this.$Resources.Counter_Title);
  }
}
</script>
