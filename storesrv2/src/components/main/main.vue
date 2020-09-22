<style>
  @import './main.css';
</style>
<template>
  <div class="layout">
    <Layout style="height: 100vh;">
      <Header class="ivu-layout-header">
        <div class="layout-logo">4S店服务系统</div>
        <div class="layout-nav">
          <user :user-name="userName"></user>
        </div>
      </Header>
      <Layout>
        <Sider :style="{ background: '#fff'}" ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
          <!-- 登记用户 -->
          <registered-user></registered-user>
          <!-- 导航菜单 -->
          <side-menu ref="sideMenu" :menu-list="menuList" :active-name="$route.name" @on-select="turnToPage"></side-menu>
          <!-- 使用帮助 -->
          <use-help />
        </Sider>
        <Content class="main-content">
          <Layout style="background-color: transparent;">
            <tags-nav :routeCur="$route" @clickTag="handleClick" :list="tagsNavList" @on-close="handleCLoseTag"></tags-nav>
            <Content class="content-wrapper">
              <!--<keep-alive>-->
                <router-view/>
              <!--</keep-alive>-->
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
import registeredUser from './components/registered-user'
import UseHelp from './components/help'
import routers from '@/router/routers'
import { mapMutations } from 'vuex'
import { equalRoute } from '@/libs/utils'
export default {
  name: 'app',
  components: {
    sideMenu,
    User,
    TagsNav,
    registeredUser,
    UseHelp
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
    },
    userName () {
      return this.$store.state.user.userName
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
          this.turnToPage({ name: this.$config.homeName })
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
        name: this.$config.homeName
      })
    }
  }
}
</script>
