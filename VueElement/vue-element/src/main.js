import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import api from './api'


Vue.config.productionTip = false
Vue.prototype.$api = api;// 将api挂载到vue的原型上，方便调用

Vue.use(Element);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
