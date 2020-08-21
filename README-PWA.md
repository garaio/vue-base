# vue-base-pwa

This is the PWA base, for details of the vue-base, please reffer to the [README.md](./README.md)

## PWA Base

Add the vue pwa feature from the cli

``` 
vue add pwa
```

## PWA additions / customizations

### src/registerServiceWorker.ts

Dispatching all the service worker events so we can catch them on the document / app.

### src/sw.js

Adding our own service worker, to customize its behavior.
For further infomration check the file itself.

### vue.config.js

Added the **pwa** config, to allow further customization and loading of our own service worker.

## Documentation

Further documentation and knowhow about PWA, you can find here:

 * @vue/cli-plugin-pwa: https://cli.vuejs.org/core-plugins/pwa.html#configuration
 * Workbox: https://developers.google.com/web/tools/workbox
 * Progressive Web Apps on web.dev: https://web.dev/progressive-web-apps/
 * Give Users Control Over App Updates in Vue CLI 3 PWAs: https://medium.com/@dougallrich/give-users-control-over-app-updates-in-vue-cli-3-pwas-20453aedc1f2

## Video tutorials

* Progressive Web App Training from Google: https://www.youtube.com/playlist?list=PLNYkxOF6rcIB2xHBZ7opgc2Mv009X87Hh
* PWA Tutorial: https://youtu.be/4XT23X0Fjfk
