module.exports = {
  outputDir: "dist",
  productionSourceMap: false,

  css: {
    extract: false,
    sourceMap: true,
    loaderOptions: {
      scss: {
        additionalData: `@import "@/scss/_importIntoComponents.scss";`,
      },
    },
  },

  pwa: {
    name: "GARAIO Vue base PWA",
    themeColor: "#42b983",
    msTileColor: "#42b983",
    manifestOptions: {
      // eslint-disable-next-line @typescript-eslint/camelcase
      background_color: "#42b983",
    },
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "./src/sw.js",
      swDest: "service-worker.js",
    },
  },
};
