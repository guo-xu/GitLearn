import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api'


Vue.config.productionTip = false
Vue.prototype.$api = api;// 将api挂载到vue的原型上，方便调用

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
