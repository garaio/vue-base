<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import store from "@/store";

@Component
export default class Counter extends Vue {
  get currentCount(): number {
    return store.state.counter.counter;
  }

  increment(): void {
    store.commit.counter.increment();
  }

  reset(): void {
    store.commit.counter.reset();
  }
}
</script>

<template>
  <div>
    <p>
      Current count (using Vuex + direct-vuex):
      <strong>{{ currentCount }}</strong>
    </p>
    <button class="ma-2" color="info" @click.prevent="increment">Increment</button>
    <button class="ma-2" color="info" @click.prevent="reset">Reset</button>
  </div>
</template>
