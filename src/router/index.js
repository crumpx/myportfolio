import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing/Landing'
import Blog from '@/components/Blog/Blog'
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
      path: '/Blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/blog/login',
      name: 'login',
      component: Login
    },

  ]
})
