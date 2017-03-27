import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing/Landing'
import Blogs from '@/components/Blog/Blogs'
import Login from '@/components/User/Login'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/blogs',
      name: 'Blogs',
      component: Blogs
    },
    {
      path: '/blogs/login',
      name: 'login',
      component: Login
    },

  ]
})
