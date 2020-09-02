import { login } from '@/api/user'

export default {
  state: {
    /**
     * 保存数据
     **/
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
  },
  actions: {
    /**
     * 与mutations类似，但是异步操作的
     **/
    handleLogin ({ commit }, { username, password }) {
      username = username.trim()
      return new Promise((resolve, reject) => {
        login({
          username,
          password
        }).then(res => {
          console.log(res)
        }).catch(err => {
          reject(err)
        })
      })
    }
  },
  modules: {

  }
}

