// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueScrollto from 'vue-scrollto'
// import 'vue-awesome/icons'
// import Icon from 'vue-awesome/components/Icon'

Vue.use(vueScrollto, {offset: -80})
Vue.config.productionTip = false
// Vue.component('icon',Icon)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App,  }
})
