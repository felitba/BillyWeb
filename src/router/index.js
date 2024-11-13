import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/vmail',
    name: 'verified-mail',
    component: () => import('../views/VerifiedMail.vue'),
  },
  {
    path: '/pchanged',
    name: 'password-changed',
    component: () => import('../views/PasswordChanged.vue'),
  },
  {
    path: '/:catchAll(.*)',
    name: 'not-found',
    component: () => import('../views/PageNotFound.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
