<style scoped>
  .use-help a.title { width: 100%; position: absolute; bottom: 100px; left: 0; display: block; text-align: center; font-size: 16px; color: #3e3e3e;}
 /* 1640 460 1180  86% 28% 72%*/
  /*
    24px 1.25
    30px 1.56
    40px 2
    70px 3.64
    100px 5.2
  */
  /deep/.modal-body .ivu-modal-body { padding: 0;}
  .help-modal { display: flex;}
  .help-modal-left { width: 28%; background-image: linear-gradient(to bottom right, #68abfe , #1e58a0); border-radius: 6px 0 0 6px; display: flex; flex-direction: column; justify-content: center;}
  .help-modal-left h3 { font-size: 1.56vw; line-height: 1; color: #ffffff; text-align: center; font-weight: lighter; margin-bottom: 3.64vw}
  .help-modal-left ul { list-style: none; margin-left: 5.2vw;}
  .help-modal-left ul li { font-size: 1.25vw; line-height: 1; color: #ffffff; margin-bottom: 2vw; position: relative; cursor: pointer;}
  .help-modal-left ul li:last-child { margin-bottom: 0;}
  .help-modal-left ul li.active:before { content: ''; width: 4px; height: 100%; background-color: #ffffff; position: absolute; top: 0; left: -10px;}
  .help-modal-right { width: 72%;}
  .img-frame { min-height: 31vw; margin: 9vh 2vw 2vw 2vw;}
  .img-frame img { width: 100%; display: block;}
  .btn-frame { text-align: right; margin-bottom: 2vw; margin-right: 2vw;}
  .btn-frame .ivu-btn { color: #1d579f; border-color: transparent; box-shadow: 0 0 6px rgba(0,0,0,0.1); margin-left: 10px;}
  /deep/.ivu-modal-close .ivu-icon-ios-close { font-size: 3.2vw; color: #1d579f; font-weight: bold; margin-right: 0.7vw; }
</style>

<template>
<div class="use-help">
  <a href="javascript:;" class="title" @click="showModal = true">使用帮助</a>

  <Modal v-model="showModal" footer-hide width="70%" class-name="modal-body">
    <div class="help-modal">
      <div class="help-modal-left">
        <h3>新版本使用帮助</h3>
        <ul>
          <li :class="step === 1 && 'active'" @click="step = 1">修改密码和钥匙</li>
          <li :class="step === 2 && 'active'" @click="step = 2">登记用户</li>
          <li :class="step === 3 && 'active'" @click="step = 3">开通云服务</li>
          <li :class="step === 4 && 'active'" @click="step = 4">增加使用帮助</li>
        </ul>
      </div>
      <div class="help-modal-right">
        <div class="img-frame">
          <img src="@/assets/step1.jpg" v-if="step === 1" />
          <img src="@/assets/step2.jpg" v-if="step === 2" />
          <img src="@/assets/step3.jpg" v-if="step === 3" />
          <img src="@/assets/step4.jpg" v-if="step === 4" />
        </div>
        <div class="btn-frame">
          <Button size="large" @click="step = step === 1 ? 1 : (step - 1)">上一页</Button>
          <Button size="large" @click="step = step === 4 ? 4 : (step + 1)">下一页</Button>
        </div>
      </div>
    </div>
  </Modal>
</div>
</template>

<script type='es6'>
export default {
  name: 'app',
  data () {
    return {
      showModal: true,
      step: 1
    }
  },
  methods: {}
}
</script>
