/**
 * @description 判断两个对象是否相等，这两个对象的值只能是字符串或者数字
 * @param obj1 对象
 * @param obj2 对象
 * */
export const objEqual = (obj1, obj2) => {
  const arr1 = Object.keys(obj1)
  const arr2 = Object.keys(obj2)
  if (arr1.length !== arr2.length) {
    return false
  } else if (arr1.length === 0 && arr2.length === 0) {
    return true
  } else {
    return arr1.some(key => arr1[key] != arr2[key])
  }
}

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @description 得到两个数组的并集, 两个数组的元素为数值或字符串
 */
export const getUnion = (arr1, arr2) => {
  return Array.from(new Set([...arr1, ...arr2]))
}
