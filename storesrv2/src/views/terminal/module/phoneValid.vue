<style>
</style>

<template>
  <div>
    <Modal v-model="regmodel" footer-hide width="500px" :mask-closable="false">
      <div style="width: 86%;margin: auto">
        <H3 style="height: 60px;display: flex;justify-content: center;align-items: center">{{titleval}}</H3>
        <Form :label-width="70" :model="form" ref="form" :rules="formRule">
          <FormItem label="手机号码" prop="phone">
            <Row>
              <Col :span="16"><Input v-model="form.phone" placeholder="请输入手机号码..." /></Col>
              <Col :span="8"><Button type="primary" :disabled="disabled" style=" background-color: #1d579f;border: #1d579f; margin-left: 5px;" @click="handleGetCode">{{verifyText}}</Button></Col>
            </Row>
          </FormItem>
          <FormItem label="验证码" prop="cdkId">
            <Row>
              <Col :span="16"><Input v-model="form.cdkId" placeholder="请输入验证码..." /></Col>
            </Row>
            <span v-if="disabled" style="color: #90918d;">验证码已成功发送，请注意查收。</span>
          </FormItem>
        </Form>
        <div  style="height: 60px;display: flex;justify-content: center">
          <Button type="primary" style=" background-color: #1d579f;border: #1d579f;width:300px" @click="handleSubmit">确定使用</Button>
        </div>
      </div>
    </Modal>

    <!--激活码组件-->
    <cdk-detail ref="cdkDetail"></cdk-detail>
  </div>
</template>

<script type='es6'>
import cdkDetail from './cdkDetail.vue'
import { postAction } from '@/api/data.js'
export default {
  name: 'app',
  components: {
    cdkDetail
  },
  data () {
    const phoneValid = (rule, value, callback) => {
      const reg = /^[0-9]{11}$/;
      if (!reg.test(value)) {
        callback(new Error('手机号格式不正确！'))
      } else {
        callback()
      }
    }

    const cdkValid = (rule, value, callback) => {
      if (value)
        callback()
      else
        callback(new Error('验证码不能为空！'))
    }
    return {
      regmodel: false,
      disabled: false,
      Traem: true,
      titleval: '使用激活码，请输入手机号验证码',
      verifyText: '获取验证码',
      form: {
        phone: '',
        cdkId: ''
      },
      formRule: {
        phone: [{ validator: phoneValid, trigger: 'blur' }],
        cdkId: [{ validator: cdkValid, trigger: 'blur' }]
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
        let obj = {
          cdk: this.form.cdkId
        }
        postAction('/to4sservice/validCdk', obj).then(res => {
          if (res.data.code == '1') {
            this.regmodel = false
            let params = {
              cdkId: this.form.cdkId,
              phone: this.form.phone
            }
            postAction('/to4sservice/getCdkDetail', params).then(res => {
              if (res.data.code == '1') {
                this.$refs.cdkDetail.showCdkModal(res.data.respondData)
              }
            })
          } else {
            this.$Message.warning(res.data.message)
          }
        })
      })
    },
    handleGetCode () {
      this.disabled = true
      if (this.Traem) {
        this.Traem = false
        let langtime =60
        let than=this
        let a = setInterval(function() {
          if (langtime == 0) {
            than.Traem = true
            than.disabled = false
            than.verifyText = "发送验证码"
            clearInterval(a)
          } else {
            langtime--
            console.log(langtime);
            than.verifyText = `${langtime}s`
          }
        }, 1000)
      }
    }
  }
}
</script>
