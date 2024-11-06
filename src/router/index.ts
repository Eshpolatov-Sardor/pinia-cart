import { createRouter, createWebHistory } from 'vue-router'
import Cart from '../views/Cart.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Cart

    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/Home.vue'),
    },
  ],
})

export default router
