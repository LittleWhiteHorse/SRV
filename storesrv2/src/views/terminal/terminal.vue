<style></style>

<template>
  <Card :bordered="false">
    <!--表格-->
    <Table
      border
      :columns="columns"
      :data="dataSource"
      :loading="loading"
    >
      <div slot-scope="{ row, index }" slot="action">
        <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">查看</Button>
        <!--<Button type="error" size="small" @click="remove(index)">Delete</Button>-->
      </div>
    </Table>
    <!--分页-->
    <div style="margin-top: 8px; display: flex; justify-content: flex-end;">
      <Page :total="pagetotal" show-elevator @on-change="pageChange"></Page>
    </div>
    <!--手机号验证组件-->
    <phone-valid ref="phoneVaild"></phone-valid>
    <!--手机号验证组件-->

  </Card>
</template>

<script type='es6'>
import { getCdkInfoPageInfo } from '@/api/data'
import phoneValid from './module/phoneValid.vue'
export default {
  name: 'app',
  components: {
    phoneValid
  },
  data () {
    return {
      dataSource: [],
      columns: [
        {
          title: '序号',
          align: 'center'
        },
        {
          title: '订单号',
          key: 'businessNo',
          align: 'center'
        },
        {
          title: '状态码',
          key: 'cdkName ',
          align: 'center'
        },
        {
          title: '状态',
          key: 'isUsed',
          align: 'center'
        },
        {
          title: '生成时间',
          key: 'createTime',
          align: 'center'
        },
        {
          title: '操作/使用时间',
          key: 'usingTime',
          align: 'center',
          slot: 'action'
        }
      ],
      loading: false,
      pagetotal: 0,
      pageNo: 1
    }
  },
  mounted () {
    this.getList()
  },
  methods: {
    getList () {
      let params = {
        pageIndex: this.pageNo,
        pageSize: 10
      }
      getCdkInfoPageInfo(params).then(res => {
        this.dataSource = res.data.list
        this.pagetotal = res.data.total
      })
    },
    show (index) {
      this.$refs.phoneVaild.showModal()
    },
    pageChange (page) {
      this.pageNo = page
      this.getList()
    }
  }
}
</script>
