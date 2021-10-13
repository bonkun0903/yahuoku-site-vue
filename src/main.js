import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/index'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo)
Vue.config.productionTip = false

require('@/assets/sass/main.scss')

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

export default (ctx, inject) => {
  inject('scrollTo', VueScrollTo.scrollTo)
}
