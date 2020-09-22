<style>
  .titlename{
    height: 60px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .ivu-col.emailClass {
    margin: 0;
  }

</style>

<template>
  <!--登记用户页面-->
  <div>
    <!--顶部查询-->
    <div>
      <Card>
        <Form :model="formData" ref="formInline" :rules="formRule" inline :label-width="80">
          <FormItem label="车架号" prop="vin">
            <Input v-model="formData.vin" placeholder="请输入车架号"/>
          </FormItem>
          <FormItem prop="idCard" label="证件号码">
            <Input v-model="formData.idCard" placeholder="请输入证件号码"/>
          </FormItem>
          <FormItem v-if="showCdkCode" prop="cdkCode" label="激活码">
            <Input v-model="formData.cdkCode" placeholder="请输入证件号码"/>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="searchBtn">查询</Button>
          </FormItem>
        </Form>
      </Card>
    </div>
    <!--客户信息-->
    <Form :model="infoData" ref="infoData" inline :label-width="120">
      <div>
        <div class="titlename">
          <H3>客户信息</H3>
        </div>
        <Card>
          <FormItem prop="userName" label="客户姓名">
            <Input v-model="infoData.userName" disabled />
          </FormItem>
          <FormItem prop="phone" label="购车手机号">
            <Input v-model="infoData.phone" disabled/>
          </FormItem>
          <FormItem prop="email" label="邮箱">
            <Row>
              <Col class="emailClass" span="20">
                <Input v-model="infoData.email" disabled />
              </Col>
              <Col class="emailClass" span="4">
                <Tooltip placement="top" theme="light">
                  <Icon type="md-help-circle" />
                  <div slot="content" style="width: 200px; white-space: normal">
                    购车手机号需要经销商在销服系统中才能修改。
                  </div>
                </Tooltip>
              </Col>
            </Row>
          </FormItem>
          <FormItem prop="area" label="所属区域">
            <Input v-model="infoData.area" disabled />
          </FormItem>
          <FormItem prop="address" label="客户地址">
            <Input v-model="infoData.address" disabled />
          </FormItem>
        </Card>
      </div>
      <!--车辆信息-->
      <div>
        <div class="titlename">
          <H3>车辆信息</H3>
        </div>
        <Card>
          <FormItem label="汽车品牌" prop="autoBrand">
            <Input v-model="infoData.autoBrand" disabled />
          </FormItem>
          <FormItem prop="autoModel" label="车型">
            <Input v-model="infoData.autoModel" disabled />
          </FormItem>
          <FormItem prop="autoDisplacement" label="排量">
            <Input v-model="infoData.autoDisplacement" disabled />
          </FormItem>
          <FormItem prop="autoBoughtDate" label="购车日期">
            <Input v-model="infoData.autoBoughtDate" disabled />
          </FormItem>
          <FormItem prop="autoStyle" label="款式">
            <Input v-model="infoData.autoStyle" disabled />
          </FormItem>
          <FormItem prop="engineNo" label="发动机/电机号">
            <Input v-model="infoData.engineNo" disabled />
          </FormItem>
        </Card>
      </div>
      <!--注册信息-->
      <div>
        <div class="titlename">
          <H3>注册信息</H3>
        </div>
        <Card>
          <FormItem prop="registPhone" label="注册手机号">
            <Input v-model="infoData.registPhone" disabled />
          </FormItem>
        </Card>
      </div>
    </Form>
    <div style="display: flex;justify-content: center;margin-top: 20px">
      <Button type="primary" style="width: 200px;" @click="addList">提交</Button>
    </div>
    <!--开通成功组件-->
    <success-modal ref="successModal"></success-modal>
    <!--开通成功组件-->

    <!-- 手机号被占用 -->
    <used-modal ref="usedModal"></used-modal>
    <!-- 手机号被占用 -->

  </div>
</template>

<script type='es6'>
import { getDmsInfo, postAction } from '@/api/data'
import successModal from './modules/successModal.vue'
import usedModal from './modules/usedModal.vue'
export default {
  name: 'app',
  components: {
    successModal,
    usedModal
  },
  data () {
    const vinValid = (rule, value, callback) => {
      let reg = /^(?![0-9]+$)(?![A-Z]+$)[0-9A-Z]{17}$/;
      // if (!reg.test(this.formData.vin)) {
      if (!value) {
        callback(new Error('车架号格式不正确！'))
      } else {
        callback()
      }
    }

    const idCardValid = (rule, value, callback) => {

      if (!value || this.formData.idCard.length < 6 || value.indexOf(' ') !== -1) {
        callback(new Error('证件号码格式不正确！'))
      } else {
        callback()
      }
    }

    return {
      showCdkCode: false,
      formData: {
        vin: '',
        idCard: '',
        cdkCode: ''
      },
      formRule: {
        vin: [{ validator: vinValid, trigger: 'blur' }],
        idCard: [{ validator: idCardValid, trigger: 'blur' }]
      },
      infoData: {
        userName: '',
        phone: '',
        email: '',
        area: '',
        address: '',
        autoBrand: '',
        autoModel: '',
        autoDisplacement: '',
        autoStyle: '',
        engineNo: '',
        autoBoughtDate: '',
        registPhone: ''
      },
      successStatus: false
    }
  },
  methods: {
    // 查询接口
    searchBtn () {
      this.$refs.formInline.validate((valid) => {
        if (!valid) return
        getDmsInfo(this.formData).then(res => {
          console.log(res)
          this.infoData = res.data
          if (res.data.code == '1') {
            this.successStatus = true
            this.$Message.success(res.data.message)
          } else if (res.data.code == '11') {
            this.successStatus = true
            this.$Message.success(res.data.message)
//            this.showCdkCode = true
          } else if (res.data.code == '12') {
            this.successStatus = true
            this.$Message.success(res.data.message)
          } else {
            this.$Message.warning(res.data.message)
          }
          if (res.data.respondData) {
            let data = res.data.respondData
            this.infoData.userName = data.userName
            this.infoData.phone = data.phone
            this.infoData.email = data.email
            this.infoData.area = data.area
            this.infoData.address = data.address
            this.infoData.autoBrand = data.autoBrand
            this.infoData.autoModel = data.autoModel
            this.infoData.autoDisplacement = data.autoDisplacement
            this.infoData.autoStyle = data.autoStyle
            this.infoData.engineNo = data.engineNo
            this.infoData.autoBoughtDate = data.autoBought
            this.infoData.registPhone = data.registPhone
          } else {
            this.$refs.infoData.resetFields()
          }
        })
      })
    },
    // 提交接口
    addList () {
      if (this.successStatus) {
        const params = {
          vin: this.formData.vin,
          idCard: this.formData.idCard,
          cdkCode: this.formData.cdkCode
        }
        postAction('/to4sservice/regUser', params).then(res => {
          if (res.data.code === '1') {
            this.$refs.successModal.showModal()
            this.$refs.formInline.resetFields()
            this.$refs.infoData.resetFields()
          }
        })
      }
    }
  }
}
</script>
