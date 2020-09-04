<style></style>
<!--登录用户弹的弹窗模板-->
<template>
  <Modal v-model="regmodel" footer-hide width="500px">
    <div style="width: 100%;height: 300px;color: white">
      <div style="height: 60px;background-color: pink">{{titleval}}</div>
      <div style="height: 100px;background-color: deepskyblue">{{content}}</div>
      <div style="height: 60px;background-color: yellowgreen">{{footbatn}}</div>
    </div>
  </Modal>
</template>

<script type='es6'>
export default {
  name: 'app',
  data () {
    return {
      regmodel: true,
      titleval: '标题',
      content: '内容',
      footbatn: '尾部'
    }
  },
  methods: {}
}
</script>
