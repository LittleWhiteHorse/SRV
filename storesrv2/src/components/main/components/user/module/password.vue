<style>

</style>
<template>
  <div>
    <Modal v-model="regmodel" footer-hide width="500px">
      <div style="width: 86%;margin: auto">
        <H3 style="height: 60px;display: flex;justify-content: center;align-items: center">修改密码</H3>
        <Form :label-width="70" :model="form" ref="form" :rules="formRule">
          <FormItem label="原密码" prop="passwordOld">
            <Input v-model="form.passwordOld" placeholder="请输入原密码..." />
          </FormItem>
          <FormItem label="新密码" prop="passwordNew">
            <Input v-model="form.passwordNew" placeholder="请输入6-16位字符..." />
          </FormItem>
          <FormItem label="新密码" prop="againNew">
            <Input v-model="form.againNew" placeholder="请输入6-16位字符..." />
          </FormItem>
          <div style="height: 60px;display: flex;justify-content: center">
            <Button type="primary" style=" background-color: #1d579f;border: #1d579f;width:300px" @click="handleSubmit">确定</Button>
          </div>
        </Form>
      </div>
    </Modal>
  </div>
</template>
<script>
import { updatePassword } from '@/api/user'
export default {
  name: 'app',
  data () {
    const reg = /^[0-9a-zA-Z_#]{6,16}$/;
    const passwordOldValid = (rule, value, callback) => {
      if (!reg.test(this.form.passwordOld)) {
        callback(new Error('原密码格式不正确，请重新输入。'))
      } else {
        callback()
      }
    }
    const passwordValid = (rule, value, callback) => {
      if (!reg.test(this.form.passwordNew)) {
        callback(new Error('新密码格式不正确，请重新输入。'))
      } else {
        callback()
      }
    }
    const againNewValid = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入新密码。'));
      } else if (value !== this.form.passwordNew) {
        callback(new Error('与输入的新密码不一致，请重新输入。'))
      } else {
        callback()
      }

    }

    return {
      regmodel: false,
      form: {
        passwordOld: '',
        passwordNew: '',
        againNew: ''
      },
      formRule: {
        passwordOld: [{ required: true, validator: passwordOldValid, trigger: 'blur' }],
        passwordNew: [{ required: true, validator: passwordValid, trigger: 'blur' }],
        againNew: [{ required: true, validator: againNewValid, trigger: 'blur' }]
      }
    }
  },
  methods: {
    showModal () {
      this.regmodel = true
    },
    handleSubmit () {
      this.$refs.form.validate((valid) => {
        if (!valid) return
        let param = {
          passwordOld: this.form.passwordOld,
          passwordNew: this.form.passwordNew
        }
        updatePassword(param).then(res => {
          if (res.data.code == '1') {
            this.$Message.success(res.data.message)
            this.regmodel = false
            this.$refs.form.resetFields()
          } else {
            this.$Message.warning(res.data.message)
          }
        })
      })
    }
  }
}
</script>
