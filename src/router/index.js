import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../pages/Home.vue')
  },
  {
    path: '/pokemon',
    component: () => import('../pages/Pokemon.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
