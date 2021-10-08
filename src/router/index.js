import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/pages/Home'
import PriceList from '../components/pages/PriceList'
import StoreInfo from '../components/pages/StoreInfo'
import FirstView from '../components/pages/FirstView'
import NoticeView from '../components/pages/NoticeView'
import TradingFlowView from '../components/pages/TradingFlowView'
import ConsiderationsView from '../components/pages/ConsiderationsView'
import ReturnAndRefundView from '../components/pages/ReturnAndRefundView'
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
      path: 'store_info',
      name: 'store_info',
      component: StoreInfo
    },
    {
      path: 'first_view',
      name: 'first_view',
      component: FirstView
    },
    {
      path: 'notice_view',
      name: 'notice_view',
      component: NoticeView
    },
    {
      path: 'trading_flow_view',
      name: 'trading_flow_view',
      component: TradingFlowView
    },
    {
      path: 'considerations_view',
      name: 'considerations_view',
      component: ConsiderationsView
    },
    {
      path: 'return_and_refund_view',
      name: 'return_and_refund_view',
      component: ReturnAndRefundView
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
