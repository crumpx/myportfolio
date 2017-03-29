import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing/Landing'
import Blogs from '@/components/Blog/Blogs'
import Editor from '@/components/Blog/Editor'
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
      component: Blogs,
    },
    {
      // 当 /user/:id/profile 匹配成功，
      // UserProfile 会被渲染在 User 的 <router-view> 中
      path: '/blogs/edit',
      // name: 'editblog',
      component: Editor
    },
    {
      // 当 /user/:id/profile 匹配成功，
      // UserProfile 会被渲染在 User 的 <router-view> 中
      path: '/blogs/add',
      // name: 'addBlog',
      component: Editor
    },
    {
      path: '/blogs/login',
      name: 'login',
      component: Login
    },

  ]
})
