import axios from '@/libs/api.request'

// 获取已注册用户信息分页
export const getUserInfoPageInfo = (data) => {
  return axios.request({
    url: '../mock/getUserInfoPageInfo.json',
    method: 'get',
    data
  })
}
// 获取激活码列表
export const getCdkInfoPageInfo = (data) => {
  return axios.request({
    url: '/to4sservice/getCdkInfoPageInfo.json',
    method: 'get',
    data
  })
}

