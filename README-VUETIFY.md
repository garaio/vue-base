# vue-base-vuetify

This is the Vuefity base, for details of the vue-base, please reffer to the [README.md](./README.md)

## Preview url

* [boilerplates-vuetify--garaio-vue-base.netlify.app](https://boilerplates-vuetify--garaio-vue-base.netlify.app)

## Vuetify Base

In addition to the vue-base, it contains the installation of the *vuetify* feature from the **vue cli**

> vue add vuetify

The installation options selected are the following:

* Choose a preset: **Configure (advanced)**
* Use a pre-made template? (will replace App.vue and HelloWorld.vue) **No**
* Use custom theme? **Yes**
* Use custom properties (CSS variables)? **No**
* Select icon font: **Material Design Icons**
* Use fonts as a dependency (for Electron or offline)? **No**
* Use a-la-carte components? **Yes**
* Select locale: **German**

----

## Vuetify customizations

We customized vuetify a little bit to improve the base setup.

### Confguration ready

The `plugins/vuetify.ts` has ready theme configuration settings & locale definition. Actually this comes from the vuetify cli options documented above...

### TS Types ready

The `tsconfig.json` includes "vuetify" which fixes type errors when importing vuetify

### Vuetify Variables ready to be changed

The `vue.config.js` includes loading a sass import, allowing you to override vuetify variables in the `src/sass/vuetifyVariables.sass` file.

### App changes

The app itself has some vuetify components to showcase it.

* v-app (required)
* v-navigation-drawer
* v-app-bar

## What you could change / improve or do different

* The icons are loaded with CDN reference, you could change this to real SVG icons if you want (check vuetify documentation)
