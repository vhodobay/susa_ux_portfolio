import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/work/:slug',    component: () => import(/* webpackChunkName: "edit" */ '../views/projectView.vue')
  
}

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
