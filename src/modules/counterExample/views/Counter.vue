<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Counter from "../components/Counter.vue";

@Component({
  components: { Counter },
})
export default class CounterView extends Vue {}
</script>

<template>
  <div>
    <h1>Counter Example</h1>
    <p>This is an example of a Vue.js component integrated with Vuex, in a more modular way.</p>
    <Counter />
  </div>
</template>
