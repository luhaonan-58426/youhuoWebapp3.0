import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home'
import Classify from '../pages/classify'
import My from '../pages/my'
import Shopcar from '../pages/shopcar'
import Stroll from '../pages/stroll'

Vue.use(VueRouter)

let router = new VueRouter({
  routes:[
    {
    name: 'home',
    path: '/',
    component: Home
  },
  {
    path: '/classify',
    name: 'Classify',
    component: Classify
  },
  {
    path: '/my',
    name: 'My',
    component: My
  },
  {
    path: '/shopcar',
    name: 'Shopcar',
    component: Shopcar
  },
  {
    path: '/stroll',
    name: 'Stroll',
    component: Stroll
  }
  ]
})
export default router
// const routes = [
//   {
//     path: '/home',
//     name: 'home',
//     component: Home
//   },
//   {
//     path: '/classify',
//     name: 'Classify',
//     component: Classify
//   },
//   {
//     path: '/my',
//     name: 'My',
//     component: My
//   },
//   {
//     path: '/shopcar',
//     name: 'Shopcar',
//     component: Shopcar
//   },
//   {
//     path: '/stroll',
//     name: 'Stroll',
//     component: Stroll
//   },
//   {
//     path: '/*',
//     redirect:"/home"
//   }
// ]
//
// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })
//
// export default router
