export default {
  method: {
    showChildren (item) {
      return item.children && item.children.length > 1
    }
  }
}
