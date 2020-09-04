<style>

</style>
<template>
  <div>
    <Button type="primary" @click="handelRegistered">
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
