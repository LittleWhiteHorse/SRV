<style>

</style>
<template>
  <div style="margin: 40px 0; text-align: center;">
    <Button type="primary" @click="handelRegistered" style="background-color: #1d579f;">
      <Icon :size="18" type="md-copy" />
      登记用户
    </Button>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {}
  },
  methods: {
    handelRegistered () {
      this.$router.push({
        name: 'register_user'
      })
    }
  }
}
</script>
