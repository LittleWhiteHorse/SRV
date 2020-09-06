<style>
.ivu-modal-body{
  padding: 0;
}

</style>

<template>
<Modal v-model="modal1" footer-hide width="500px">
  <div style="width: 100%;height: 300px;color: white">
    <div style="width: 32%;height:100%;margin: 0;background: linear-gradient(#00bbff,#89d8ff);display: flex;flex-direction:column;justify-content: center;align-items: center">
      <H3>新版本使用帮助</H3>
      <ul style="color: white;list-style:none;font-size: 13px">
        <li>修改密码和钥匙</li>
        <li>登记用户</li>
        <li>开通云服务</li>
        <li>增加使用帮助</li>
      </ul>
    </div>
    <div style="width: 68%;height:100%"></div>
  </div>
</Modal>
</template>

<script type='es6'>
export default {
  name: 'app',
  data() {
    return {
      modal1: true
    }
  },
  methods: {}
}
</script>
