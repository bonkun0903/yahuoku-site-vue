module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "@/assets/sass/prepends.scss";'
      }
    }
  }
}
