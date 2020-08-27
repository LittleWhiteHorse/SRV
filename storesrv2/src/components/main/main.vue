<style>
  @import './main.css';
</style>
<template>
  <div class="layout">
    <Layout style="height: 100vh;">
      <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
        <div style="height: 64px; margin: 10px; border: 2px dashed #ffffff; border-radius: 10px"></div>
        <!--导航菜单-->
        <side-menu :menu-list="menuList"></side-menu>
      </Sider>
      <Layout>
        <Header :style="{padding: 0}" class="layout-header-bar">
          <!--<Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon>-->
          <div></div>
        </Header>
        <Content class="main-content">
          <Content style="overflow: auto;">
            <Card>

              Content
              <br/>
              Content
              <br/>
              Content
              <br/>
              Content
              <br/>
              Content
              <br/>
              Content
              <br/>
              Content
              <br/>
              Content
              <br/>
              Content
              <br/>
              Content
              <br/>
              Content
              <br/>
              Content
              <br/>
              Content
              <br/>
              Content
              <br/>
              Content
              <br/>
              Content
              {{menuList}}
            </Card>
          </Content>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import sideMenu from './components/side-menu/side-menu.vue'
export default {
  name: 'app',
  components: {
    sideMenu
  },
  data () {
    return {
      isCollapsed: false
    }
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
    },
    menuList () {
      console.log(this.$store.getters.menuList)
      return this.$store.getters.menuList
    }
  },
  methods: {
    collapsedSider () {
      this.$refs.side1.toggleCollapse()
    }
  }
}
</script>
