import Cookies from 'js-cookie'
import { objEqual, hasOneOf } from './tools'
import config from '@/config'

/**
 * @param {Array} list 通过路由列表得到菜单列表
 * @return {Array}
 * */

export const getMenuByRoute = (list) => {
  let res = []
  if (list.length) {
    list.forEach(item => {
      if (!item.meta || (item.meta && !item.meta.hideInMenu)) {
        let obj = {
          icon: item.icon,
          name: item.name,
          meta: item.meta
        }
        if (item.children && item.children.length !== 0) {
          obj.children = getMenuByRoute(item.children)
        }
        res.push(obj)
      }
    })
  }
  return res
}
/**
 * @params {Number} times 回调函数需要执行的次数
 * @params {function} callback 回调函数
 * */
export const doCustomTimes = (times, callback) => {
  let i = -1
  while (++i < times) {
    callback(i)
  }
}

/**
 *  @description 根据name/params/query判断两个路由对象是否相等
 *  @param {*} route1 路由对象
 *  @param {*} route2 路由对象
 * */
export const equalRoute = (route1, route2) => {
  const params1 = route1.params || {}
  const params2 = route2.params || {}
  const query1 = route1.query || {}
  const query2 = route2.query || {}
  return (route1.name === route2.name) && objEqual(params1, params2) && objEqual(query1, query2)
}

/**
 *  判断打开的标签列表里是否已存在新添加的路由
 * */
export const routeHasExist = (tagsNavList, route) => {
  let len = tagsNavList.length
  let res = false
  doCustomTimes(len, (index) => {
    if (equalRoute(tagsNavList[index], route)) res = true
  })
  return res
}

/**
 * @params {Array} list 标签列表
 * @params {String} name 当前关闭标签的name
 * */
export const getNextRoute = (list, name) => {
  let res = {}
  console.log(list)
  console.log(name)

  const index = list.findIndex(item => equalRoute(item, name))
  console.log(index)
  console.log(list.length)
  if (index === list.length - 1) {
    res = list[list.length - 2]
  } else {
    res = list[list.length + 1]
  }
  return res
}

/**
 * @description 本地存储导航标签
 * */
export const setTagsNavLocalStorage = (list) => {
  localStorage.tagNaveList = JSON.stringify(list)
}

/**
 * @description 获取本地存储的导航标签
 * @return {Array} 其中的每个元素只包含路由原信息中的name, path, meta三项
 * */
export const getTagsNavLocalStorage = () => {
  const list = localStorage.tagsNavList
  return list ? JSON.parse(list) : []
}

/**
 * @description 找到路由列表中name为home的对象
 * @params {Array} list 路由列表数组
 * */
export const getHomeRoute = (list) => {
  let i = -1
  let len = list.length
  let homeRoute = {}
  while (++i < len) {
    let item = list[i]
    if (item.children && item.children.length) {
      let res = getHomeRoute(item.children)
      if (res.name) return res
    }
    if (item.name === 'home') {
      homeRoute = item
    }
  }
  return homeRoute
}

/**
 * @description 存储token
 **/
export const setToken = (token) => {
  Cookies.set('TOKEN_KEY', token, { expires: config.cookieExpires || 1 })
}

/**
 * @description 获取token
 **/
export const getToken = () => {
  const token = Cookies.get('TOKEN_KEY')
  if (token) return token
  else return false
}

/**
 * @param {*} access 用户权限数组，如 ['super_admin', 'admin']
 * @param {*} route 路由列表
 */
const hasAccess = (access, route) => {
  if (route.meta && route.meta.access) return hasOneOf(access, route.meta.access)
  else return true
}

/**
 * 权鉴
 * @param {*} name 即将跳转的路由name
 * @param {*} access 用户权限数组
 * @param {*} routes 路由列表
 * @description 用户是否可跳转到该页
 */
export const canTurnTo = (name, access, routes) => {
  const routePermissionJudge = (list) => {
    return list.some(item => {
      if (item.children && item.children.length) {
        console.log(item)
        return routePermissionJudge(item.children)
      } else if (item.name === name) {
        return hasAccess(access, item)
      }
    })
  }

  return routePermissionJudge(routes)
}

/**
 * @description 根据当前跳转的路由设置显示在浏览器标签的title
 * @param {Object} routeItem 路由对象
 * @param {Object} vm Vue实例
 */
export const setTitle = (routeItem, vm) => {
  const handledRoute = getRouteTitleHandled(routeItem)
  const pageTitle = showTitle(handledRoute, vm)
  const resTitle = pageTitle ? `${title} - ${pageTitle}` : title
  window.document.title = resTitle
}

export const getRouteTitleHandled = (route) => {
  let router = { ...route }
  let meta = { ...route.meta }
  let title = ''
  if (meta.title) {
    if (typeof meta.title === 'function') {
      meta.__titleIsFunction__ = true
      title = meta.title(router)
    } else title = meta.title
  }
  meta.title = title
  router.meta = meta
  return router
}

export const showTitle = (item, vm) => {
  let { title, __titleIsFunction__ } = item.meta
  if (!title) return
  if (useI18n) {
    if (title.includes('{{') && title.includes('}}') && useI18n) title = title.replace(/({{[\s\S]+?}})/, (m, str) => str.replace(/{{([\s\S]*)}}/, (m, _) => vm.$t(_.trim())))
    else if (__titleIsFunction__) title = item.meta.title
    else title = vm.$t(item.name)
  } else title = (item.meta && item.meta.title) || item.name
  return title
}

