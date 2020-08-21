# vue-base-pwa

This is the PWA base, for details of the vue-base, please reffer to the README.md

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
