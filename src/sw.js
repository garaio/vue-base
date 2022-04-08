/* global workbox */
workbox.setConfig({
  debug: false,
});

workbox.core.setCacheNameDetails({ prefix: "vue-base-pwa" });

// Listen to SKIP Events for reloading when new service worker is ready
self.addEventListener("message", event => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting(); // activate service worker (will be used on next reload)
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
const manifest = self.__WB_MANIFEST;
if (manifest) {
  // console.log("precached", manifest);
  workbox.precaching.precacheAndRoute(manifest, {});
}

// Navigation Route registration
// This is needed if you have different urls: Basically when using the Vue's Router
workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/index.html"));

// Image cache for requests to img/icons (android-chrom, favicon etc.)
workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: "images",
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  })
);

// Routing API EXAMPLE as CacheFirst
// Mostly for items which never change
workbox.routing.registerRoute(
  /^https:.*\/api\/EXAMPLE/,
  workbox.strategies.cacheFirst({
    cacheName: "apiCacheFirst",
  })
);

// Routing all other APIs as NetworkFirst
workbox.routing.registerRoute(
  /^https:.*\/api\//,
  workbox.strategies.networkFirst({
    cacheName: "apiCacheNetworkFirst",
  })
);

// Example case for caching Map as StaleWhileRevalidate
workbox.routing.registerRoute(
  new RegExp("https://atlas.microsoft.com/*"),
  workbox.strategies.staleWhileRevalidate({
    cacheName: "mapCache",
  })
);
