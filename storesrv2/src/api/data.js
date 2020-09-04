import axios from '@/libs/api.request'

// 获取已注册用户信息分页
export const getUserInfoPageInfo = (data) => {
  return axios.request({
    url: '/to4sservice/getUserInfoPageInfo',
    method: 'post',
    data
  })
}
// 获取激活码列表
export const getCdkInfoPageInfo = (data) => {
  return axios.request({
    url: '/to4sservice/getCdkInfoPageInfo',
    method: 'post',
    data
  })
}

// 根据VIN和证件号获取销服数据
export const getDmsInfo = (data) => {
  return axios.request({
    url: '/to4sservice/getDmsInfo',
    method: 'post',
    data
  })
}
