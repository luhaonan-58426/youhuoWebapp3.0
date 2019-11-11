import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home'
import Classify from '../pages/classify'
import My from '../pages/my'
import Shopcar from '../pages/shopcar'
import Stroll from '../pages/stroll'
import Productlist from '../pages/productlist'
// import Boys from '../components/classify/boys'
// import Girls from '../components/classify/girls'
// import Kids from '../components/classify/kids'
// import Lifestyle from '../components/classify/lifestyle'
// import Tuijian from '../components/classify/boys/tuijian'
// import Shangyi from '../components/classify/boys/shangyi'
Vue.use(VueRouter)

let router = new VueRouter({
  routes:[
    {
    name: 'home',
    path: '/home',
    component: Home
  },
  {
    path: '/classify',
    name: 'Classify',
    component: Classify
    // children:[
    //   {path: '/boys',
    //     name: 'Boys',
    //     component: Boys,
        // children:[
        //   {
        //     name: 'Tuijian',
        //     path: '/tuijian',
        //     component: Tuijian
        //   },
        //   {
        //     name: 'Shangyi',
        //     path: '/shangyi',
        //     component: Shangyi
        //   },
        //   {
        //     path: '/',
        //     redirect:"/tuijian"
        //   }
        // ]
      // },
      // {path: '/girls',
      //   name: 'Girls',
      //   component: Girls},
      // {path: '/kids',
      //   name: 'Kids',
      //   component: Kids},
      // {path: '/lifestyle',
      //   name: 'Lifestyle',
      //   component: Lifestyle},
      // {
      //   path: '/',
      //   redirect:"/boys"
      // }
    // ]
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
  },
    {
      path: '/productlist',
      name: 'Productlist',
      component: Productlist
    },
    {
    path: '/',
    redirect:"/home"
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
