import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    mode: '',
    blog: {}
  },
  getters: {
    blog(state) {
      return state.blog
    },

  },
  mutations: {
    onEditingBlog(state, payload) {
      state.blog = payload.blog
      state.mode = payload.mode
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
