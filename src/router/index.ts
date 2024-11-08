import { createRouter, createWebHistory } from 'vue-router'
import Cart from '../views/Cart.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/about',
      name: 'about',
      component: Cart

    },
    {
      path: '/',
      component: () => import('../views/Home.vue'),
    },
  ],
})

export default router
