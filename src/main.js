import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import New from './New.vue'
Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  { path: '/new', component: New }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
