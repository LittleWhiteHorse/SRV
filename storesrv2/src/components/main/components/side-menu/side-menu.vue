<style>
.ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu) { background-color: #e8eef5}
</style>
<template>
<Menu ref="menu" :active-name="activeName" :open-names="openedNames" theme="light" width="auto" :accordion="accordion" @on-select="handleSelect">
  <template v-for="item in menuList">
  <template v-if="item.children && item.children.length > 1">
  <Submenu :name="item.name" v-if="item.children && item.children.length > 1" :key="item.name">
    <template slot="title">
    <Icon :type="item.meta.icon" />
    {{item.meta.title}}
    </template>
    <MenuItem v-for="p in item.children" :key="p.name" :name="p.name">{{p.meta.title}}</MenuItem>
  </Submenu>
  </template>
  <template v-if="item.children && item.children.length === 1">
  <MenuItem :name="item.children[0].name" :key="item.name">
    <Icon :type="item.children[0].meta.icon" />
    {{item.children[0].meta.title}}
  </MenuItem>
  </template>
  </template>
</Menu>
</template>
<script>
import mixin from './mixin'
import { getUnion } from '@/libs/tools'
export default {
  name: 'sideMenu',
  mixins: [mixin],
  props: {
    menuList: {
      type: Array
    },
    accordion: Boolean,
    activeName: {
      type: String,
      default: ''
    },
    openNames: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      openedNames: []
    }
  },
  watch: {
    activeName (name) {
      if (this.accordion) this.openedNames = this.getOpenedNamesByActiveName(name)
      else this.openedNames = getUnion(this.openedNames, this.getOpenedNamesByActiveName(name))
    },
    openNames (newNames) {
      this.openedNames = newNames
    },
    openedNames () {
      this.$nextTick(() => {
        console.log(this.openedNames)
        this.$refs.menu.updateOpened()
      })
    }
  },
  methods: {
    handleSelect (name) {
      this.$emit('on-select', name)
    },
    getOpenedNamesByActiveName (name) {
      return this.$route.matched.map(item => item.name).filter(item => item !== name)
    },
    updateOpenName (name) {
      if (name === this.$config.homeName) this.openedNames = []
      else this.openedNames = this.getOpenedNamesByActiveName(name)
    }
  },
  mounted () {
    this.openedNames = getUnion(this.openedNames, this.getOpenedNamesByActiveName(name))
    console.log(this.openedNames)
  }
}
</script>
