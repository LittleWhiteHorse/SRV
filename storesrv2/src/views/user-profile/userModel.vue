<style>
  .titlename{
    height: 60px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
</style>

<!--用户档案，查看按钮，档案详情 -->
<template>
  <Card :border="false">
    <!--客户信息-->
    <div>
      <div class="titlename">
        <H3>客户信息</H3>
      </div>
      <Card>
        <Row>
          <Col span="8">客户姓名:{{detailList.userName}}</Col>
          <Col span="8">证件号码：{{detailList.idCard}}</Col>
          <Col span="8">性别：{{detailList.gender}}</Col>
          <Col span="8">出生日期：{{detailList.birthday}}</Col>
          <Col span="8">邮箱：{{detailList.email}}</Col>
          <Col span="8">手机号码：{{detailList.phone}}</Col>
          <Col span="8">所属区域：{{detailList.area}}</Col>
          <Col span="8">客户地址：{{detailList.address}}</Col>
        </Row>
      </Card>
    </div>
    <!--车辆信息-->
    <div>
      <div class="titlename">
        <H3>客户信息</H3>
      </div>
      <Card>
        <Row>
          <Col span="8">登记日期：{{detailList.autoRegistDate}}</Col>
          <Col span="8">车牌号：{{detailList.autoPlate}}</Col>
          <Col span="8">汽车品牌：{{detailList.autoPlate}}</Col>
          <Col span="8">车型：{{detailList.modelName}}</Col>
          <Col span="8">发动机/电机号：{{detailList.engineNo}}</Col>
          <Col span="8">车架号：{{detailList.vin}}</Col>
          <Col span="8">SIM卡号：{{detailList.sim}}</Col>
          <Col span="8">IMSI号：{{detailList.imsi}}</Col>
          <Col span="8">购车日期：{{detailList.autoBoughtDate}}</Col>
        </Row>
      </Card>
    </div>
  </Card>
</template>

<script type='es6'>
//  import { jiekou } from '@/api'
export default {
  name: 'app',
  components: {
//        DetailListItem,
//        DetailList
  },
  data () {
    return {
      detailList: {}
    }
  },
  methods: {
//        getList(){
//            let params = { vin: this.vin}
//            jiekou(params).then(res => {
//                this.detailList = res.result
//            })
//        }
  }
}
</script>
