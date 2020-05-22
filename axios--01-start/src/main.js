import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate);

axios.defaults.baseURL = 'https://vuejs-axios-8d8b6.firebaseio.com'
//axios.defaults.headers.common['Authorization'] = 'Sakib'
//axios.defaults.headers.get['Accept'] = 'Sakib/json'

const reqInterceptor = axios.interceptors.request.use(config => {
  console.log('Request Interceptor', config);
  return config;
})

const resInterceptor = axios.interceptors.response.use(res => {
  console.log('Response Interceptor', res);
  return res;
})

axios.interceptors.request.eject(reqInterceptor);
axios.interceptors.response.eject(resInterceptor);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

