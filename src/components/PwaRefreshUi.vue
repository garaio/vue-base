<template>
  <button v-if="updateExists" @click="refreshApp" v-text="refreshText"></button>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class PwaRefreshUi extends Vue {
  @Prop({ default: "New version available! Click to update" })
  refreshText!: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registration: any = null;
  updateExists = false;

  created() {
    document.addEventListener("swUpdated", this.showRefreshUI, { once: true });
  }

  showRefreshUI(e: any) {
    // Display a snackbar inviting the user to refresh/reload the app due to an app update being available.
    // The new service worker is installed, but not yet active.
    // Store the ServiceWorkerRegistration instance for later use.
    this.registration = e.detail;
    this.updateExists = true;
  }

  refreshApp() {
    this.updateExists = false;
    if (this.registration?.waiting) {
      this.registration.waiting.postMessage({ type: "SKIP_WAITING" });
    }
  }
}
</script>
