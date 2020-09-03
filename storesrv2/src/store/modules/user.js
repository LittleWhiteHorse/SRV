import { login, getAfterUserInfo, logout } from '@/api/user'
import { setToken, getToken } from '@/libs/utils'
export default {
  state: {
    /**
     * 保存数据
     **/
    token: getToken(),
    userName: ''
  },
  getters: {
    /**
     * 与state类似，可从state中获取数据
     **/
  },
  mutations: {
    /**
     * 更改state中数据的唯一方法，但是同步操作的
     **/
    setToken (state, token) {
      state.token = token
      setToken(token)
    },
    setUserName (state, username) {
      state.userName = username
    }
  },
  actions: {
    /**
     * 与mutations类似，但是异步操作的
     **/
    // 登录
    handleLogin ({ commit }, { username, password }) {
      username = username.trim()
      const qs = require('qs')
      return new Promise((resolve, reject) => {
        login(qs.stringify({
          username,
          password
        })).then(res => {
          const data = res.data
          commit('setToken', data.message)
          commit('setUserName', username)
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    },
    // 退出
    handleLogout ({ state, commit }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(res => {
          commit('setToken', '')
          commit('setUserName', '')
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    },
    // 获取服务店名称信息
    getStoreInfo ({ state, commit }) {
      return new Promise((resolve, reject) => {
        getAfterUserInfo(state.token).then(res => {
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    }
  },
  modules: {

  }
}

