import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'


import Home from '@/pages/Home'
import Market from '@/pages/Market'
import Cart from '@/pages/Cart'
import Mine from '@/pages/Mine'

//加载我们的插件，这个时候vue-router才能使用
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/market',
    name: 'Market',
    component: Market
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/mine',
    name: 'Mine',
    component: Mine
  }
  ]
})
