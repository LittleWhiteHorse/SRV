<template>
    <h1>Heelo world!</h1>
</template>


<CheckboxGroup
v-model="checkAll"
@on-change="handleCheckAll(index)">
<Checkbox
  v-for="(item, index) in vehSeriesData"
  :label="item.vehSeriesNameCn"
  :key="item.id">
</Checkbox>
</CheckboxGroup>


//      if (this.indeterminate) {
//        this.checkAll = false
//      } else {
//        this.checkAll = !this.checkAll
//      }
//      this.indeterminate = false
//      if (this.checkAll) {
//        const checkList = this.$store.state.car.vehList[i].list
//        for (var j = 0; j < checkList.length; j++) {
//          this.checkAllGroup.push(checkList[j].vehTypeCode)
//        }
//      } else {
//        this.checkAllGroup = []
//      }
//      console.log(this.checkAllGroup)
<template>
    <div>
      <div class="versionEdit-form">
        <Form :label-width="100">
          <FormItem label="上传APK文件">
            <upload-files :acceptValue="acceptValue"></upload-files>
          </FormItem>
          <FormItem label="所属车型">
            <div>
              <CheckboxGroup
                class="versionEdit-form-car"
                v-model="checkAll"
                v-for="(item, index) in vehSeriesData"
                :key="index"
                @on-change="handleCheckAll(index)">
                <Checkbox
                  :label="index">
                  {{item.vehSeriesNameCn}}
                </Checkbox>
              </CheckboxGroup>
            </div>
          </FormItem>
          <FormItem label="具体车型">
            <CheckboxGroup
              v-model="checkAllGroup"
              v-for="(listDta, i) in vehSeriesData"
              :key="i"
              @on-change="checkAllGroupChange(i)">
              <Checkbox
                v-for="item in listDta.list"
                :label="item.vehTypeCode"
                :key="item.id">
              </Checkbox>
            </CheckboxGroup>
          </FormItem>
          <FormItem label="系统版本号">
            <Input placeholder="请输入系统版本号..." />
          </FormItem>
          <FormItem label="适用屏幕">
            <Select>
              <Option v-for="item in versionEditScreen" :value="item.id" :key="item.id">
                {{item.name}}
              </Option>
            </Select>
          </FormItem>
          <FormItem label="所属分类">
            <Select>
              <Option v-for="item in versionEditClassification" :value="item.id" :key="item.id">
                {{item.name}}
              </Option>
            </Select>
          </FormItem>
          <FormItem label="所属主题">
            <Select>
              <Option v-for="item in versionEditSubordinateTheme" :value="item.id" :key="item.id">
                {{item.name}}
              </Option>
            </Select>
          </FormItem>
          <FormItem label="软件描述">
            <Input type="textarea" placeholder="请输入软件描述..." :autosize="{minRows: 4, maxRows: 6}" />
          </FormItem>
          <FormItem label="改动日志">
            <Input type="textarea" placeholder="请输入改动日志..." :autosize="{minRows: 4, maxRows: 6}" />
          </FormItem>
          <Divider>
            <Button type="primary" @click="lookResult('formValue')">下一步</Button>
            <Button type="error" @click="handleReset('formValue')" style="margin-left: 8px;">重&nbsp;&nbsp;置</Button>
            <Button @click="handleBack" style="margin-left: 8px;">返&nbsp;&nbsp;回</Button>
          </Divider>
        </Form>
      </div>
    </div>
</template>
<script>
import UploadFiles from '@/view/components/upload-files/upload-files.vue'
export default {
  name: 'appVersionEdit_page',
  components: {
    UploadFiles
  },
  data () {
    return {
      indeterminate: false,
      checkAll: [],
      checkAllGroup: [],
      versionEditScreen: [
        {
          id: '3',
          name: '横屏'
        },
        {
          id: '4',
          name: '竖屏'
        },
        {
          id: '5',
          name: '通用'
        }
      ],
      versionEditClassification: [
        {
          id: '7',
          name: '交通导航'
        },
        {
          id: '8',
          name: '音乐电台'
        },
        {
          id: '9',
          name: '生活休闲'
        },
        {
          id: '10',
          name: '应用市场'
        },
        {
          id: '11',
          name: '常用工具'
        },
        {
          id: '12',
          name: '旅行出游'
        },
        {
          id: '13',
          name: '视频播放'
        },
        {
          id: '14',
          name: '新闻阅读'
        },
        {
          id: '15',
          name: '社交通讯'
        }
      ],
      versionEditSubordinateTheme: [
        {
          id: '16',
          name: '专区'
        },
        {
          id: '17',
          name: '精选'
        },
        {
          id: '19',
          name: 'Beta'
        },
        {
          id: '20',
          name: '测试'
        }
      ],
      acceptValue: 'apk'
    }
  },
  computed: {
    vehSeriesData () {
      return this.$store.state.car.vehList
    }
  },
  methods: {
    handleCheckAll (n) {
      let equalVal = ''
      let pendVal = []
      let spareVal = []
      for (let j = 0; j < this.vehSeriesData[n].list.length; j++) {
        pendVal.push(this.vehSeriesData[n].list[j].vehTypeCode)
      }
      if (this.checkAll.length === 0) {
        this.checkAllGroup = []
      } else {
        for (let i = 0; i < this.checkAll.length; i++) {
          if (this.checkAll[i] === n) {
            equalVal = this.checkAll[i]
          }
        }
        if (equalVal !== '') {
          this.checkAllGroup = this.checkAllGroup.concat(pendVal)
        } else {
          this.checkAllGroup.forEach((a) => {
            let resultVal = pendVal.findIndex((b) => (a === b))
            if (resultVal > -1) delete pendVal[resultVal]
            else spareVal.push(a)
          })
          this.checkAllGroup = spareVal
        }
      }
    },
    checkAllGroupChange (num) {
      let vehicleList = this.vehSeriesData[num].list
      let vehTypeCodeList = []
      for (let i = 0; i < vehicleList.length; i++) {
        vehTypeCodeList.push(vehicleList[i].vehTypeCode)
      }
      let intersection = this.checkAllGroup.filter(function (v) {
        return vehTypeCodeList.indexOf(v) > -1
      })
      if (intersection.length === 0) {
        let pele = this.checkAll.indexOf(num)
        if (pele >= 0) this.checkAll.splice(pele, 1)
        // console.log(pele)
      } else {
        if (this.checkAll.indexOf(num) < 0) {
          this.checkAll.push(num)
        }
      }
    },
    handleBack () {
      this.$router.go(-1)
    }
  }
}
</script>
<style>
  .versionEdit-form {
    border: 1px solid #dcdee2;
    border-radius: 4px;
    background: #fff;
    padding:60px 20%;
  }
  .versionEdit-form-car{
    width: 60px;
    float: left;
  }
</style>
