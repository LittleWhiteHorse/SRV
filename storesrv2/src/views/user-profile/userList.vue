<style>
  .ivu-btn-primary{
    background-color: deepskyblue;
    border:deepskyblue;
  }
</style>
<!--用户档案页面-->
<template>
  <Card :bordered="false">
    <!--顶部查询-->
    <div>
      <Form :model="formItem" inline :label-width="80">
        <FormItem prop="user" label="客户姓名">
          <Input v-model="formItem.user" placeholder="请输入客户姓名"/>
        </FormItem>
        <FormItem prop="plate" label="车牌号">
          <Input v-model="formItem.plate" placeholder="请输入车牌号"/>
        </FormItem>
        <FormItem prop="date" label="登记日期">
          <DatePicker type="date" v-model="formItem.date" placeholder="请选择登记日期"></DatePicker>
        </FormItem>
        <FormItem>
          <Button type="primary">查询</Button>
          <Button style="margin-left: 20px;background-color: #a8a8a8;color: white">清空查询</Button>
        </FormItem>
      </Form>
    </div>
    <!--表格-->
    <Table
      border
      :columns="columns"
      :data="dataSource"
      :loading="loading"
    >
      <div slot-scope="{ row }" slot="action">
        <Button type="primary" size="small" style="margin-right: 5px;color: deepskyblue;background-color: #95fffd" @click="handleShow(row)">查看</Button>
      </div>
    </Table>
    <!--分页-->
    <Page :total="pagetotal" show-elevator prev-text="上一页" next-text="下一页" style="margin-top: 20px;display: flex;justify-content: flex-end"></Page>
  </Card>
</template>

<script>
import { getUserInfoPageInfo } from '@/api/data'
export default {
  name: 'app',
  data () {
    return {
      formItem: {
        user: '',
        plate: '',
        date: ''
      },
      dataSource: [],
      columns: [
        {
          title: '序号',
          type: 'index',
          align: 'center'
        },
        {
          title: '登记日期',
          key: 'autoRegistDate',
          align: 'center'
        },
        {
          title: '客户姓名',
          key: 'userName',
          align: 'center'
        },
        {
          title: '手机号码',
          key: 'phone',
          align: 'center'
        },
        {
          title: '车牌号',
          key: 'autoPlate',
          align: 'center'
        },
        {
          title: '车型',
          key: 'modelName',
          align: 'center'
        },
        {
          title: '操作',
          align: 'center',
          slot: 'action'
        }
      ],
      loading: false,
      page: 1,
      size: 10,
      pagetotal: 0
    }
  },
  mounted () {
    this.getList()
  },
  methods: {
    getList () {
      let params = {
        pageIndex: this.page,
        pageSize: this.size,
        username: '',
        autoPlate: '',
        regDate: ''
      }
      getUserInfoPageInfo(params).then(res => {
        const data = res.data
        this.dataSource = data.list
        this.pagetotal = data.total
      })
    }
  }
}
</script>
