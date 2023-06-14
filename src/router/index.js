import { createRouter, createWebHistory } from 'vue-router'
import RightPanel from '@/views/RightPanel.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: RightPanel
    },
    {
      path: '/rightpanel',
      name: 'rightpanel',
      component: RightPanel
    },
  ]
})

export default router
