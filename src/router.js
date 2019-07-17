import Vue from 'vue'
import Router from 'vue-router'
import ProductsList from './views/ProductsList.vue'
import StarRating from 'vue-star-rating'

Vue.use(Router)
Vue.component('star-rating', StarRating);


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Products List',
      component: ProductsList
    },
    {
      path: '/product_card',
      name: 'Product Card',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/ProductCard.vue')
    }
  ]
})
