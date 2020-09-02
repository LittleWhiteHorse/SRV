<style>

</style>
<template>
  <div>
    <Dropdown @on-click="handleClick">
      <a href="javascript:void(0)">
        用户名
        <Icon type="ios-arrow-down"></Icon>
      </a>
      <DropdownMenu slot="list">
        <DropdownItem name="password">修改密码</DropdownItem>
        <DropdownItem name="logout">退 出</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>
<script>
export default {
  name: 'User',
  data () {
    return {}
  },
  methods: {
    logout () {
      this.$router.push({
        name: 'login'
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
