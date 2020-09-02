import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import config from '@/config'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'

Vue.use(ViewUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  config,
  render: h => h(App)
}).$mount('#app')
