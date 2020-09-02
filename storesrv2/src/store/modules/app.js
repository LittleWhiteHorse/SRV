import router from '@/router'
import routers from '@/router/routers'
import {
  getMenuByRoute,
  routeHasExist,
  equalRoute,
  getNextRoute,
  getHomeRoute,
  setTagsNavLocalStorage,
  getTagsNavLocalStorage
} from '@/libs/utils'
import config from '@/config'

const { homeName } = config

export default {
  state: {
    tagsNavList: [],
    homeRoute: {}
  },
  getters: {
    menuList () {
      return getMenuByRoute(routers)
    }
  },
  mutations: {
    addTag (state, { route, type = 'unshift' }) {
      let router = route
      if (!routeHasExist(state.tagsNavList, router)) {
        if (type === 'push') {
          state.tagsNavList.push(router);
        } else {
          if (route.name === homeName) {
            state.tagsNavList.unshift(router)
          }
        }
        setTagsNavLocalStorage([...state.tagsNavList])
      }
    },
    closeTag (state, route) {
      // console.log(route)
      let tag = state.tagsNavList.filter(item => equalRoute(item, route))
      let resRoute = tag[0] ? tag[0] : null
      if (!resRoute) return
      const nextRoute = getNextRoute(state.tagsNavList, resRoute)
      console.log(nextRoute)
      state.tagsNavList = state.tagsNavList.filter(item => {
        return !equalRoute(item, route)
      })
      router.push(nextRoute)
    },
    setHomeRoute (state, route) {
      state.homeRoute = getHomeRoute(route)
    },
    setTagsNavList (state, list) {
      let listVal = []
      if (list) {
        listVal = list
      } else {
        listVal = getTagsNavLocalStorage() || []
      }
      let homeIndex = listVal.findIndex(item => item.name === homeName)
      if (homeIndex > 0) {
        let homeTag = listVal.splice(homeIndex, 1)[0]
        listVal.unshift(homeTag)
      }
      state.tagsNavList = listVal
      setTagsNavLocalStorage([...listVal])
    }
  },
  actions: {

  },
  modules: {

  }
}
