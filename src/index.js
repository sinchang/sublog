import Vue from 'vue'
import VueRouter from 'vue-router'
import App from 'components/App'
import Index from 'components/Index'
import Post from 'components/Post'
import moment from 'vue-moment'

Vue.use(moment)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  routes: [{
    path: '/',
    name: 'index',
    component: Index
  }, {
    path: '/post/:id',
    name: 'post',
    component: Post
  }]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
