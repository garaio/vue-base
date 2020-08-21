/* eslint-disable no-console */

import { register } from "register-service-worker";

if (process.env.NODE_ENV === "production") {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      console.log(
        "App is being served from cache by a service worker.\n" +
          "For more details, visit https://goo.gl/AFskqB"
      );
      document.dispatchEvent(new CustomEvent("swReady"));
    },
    registered() {
      console.log("Service worker has been registered.");
      document.dispatchEvent(new CustomEvent("swRegistered"));
    },
    cached() {
      console.log("Content has been cached for offline use.");
      document.dispatchEvent(new CustomEvent("swCached"));
    },
    updatefound() {
      console.log("New content is downloading.");
      document.dispatchEvent(new CustomEvent("swUpdatefound"));
    },
    updated(registration) {
      console.log("New content is available; please refresh.");
      document.dispatchEvent(
        new CustomEvent("swUpdated", { detail: registration })
      );
    },
    offline() {
      console.log(
        "No internet connection found. App is running in offline mode."
      );
      document.dispatchEvent(new CustomEvent("swOffline"));
    },
    error(error) {
      console.error("Error during service worker registration:", error);
      document.dispatchEvent(new CustomEvent("swError", { detail: error }));
    },
  });
}
