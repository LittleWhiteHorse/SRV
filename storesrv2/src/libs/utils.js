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
