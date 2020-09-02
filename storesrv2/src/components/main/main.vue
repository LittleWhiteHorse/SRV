<style>
  @import './main.css';
</style>
<template>
  <div class="layout">
    <Layout style="height: 100vh;">
      <Header>
        <div class="layout-logo"></div>
        <div class="layout-nav">
          <user></user>
        </div>
      </Header>
      <Layout>
        <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
          <div style="height: 64px; margin: 10px; border: 2px dashed #ffffff; border-radius: 10px"></div>
          <!--导航菜单-->
          <side-menu ref="sideMenu" :menu-list="menuList" :active-name="$route.name" @on-select="turnToPage"></side-menu>
        </Sider>
        <Content class="main-content">
          <Layout>
            <div class="tag-nav-wrapper">
              <tags-nav :routeCur="$route" @clickTag="handleClick" :list="tagsNavList" @on-close="handleCLoseTag"></tags-nav>
            </div>
            <Content style="overflow: auto;">
              <keep-alive>
                <router-view/>
              </keep-alive>
            </Content>
          </Layout>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import sideMenu from './components/side-menu/side-menu.vue'
import User from './components/user'
import TagsNav from './components/tags-nav'
import routers from '@/router/routers'
import { mapMutations } from 'vuex'
import { equalRoute } from '@/libs/utils'
export default {
  name: 'app',
  components: {
    sideMenu,
    User,
    TagsNav
  },
  data () {
    return {
      isCollapsed: false
    }
  },
  computed: {
    menuList () {
      return this.$store.getters.menuList
    },
    tagsNavList () {
      return this.$store.state.app.tagsNavList
    }
  },
  watch: {
    '$route' (newRoute) {
      const { name, params, query, meta } = newRoute
      this.addTag({
        route: { name, params, query, meta },
        type: 'push'
      })
      this.$refs.sideMenu.updateOpenName(newRoute.name)
    }
  },
  methods: {
    ...mapMutations([
      'addTag',
      'closeTag',
      'setHomeRoute',
      'setTagsNavList'
    ]),
    collapsedSider () {
      this.$refs.side1.toggleCollapse()
    },
    handleClick (item) {
      this.turnToPage(item)
    },
    handleCLoseTag (res, type, route) {
      if (type !== 'other') {
        if (type === 'all') {
          this.turnToPage({ name: 'home' })
        } else {
          if (equalRoute(this.$route, route)) {
            this.closeTag(route)
          }
        }
      }
      this.setTagsNavList(res)
    },
    turnToPage (route) {
      let { name, params, query } = {}
      if (typeof route === 'string') {
        name = route
      } else {
        name = route.name
        params = route.params
        query = route.query
      }
      this.$router.push({
        name,
        params,
        query
      })
    }
  },
  mounted () {
    // 初始化标签导航
    console.log(localStorage)
    this.setTagsNavList()
    this.setHomeRoute(routers)
    const { name, params, query, meta } = this.$route
    this.addTag({
      route: { name, params, query, meta }
    })
    if (!this.tagsNavList.find(item => item.name === this.$route.name)) {
      this.$router.push({
        name: 'home'
      })
    }
  }
}
</script>
