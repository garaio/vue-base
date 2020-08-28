<template>
  <div>
    <p>
      Current count (Vuex):
      <strong>{{ currentCount }}</strong>
    </p>
    <v-btn class="ma-2" color="info" @click.prevent="increment"
      >Increment</v-btn
    >
    <v-btn class="ma-2" color="info" @click.prevent="reset">Reset</v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { ACTIONS, GETTERS } from "../store/types";
const counter = namespace("counter");

@Component
export default class Counter extends Vue {
  @counter.Getter(GETTERS.CURRENT_COUNT) private currentCount!: number;
  @counter.Action(ACTIONS.INCREMENT) private incrementCounter!: () => void;
  @counter.Action(ACTIONS.RESET) private resetCounter!: () => void;

  private increment() {
    this.incrementCounter();
  }
  private reset() {
    this.resetCounter();
  }
}
</script>
