import Vue from 'vue'
import VueRouter from 'vue-router'
import routers from './routers'
// import Login from '@/views/login/login'
// import Main from '@/components/main/main'
import store from '@/store'
import ViewUI from 'view-design'
import { setToken, getToken, canTurnTo } from '@/libs/utils'
import config from '@/config'
const { homeName } = config
Vue.use(VueRouter)

const routes = routers
const router = new VueRouter({
  routes
})

const LOGIN_PAGE_NAME = 'login'

const turnTo = (to, access, next) => {
  if (canTurnTo(to.name, access, routes)) next() // 有权限，可访问
  else next({ replace: true, name: 'error_401' }) // 无权限，重定向到401页面
}

router.beforeEach((to, from, next) => {
  // next()
  // return
  ViewUI.LoadingBar.start()
  const token = getToken()
  console.log('to', to)
  console.log('token', token)
  if (!token && to.name !== LOGIN_PAGE_NAME) {
    console.log('token', 1)
    // 未登录且要跳转的页面不是登录页
    next({
      name: LOGIN_PAGE_NAME // 跳转到登录页
    })
  } else if (!token && to.name === LOGIN_PAGE_NAME) {
    console.log('token', 2)
    // 未登陆且要跳转的页面是登录页
    next() // 跳转
  } else if (token && to.name === LOGIN_PAGE_NAME) {
    console.log('token', 3)
    // 已登录且要跳转的页面是登录页
    next({
      name: homeName // 跳转到homeName页
    })
  } else {
    if (store.state.user.hasGetInfo) {
      console.log('token', 4)
      turnTo(to, store.state.user.access, next)
    } else {
      console.log('token1', 5)
      store.dispatch('getStoreInfo').then(user => {
        console.log('token1', 6)
        // 拉取用户信息，通过用户权限和跳转的页面的name来判断是否有权限访问;access必须是一个数组，如：['super_admin'] ['super_admin', 'admin']
        turnTo(to, [], next)
      }).catch((err) => {
        console.log('token1', 7, err)
        setToken('')
        next({
          name: 'login'
        })
      })
    }
  }
})

router.afterEach(to => {
  ViewUI.LoadingBar.finish()
  window.scrollTo(0, 0)
})


export default router
