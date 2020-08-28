import Vue from 'vue'
import VueRouter from 'vue-router'
import routers from './routers'
// import Login from '@/views/login/login'
// import Main from '@/components/main/main'
Vue.use(VueRouter)

const routes = routers
const router = new VueRouter({
  routes
})

export default router
