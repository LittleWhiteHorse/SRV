import axios from '@/libs/api.request'

// 登录
export const login = ({ username, password }) => {
  const data = {
    username,
    password
  }
  return axios.request({
    url: '/to4s/login',
    data,
    method: 'post'
  })
}
