import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'Home',
    component: () => import( '../views/Home.vue')
  },
  { path: '/', redirect: { name: 'Home' } },
  {
    path: '/login',
    name: 'Login',
    component: () => import( '../views/Login.vue')
  },
  {
    path: '/frontlogin',
    name: 'FrontLogin',
    component: () => import( '../views/FrontLogin.vue')
  },
  {
    path: '/details',
    name: 'Details',
    component: () => import( '../components/Details.vue')
  },
  {
    path: '/task',
    name: 'Task',
    component: () => import( '../components/Task.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import( '../components/Test.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router