<style>

</style>
<template>
  <div>
    <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses" accordion>
      <Submenu name="1">
        <template slot="title">
          <Icon type="ios-paper" />
          内容管理{{menuList}}
        </template>
        <MenuItem name="1-1">文章管理</MenuItem>
      </Submenu>
      <Submenu name="2">
        <template slot="title">
          <Icon type="ios-people" />
          用户管理
        </template>
        <MenuItem name="2-1">新增用户</MenuItem>
      </Submenu>
      <Submenu name="3">
        <template slot="title">
          <Icon type="ios-stats" />
          统计分析
        </template>
        <MenuItem name="3-1">新增和启动</MenuItem>
      </Submenu>
    </Menu>
  </div>
</template>
<script>
export default {
  name: 'sideMenu',
  props: {
    menuList: {
      type: String
    }
  },
  data () {
    return {}
  },
  computed: {
    rotateIcon () {
      return [
        'menu-icon',
        this.isCollapsed ? 'rotate-icon' : ''
      ]
    },
    menuitemClasses () {
      return [
        'menu-item',
        this.isCollapsed ? 'collapsed-menu' : ''
      ]
    }
  },
  methods: {},
  created () {

  },
  mounted () {

  }
}
</script>
