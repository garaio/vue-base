module.exports = {
  outputDir: "dist",
  productionSourceMap: false,

  css: {
    extract: false,
    sourceMap: true,
    loaderOptions: {
      scss: {
        prependData: `@import "@/scss/_importIntoComponents.scss";`,
      },
    },
  },
};
