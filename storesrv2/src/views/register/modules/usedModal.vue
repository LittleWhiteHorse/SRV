<style>
  .ivu-btn-primary{
    background-color: #093577;
    border: #093577;
  }

</style>

<template>
  <Modal v-model="regmodel" footer-hide width="500px">
    <div style="width: 86%;height: 240px;margin: auto">
      <H3 style="height: 60px;display: flex;justify-content: center;align-items: center">{{titleval}}</H3>
      <div style="height: 130px;display: flex;flex-direction: column;justify-content: center;">
        <p style="width: 100%;">此购车手机号码已关联其他车辆：</p>
        <p style="width: 100%;">车架号：{{vin}}</p>
        <p style="width: 100%;">开通云服务前，请您通过经销商在销服系统中修改手机号码，或者先修改上述车辆的账号对应与服务手机号码</p>
      </div>
      <div style="height: 60px;display: flex;justify-content: center">
        <Button type="primary" style=" background-color: #093577;border: #093577;width:300px">好的</Button>
      </div>
    </div>
  </Modal>
</template>

<script type='es6'>
  export default {
    name: 'app',
    data() {
      return {
        regmodel: true,
        titleval: '手机号码被占用',
        vin: '122556555565656',
        type: '汉DM',
        footbatn: '尾部'
      }
    },
    methods: {
      show(){
        this.regmodel = true
      }
    }
  }
</script>
