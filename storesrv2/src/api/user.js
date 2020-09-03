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
export const logout = () => {
  return axios.request({
    url: '/to4s/logout',
    method: 'post'
  })
}

// 获取服务店名称信息
export const getAfterUserInfo = () => {
  return axios.request({
    url: '/to4sservice/getAfterUserInfo',
    method: 'post'
  })
}

//获取已注册用户信息分页
export const getUserInfoPageInfo = (params) => {
  return axios.request({
    url: '/to4sservice/getUserInfoPageInfo',
    method: 'post',
    params
  })
}
// 获取激活码列表
export const getCdkInfoPageInfo = (params) => {
  return axios.request({
    url: '/to4sservice/getCdkInfoPageInfo',
    method: 'post',
    params
  })
}

// 开通云服务  登记用户
export const regUser = (params) => {
  return axios.request({
    url: '/to4sservice/regUser',
    method: 'post',
    params
  })
}
