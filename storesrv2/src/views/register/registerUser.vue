<style>
  .titlename{
    height: 60px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
</style>

<template>
  <!--登记用户页面-->
  <div>
    <!--顶部查询-->
    <div>
      <Card>
        <Form :model="formData" inline :label-width="80">
          <FormItem prop="vin" label="车架号">
            <Input v-model="formData.vin" placeholder="请输入车架号"/>
          </FormItem>
          <FormItem prop="idCard" label="证件号码">
            <Input v-model="formData.idCard" placeholder="请输入证件号码"/>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="searchBtn">查询</Button>
          </FormItem>
        </Form>
      </Card>
    </div>
    <!--客户信息-->
    <div>
      <div class="titlename">
        <H3>客户信息</H3>
      </div>
      <Card>
        <Form :model="infoData" inline :label-width="100">
          <FormItem prop="plate" label="客户姓名">
            <Input v-model="infoData.userName" placeholder="请输入客户姓名"/>
          </FormItem>
          <FormItem prop="date" label="购车手机号">
            <Input v-model="infoData.phone" placeholder="请输入购车手机号"/>
          </FormItem>
          <FormItem prop="date" label="邮箱">
            <Input v-model="infoData.email" placeholder="请输入邮箱"/>
          </FormItem>
          <FormItem prop="date" label="所属区域">
            <Input v-model="infoData.area" placeholder="请输入所属区域"/>
          </FormItem>
          <FormItem prop="date" label="客户地址">
            <Input v-model="infoData.address" placeholder="请输入客户地址"/>
          </FormItem>
        </Form>
      </Card>
    </div>
    <!--车辆信息-->
    <div>
      <div class="titlename">
        <H3>车辆信息</H3>
      </div>
      <Card>
        <Form :model="infoData" inline :label-width="100">
          <FormItem prop="plate" label="汽车品牌">
            <Input v-model="infoData.autoBrand" placeholder="请输入汽车品牌"/>
          </FormItem>
          <FormItem prop="date" label="车型">
            <Input v-model="infoData.autoModel" placeholder="请输入证件号码"/>
          </FormItem>
          <FormItem prop="date" label="排量">
            <Input v-model="infoData.autoDisplacement" placeholder="请输入排量"/>
          </FormItem>
          <FormItem prop="date" label="款式">
            <Input v-model="infoData.autoStyle" placeholder="请输入款式"/>
          </FormItem>
          <FormItem prop="date" label="发动机/电机号">
            <Input v-model="infoData.engineNo" placeholder="请输入发动机/电机号"/>
          </FormItem>
          <FormItem prop="date" label="购车日期">
            <Input v-model="infoData.autoBought" placeholder="请输入购车日期"/>
          </FormItem>
        </Form>
      </Card>
    </div>
    <!--注册信息-->
    <div>
      <div class="titlename">
        <H3>注册信息</H3>
      </div>
      <Card>
        <Form :model="infoData" inline :label-width="100">
          <FormItem prop="plate" label="注册手机号">
            <Input v-model="infoData.registPhone" placeholder="请输入注册手机号"/>
          </FormItem>
        </Form>
      </Card>
    </div>
    <div style="display: flex;justify-content: center;margin-top: 20px">
      <Button type="primary" style="width: 200px;" @click="addList">提交</Button>
    </div>
  </div>
</template>

<script type='es6'>
import { getDmsInfo, postAction } from '@/api/data'
export default {
  name: 'app',
  data () {
    return {
      formData: {
        vin: '',
        idCard: ''
      },
      infoData: {},
      vin: ''
    }
  },
  methods: {
    // 查询接口
    searchBtn () {
      this.$refs.formInline.validate((valid) => {
        if (!valid) return
        getDmsInfo(this.formData).then(res => {
          this.infoData = res.data
        })
      })
    },
    // 提交接口
    addList () {
      const params = {
        ...this.formData,
        cdkCode: ''
      }
      postAction('/to4sservice/regUser', params).then(res => {

      })
    }
  }
}
</script>
