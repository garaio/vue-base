// Basically code from https://github.com/chrisvfritz/vue-enterprise-boilerplate/blob/master/src/components/_globals.js

// Globally register all base components for convenience, because they
// will be used very frequently. Components are registered using the
// PascalCased version of their file name.

import Vue from "vue";

// https://webpack.js.org/guides/dependency-management/#require-context
const requireComponent = require.context(
  // Look for files in the components directory
  "./components/",
  // Do not look in subdirectories
  false,
  // We include all files in components/
  // We could also only include "_base-" prefixed.vue files
  /[\w-]+\.vue$/
);

// For each matching file name...
requireComponent.keys().forEach(fileName => {
  // Get the component config
  const componentConfig = requireComponent(fileName);
  // Get the PascalCase version of the component name
  const componentName = fileName
    // Remove the "./" from the beginning
    .replace(/^\.\//, "")
    // Remove the file extension from the end
    .replace(/\.\w+$/, "")
    // Split up kebabs
    .split("-")
    // Upper case
    .map(kebab => kebab.charAt(0).toUpperCase() + kebab.slice(1))
    // Concatenated
    .join("");

  // Globally register the component
  Vue.component(componentName, componentConfig.default || componentConfig);
});
