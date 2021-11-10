module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'パーツショップタッキー'
    }
  },
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
