<style>
  .titlename{
    height: 60px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .rowTitle {
    width: 110px;
    float: left;
    text-align: right;
  }

  .ivu-col {
    margin: 10px 0;
    font-size: 14px;
  }

</style>

<!--用户档案，查看按钮，档案详情 -->
<template>
  <div>
    <!--客户信息-->
    <div>
      <div class="titlename">
        <H2>客户信息</H2>
      </div>
      <Card :border="false">
        <Row>
          <Col span="8"><span class="rowTitle">姓名：</span>{{detailList.userName}}</Col>
          <Col span="8"><span class="rowTitle">证件号码：</span>{{detailList.idCard}}</Col>
          <Col span="8"><span class="rowTitle">性别：</span>{{detailList.gender}}</Col>
          <Col span="8"><span class="rowTitle">出生日期：</span>{{detailList.birthday}}</Col>
          <Col span="8"><span class="rowTitle">邮箱：</span>{{detailList.email}}</Col>
          <Col span="8"><span class="rowTitle">手机号码：</span>{{detailList.phone}}</Col>
          <Col span="8"><span class="rowTitle">所属区域：</span>{{detailList.area}}</Col>
          <Col span="8"><span class="rowTitle">客户地址：</span>{{detailList.address}}</Col>
        </Row>
      </Card>
    </div>
    <!--车辆信息-->
<!--    <div>-->
<!--      <div class="titlename">-->
<!--        <H2>车辆信息</H2>-->
<!--      </div>-->
<!--      <Card :border="false">-->
<!--        <Row>-->
<!--          <Col span="8"><span class="rowTitle">登记日期：</span>{{detailList.autoRegistDate}}</Col>-->
<!--          <Col span="8"><span class="rowTitle">车牌号：</span>{{detailList.autoPlate}}</Col>-->
<!--          <Col span="8"><span class="rowTitle">汽车品牌：</span>{{detailList.autoPlate}}</Col>-->
<!--          <Col span="8"><span class="rowTitle">车型：</span>{{detailList.modelName}}</Col>-->
<!--          <Col span="8"><span class="rowTitle">发动机/电机号：</span>{{detailList.engineNo}}</Col>-->
<!--          <Col span="8"><span class="rowTitle">车架号：</span>{{detailList.vin}}</Col>-->
<!--          <Col span="8"><span class="rowTitle">SIM卡号：</span>{{detailList.sim}}</Col>-->
<!--          <Col span="8"><span class="rowTitle">IMSI号：</span>{{detailList.imsi}}</Col>-->
<!--          <Col span="8"><span class="rowTitle">购车日期：</span>{{detailList.autoBoughtDate}}</Col>-->
<!--        </Row>-->
<!--      </Card>-->
<!--    </div>-->
  </div>
</template>

<script type='es6'>
//  import { jiekou } from '@/api'
export default {
  name: 'app',
  data () {
    return {}
  },
  computed: {
    detailList () {
      return this.$store.state.userPage.userDetail
    }
  },
  methods: {}
}
</script>
