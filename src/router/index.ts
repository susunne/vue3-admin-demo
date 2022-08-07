import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: { name: 'Login' } },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/frontlogin',
    name: 'FrontLogin',
    component: () => import('../views/FrontLogin.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '/details',
        name: 'Details',
        component: () => import('../components/Details.vue')
      },
      {
        path: '/task',
        name: 'Task',
        component: () => import('../components/Task.vue')
      },
      {
        path: '/list',
        name: 'List',
        component: () => import('../components/List.vue')
      },
      {
        path: '/manage',
        name: 'Manage',
        component: () => import('../components/manage/Manage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router