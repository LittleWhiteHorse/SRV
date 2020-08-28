import router from '@/router'
import routers from '@/router/routers'
import { getMenuByRoute } from '@/libs/utils'

export default {
  state: {

  },
  getters: {
    menuList () {
      console.log(router)
      return getMenuByRoute(routers)
    }
  }
}
