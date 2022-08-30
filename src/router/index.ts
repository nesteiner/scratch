import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/playground',
    name: 'playground',
    component: () => import('@/views/PlayGround.vue')
  },
  // {
  //   path: '/justify',
  //   name: 'justify',
  //   component: () => import('@/views/justify.vue')
  // },
  {
    path: '/grid',
    name: 'grid',
    component: () => import('@/views/grid.vue')
  },

  {
    path: '/table',
    name: 'table',
    component: () => import('@/views/Table.vue')
  },
  {
    path: "/test",
    name: "test",
    component: () => import("@/views/TestView.vue")
  }

  // {
  //   path: '/pomodoro',
  //   name: 'pomodoro',
  //   component: () => import('@/views/pomodoro.vue')
  // },
  // {
  //   path: '/drag',
  //   name: 'drag',
  //   component: () => import('@/views/drag.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
