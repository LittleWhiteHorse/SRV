import axios from '@/libs/api.request'


// 登录
export const login = (data) => {
  return axios.request({
    url: '../mock/login.json',
    method: 'get',
    // headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data
  })
}

// 退出
export const logout = () => {
  return axios.request({
    url: '/to4s/logout',
    method: 'post'
  })
}

// 获取服务店名称信息
export const getAfterUserInfo = () => {
  return axios.request({
    url: '../mock/getAfterUserInfo.json',
    method: 'get'
  })
}

