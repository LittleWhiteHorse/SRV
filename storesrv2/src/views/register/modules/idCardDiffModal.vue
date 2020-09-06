<style>
  .ivu-btn-primary{
    background-color: #093577;
    border: #093577;
  }

</style>

<template>
  <Modal v-model="regmodel" footer-hide width="500px">
    <div style="width: 86%;height: 230px;margin: auto">
      <H3 style="height: 60px;display: flex;justify-content: center;align-items: center">{{titleval}}</H3>
      <div style="height: 130px;display: flex;flex-direction: column;justify-content: center;margin-top: -10px">
        <p style="width: 100%;">此购车证件已注册了迪粉汇账号，但是迪粉汇账号对应的证件为：{{idCard}}</p>
        <p style="width: 100%;">为了保留你迪粉汇的权益，请先修改迪粉汇登录手机号或购车手机号</p>
      </div>
      <div style="height: 60px;display: flex;justify-content: center">
        <Button type="primary" style=" background-color: #1d579f;border: #1d579f;width:300px">好的</Button>
      </div>
    </div>
  </Modal>
</template>

<script type='es6'>
export default {
  name: 'app',
  data () {
    return {
      regmodel: true,
      titleval: '购车手机号和迪粉汇账号不一致',
      idCard: '122556555565656',
      type: '汉DM',
      footbatn: '尾部'
    }
  },
  methods: {
    show () {
      this.regmodel = true
    }
  }
}
</script>
