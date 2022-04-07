/* eslint-disable no-console */

export interface PwaState {
  isReady: boolean;
  isOffline: boolean;
}

const PwaState = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  install(Vue: any): void {
    const state: PwaState = Vue.observable({
      isReady: false,
      isOffline: false,
    });

    const internalState = Vue.observable({
      isRefreshing: false,
    });

    // Refresh all open app tabs when a new service worker is installed.
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (internalState.refreshing) return;
      internalState.refreshing = true;
      window.location.reload();
    });

    // pwa in offline mode
    document.addEventListener("swOffline", () => {
      console.log("[pwaPlugin] Service Worker running in offline mode");
    });

    // isReady
    document.addEventListener("swReady", () => {
      console.log("[pwaPlugin] Service Worker isReady");
      state.isReady = true;
    });

    // isOffline
    // listen for network status changes
    window.addEventListener("online", () => {
      state.isOffline = false;
      console.log("[pwaPlugin] isOffline", state.isOffline);
      console.log("[pwaPlugin] network is now online");
    });
    window.addEventListener("offline", () => {
      state.isOffline = true;
      console.log("[pwaPlugin] isOffline", state.isOffline);
      console.log("[pwaPlugin] network is now offline");
    });

    Object.defineProperties(Vue.prototype, {
      $pwa: {
        get() {
          return state;
        },
      },
    });
  },
};

export default PwaState;
