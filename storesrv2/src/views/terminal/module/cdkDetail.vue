<style>
</style>

<template>
  <Modal v-model="regmodel" footer-hide width="400px">
    <div style="width: 86%;margin: auto">
      <H3 style="height: 60px;display: flex;justify-content: center;align-items: center">{{titleval}}</H3>
      <div style="display: flex;flex-direction: column;justify-content: center;">
        <p style="width: 90%; padding: 10px 5%"><span style="width: 60px; float: left; text-align: right;">序号：</span>{{cdkIndex}}</p>
        <p style="width: 90%; padding: 10px 5%"><span style="width: 60px; float: left; text-align: right;">订单号：</span>{{orderNum}}</p>
        <p style="width: 90%; padding: 10px 5%">
          <span style="width: 60px; float: left; text-align: right;">激活码：</span>
          {{cdk}}
          <Button type="primary" ghost @click="handleCopy" size="small">复制</Button>
        </p>
      </div>
      <div style="height: 60px;display: flex;justify-content: center; margin-top: 15px;">
        <Button type="primary" style=" background-color: #1d579f;border: #1d579f;width:200px" @click="handleOk">确定</Button>
      </div>
    </div>
  </Modal>
</template>

<script type='es6'>
  export default {
    name: 'app',
    data () {
      return {
        regmodel: false,
        titleval: '激活码',
        cdkIndex: '',
        orderNum: '',
        cdk: ''
      }
    },
    methods: {
      showCdkModal (data) {
        this.regmodel = true
        this.cdk = '111'
      },
      handleCopy () {
        document.execCommand(this.cdk);
        this.$Message.success('复制成功')
      },
      handleOk () {
        this.regmodel = false
      }
    }
  }
</script>

