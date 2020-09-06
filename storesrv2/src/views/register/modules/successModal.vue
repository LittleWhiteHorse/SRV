<style>
</style>

<template>
  <Modal v-model="regmodel" footer-hide width="500px">
    <div style="width: 86%;height: 200px;margin: auto">
      <H3 style="height: 60px;display: flex;justify-content: center;align-items: center">{{titleval}}</H3>
      <div style="height: 100px;display: flex;flex-direction: column;justify-content: center;">
        <p style="width: 100%;margin-left: 30%">车架号：{{vin}}</p>
        <p style="width: 100%;margin-left: 30%">车型：{{type}}</p>
      </div>
      <div style="height: 60px;display: flex;justify-content: space-between">
        <Button type="primary" style=" background-color: #1d579f;border: #1d579f;">继续登记用户</Button>
        <Button type="primary" style=" background-color: #1d579f;border: #1d579f;">查看刚登记用户</Button>
        <Button type="primary" style=" background-color: #1d579f;border: #1d579f;">打开用户档案</Button>
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
      titleval: '云服务开通成功',
      vin: '122556555565656',
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
