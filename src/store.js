import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    mode: '',
    blog: {
      title: '',
      subtitle: '',
      content: '',
      tag: '',
    }
  },
  getters: {
    blog(state) {
      return state.blog
    },

  },
  mutations: {
    onEditingBlog(state, blog) {
      state.blog.title = blog.title
      state.blog.subtitle = blog.subtitle
      state.blog.content = blog.content
      state.blog.tag = blog.tag
    },
    onEditingBlogContent(state, content) {
      state.blog.content = content
    },
    onCancel(state, blog) {
      state.blog.title =  ''
      state.blog.subtitle =  ''
      state.blog.content = ''

    }

  }
})
