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
};
