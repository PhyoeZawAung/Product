import Vue from 'vue'
import App from './App.vue'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router/'
import VueRouter from "vue-router"
import store from './store'
import Notifications from 'vue-notification'
Vue.config.productionTip = false


Vue.use(VueRouter);

Vue.use(Notifications)
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
