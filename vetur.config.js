// see https://vuejs.github.io/vetur/guide/global-components.html
/** @type {import('vls').VeturConfig} */
module.exports = {
  projects: [
    {
      root: "./",
      globalComponents: ["./src/components/*.vue"],
    },
  ],
};
