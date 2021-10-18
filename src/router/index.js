import Vue from 'vue'
import Router from 'vue-router'
import FirstView from '../components/pages/FirstView'
import PriceList from '../components/pages/PriceList'
import NotFound from '../components/pages/NotFound.vue'
// import ProductConditionTable from './components/ProductConditionTable.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '/',
      name: 'first_view',
      component: FirstView
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
