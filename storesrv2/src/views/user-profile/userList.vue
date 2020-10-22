<style>

</style>
<!--用户档案页面-->
<template>
  <Card :bordered="false">
    <!--顶部查询-->
<!--    <div>-->
<!--      <Form :model="formItem" inline :label-width="80">-->
<!--        <FormItem prop="user" label="客户姓名">-->
<!--          <Input v-model="formItem.user" placeholder="请输入客户姓名"/>-->
<!--        </FormItem>-->
<!--        <FormItem prop="plate" label="车牌号">-->
<!--          <Input v-model="formItem.plate" placeholder="请输入车牌号"/>-->
<!--        </FormItem>-->
<!--        <FormItem prop="date" label="登记日期">-->
<!--          <DatePicker type="date" v-model="formItem.date" placeholder="请选择登记日期"></DatePicker>-->
<!--        </FormItem>-->
<!--        <FormItem>-->
<!--          <Button type="primary" @click="handleSearch">查询</Button>-->
<!--          <Button class="btn-clear" style="margin-left: 20px;">清空查询</Button>-->
<!--        </FormItem>-->
<!--      </Form>-->
<!--    </div>-->
    <!--表格-->
    <Table
      border
      :columns="columns"
      :data="dataSource"
      :loading="loading"
    >
      <div slot-scope="{ row, index }" slot="action">
        <Button style="margin-right: 5px;color: #1d579f; border-color: #1d579f;" @click="handleShow(row)">查看</Button>
      </div>
    </Table>
    <!--分页-->
    <div style="margin-top: 8px; display: flex; justify-content: flex-end;">
      <Page :total="pagetotal" show-elevator @on-change="pageChange"></Page>
    </div>
  </Card>
</template>

<script>
import { mapMutations } from 'vuex'
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
          title: '创建日期',
          key: 'createTime',
          align: 'center'
        },
        {
          title: '姓名',
          key: 'userName',
          align: 'center'
        },
        {
          title: '手机号码',
          key: 'phone',
          align: 'center'
        },
        {
          title: '邮箱',
          key: 'email',
          align: 'center'
        },
        {
          title: '地址',
          key: 'address',
          align: 'center'
        },
        {
          title: '操作',
          align: 'center',
          slot: 'action'
        }
      ],
      loading: false,
      pageNo: 1,
      size: 10,
      pagetotal: 0
    }
  },
  mounted () {
    this.getList()
  },
  methods: {
    ...mapMutations([
      'handleSaveDetail'
    ]),
    getList () {
      let params = {
        pageIndex: this.pageNo,
        pageSize: this.size,
        username: this.formItem.user,
        autoPlate: this.formItem.plate,
        regDate: this.formItem.date
      }
      getUserInfoPageInfo(params).then(res => {
        const data = res.data
        this.dataSource = data.list
        this.pagetotal = data.total
      })
    },
    pageChange (page) {
      this.pageNo = page
      this.getList()
    },
    handleShow (row) {
      this.handleSaveDetail(row)
      this.$router.push({
        name: 'user_details'
      })
    },
    handleSearch () {
      this.pageNo = 1
      this.getList()
    }
  }
}
</script>
