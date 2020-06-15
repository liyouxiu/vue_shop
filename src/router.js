import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from './cpns/Login.vue'
import Home from './cpns/Home.vue'
import Welcome from './cpns/Welcome.vue'
import Users from './cpns/user/Users.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: './login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home,
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        component: Welcome
      },
      {
        path: '/users',
        component: Users
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router
