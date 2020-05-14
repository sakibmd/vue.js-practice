import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes.js'
import store from './store/store.js'

Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode: 'history',
});


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
