import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from './cpns/Login.vue'
import Home from './cpns/Home.vue'
import Welcome from './cpns/Welcome.vue'
import Users from './cpns/user/Users.vue'
import Rights from './cpns/power/Rights.vue'
import Roles from './cpns/power/Roles.vue'
import Cate from './cpns/goods/Cate.vue'
import Params from './cpns/goods/Params.vue'
import List from './cpns/goods/List.vue'
import Add from './cpns/goods/Add.vue'


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
      },
      {
        path: '/rights',
        component: Rights 
      },
      {
        path: '/roles',
        component: Roles
      },
      {
        path: '/categories',
        component: Cate
      },
      {
        path: '/params',
        component: Params
      },
      {
        path: '/goods',
        component: List
      },
      {
        path: '/goods/add',
        component: Add
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
