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
    url: '../mock/logout.json',
    method: 'get'
  })
}


export const getAfterUserInfo = () => {
  return axios.request({
    url: '../mock/getAfterUserInfo.json',
    method: 'get'
  })
}

