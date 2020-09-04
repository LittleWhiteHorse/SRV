<style>

</style>
<template>
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
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'User',
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
          this.$router.push({ name: 'edit' });
          break
      }
    }
  }
}
</script>
