<template>
  <div class="loginBackground">
    <Card class="loginBox">
      <h2>欢迎登陆4S店服务系统</h2>
      <Form :model="formInline" :rules="ruleInline" ref="formInline">
        <FormItem prop="user">
          <!-- 账号输入框 -->
          <Input type="text" v-model="formInline.user" placeholder="请输入用户名..."/>
        </FormItem>
        <FormItem prop="password">
          <!-- 密码输入框 -->
          <Input type="password" v-model="formInline.password" placeholder="请输入密码..." />
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit" long>登 录</Button>
        </FormItem>
      </Form>
    </Card>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'app',
  data () {
    return {
      formInline: {
        user: 'QI.CHAOCHAO@BYD.COM',
        password: ''
      },
      ruleInline: {
        user: [
          { required: true, message: 'Please fill in the user name', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Please fill in the password.', trigger: 'blur' },
          { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    ...mapActions([
      'handleLogin',
      'getStoreInfo'
    ]),
    handleSubmit () {
      this.$refs.formInline.validate((valid) => {
        if (!valid) return
        this.handleLogin({ username: this.formInline.user, password: this.formInline.password }).then(res => {
          if (res.data.code === 0) {
            this.$router.push({
              name: this.$config.homeName
            })
          } else if (res.data.code === 3) {
            this.$Message.warning(res.data.message)
            this.$router.push({
              name: 'login'
            })
          } else if (res.data.code === 1) {
            this.$Message.error(res.data.message)
          } else {
            this.$Message.warning(res.data.message)
          }
        })
      })
    }
  },
  created () {

  },
  mounted () {

  }
}
</script>

<style scoped>
  @import './login.css';
</style>
