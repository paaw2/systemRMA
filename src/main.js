import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueFormWizard from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

// LightBootstrap plugin
import LightBootstrap from './light-bootstrap-main'

// router setup
import routes from './routes/routes'
// plugin setup
Vue.use(VueRouter)
Vue.use(VueResource)

Vue.http.options.root = 'https://systemrma-e746d.firebaseio.com/data'

Vue.use(LightBootstrap)
Vue.use(VueFormWizard)  
// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: 'nav-item active'
})
export const bus = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
