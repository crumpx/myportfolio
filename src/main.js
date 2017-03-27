// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueScrollto from 'vue-scrollto'
import VueHtml5Editor from 'vue-html5-editor'
import editorOption from './config'

Vue.use(VueHtml5Editor,editorOption)
Vue.use(vueScrollto)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
