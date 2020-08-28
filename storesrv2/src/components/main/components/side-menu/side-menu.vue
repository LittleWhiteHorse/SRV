<style>

</style>
<template>
  <div>
    <Menu active-name="1-1" theme="light" width="auto" :class="menuitemClasses" accordion @on-select="handleSelect">
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
  </div>
</template>
<script>
import mixin from './mixin'
export default {
  name: 'sideMenu',
  mixins: [mixin],
  props: {
    menuList: {
      type: Array
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
  methods: {
    handleSelect (name) {
      console.log(name)
      this.$emit('on-select', name)
    }
  },
  created () {
  }
}
</script>
