<style>

</style>
<template>
  <div>
    <Dropdown @on-click="handleClick" placement="bottom-end">
      <a href="javascript:void(0)" style="color: #ffffff">
        {{userName}}
        <Icon type="md-arrow-dropdown" />
      </a>
      <DropdownMenu slot="list">
        <DropdownItem name="password">修改密码</DropdownItem>
        <DropdownItem name="logout">退 出</DropdownItem>
      </DropdownMenu>
    </Dropdown>

    <!--修改密码弹框组件-->
    <password ref="editPW"></password>
    <!--修改密码弹框组件-->
  </div>
</template>
<script>

import { mapActions } from 'vuex'
import password from './module/password.vue'
export default {
  name: 'User',
  components: {
    password
  },
  props: {
    userName: String
  },
  data () {
    return {}
  },
  methods: {
    ...mapActions([
      'handleLogout'
    ]),
    logout () {
      this.handleLogout().then(res => {
        console.log(res)
        this.$router.push({
          name: 'login'
        })
      })
    },
    handleClick (name) {
      switch (name) {
        case 'logout':
          this.logout();
          break
        case 'password':
          this.$refs.editPW.showModal();
          break
      }
    }
  }
}
</script>
