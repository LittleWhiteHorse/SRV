import axios from '@/libs/api.request'

// 登录
export const login = (data) => {
  return axios.request({
    url: '/to4s/login',
    method: 'post',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  })
}

// 退出
export const logout = (data) => {
  return axios.request({
    url: '/to4s/logout',
    method: 'post',
    headers: { 'Token': data }
  })
}

// 获取服务店名称信息
export const getAfterUserInfo = (data) => {
  return axios.request({
    url: '/to4sservice/getAfterUserInfo',
    method: 'post',
    headers: { 'Token': data }
  })
}
