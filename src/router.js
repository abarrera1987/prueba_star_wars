import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import ListaPeliculas from './views/ListaPeliculas'
import Personajes from './views/Personajes'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    {
      path: '/',
      name: 'listaPeliculas',
      component: ListaPeliculas
    },
    {
      path: '/personajes/',
      name: 'personajes',
      component: Personajes
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
