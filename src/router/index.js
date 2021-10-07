import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/pages/Home.vue'
import PriceList from '../components/pages/PriceList.vue'
// import ProductConditionTable from './components/ProductConditionTable.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/price_list',
      name: 'price_list',
      component: PriceList
    }
    // {
    //   path: '/product_condition_table',
    //   name: 'product_condition_table',
    //   component: ProductConditionTable
    // }
  ],
  scrollBehavior (to, from, savedPosition) {
    return to.hash ? { selector: to.hash, offset: { x: 0, y: 64 } } : { x: 0, y: 0 }
  }
})
