# vue-base-pwa

This is the PWA base, for details of the vue-base, please reffer to the [README.md](./README.md)

## PWA Base

In addition to the vue-base, it contains the installation of the *vue pwa* feature from the **vue cli**

> vue add pwa

----

## PWA customizations

We have changed or added some details to make it more customizable

### `src/registerServiceWorker.ts`

Dispatching all the service worker events so we can catch them on the document / app.

### `src/sw.js`

Adding our own service worker, to customize its behavior.
For further infomration check the file itself.

### `vue.config.js`

Added the **pwa** config, to allow further customization and loading of our own service worker.

----

## PWA additions

We created in addition some features, to handle the PWA even better

### **Plugin:** `pwaState.ts`

This plugin adds some EventListeners and logs them to the console.
Also it includes a state, which is available in all Components:

``` 
$pwa.isOffline
$pwa.isReady
```

#### isReady

Indicates if the PWA is ready. This is actually coming from the service workers "ready" event.

#### isOffline

Indicates if the application is offline or not, this is a general event, and has nothing to do with PWA itself, but can be useful to detect or show the current network status.

### **Component:** `pwaRefreshUi.vue`

This component shows an example of how you can listen to the service workers **updated** event, and let the user to decide to update / refresh the current page/app.

----

## Documentation

Further documentation and knowhow about PWA, you can find here:

 * @vue/cli-plugin-pwa: https://cli.vuejs.org/core-plugins/pwa.html#configuration
 * Workbox: https://developers.google.com/web/tools/workbox
 * Progressive Web Apps on web.dev: https://web.dev/progressive-web-apps/
 * Give Users Control Over App Updates in Vue CLI 3 PWAs: https://medium.com/@dougallrich/give-users-control-over-app-updates-in-vue-cli-3-pwas-20453aedc1f2

## Video tutorials

* Progressive Web App Training from Google: https://www.youtube.com/playlist?list=PLNYkxOF6rcIB2xHBZ7opgc2Mv009X87Hh
* PWA Tutorial: https://youtu.be/4XT23X0Fjfk
