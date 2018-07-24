<script>
export default {
  name: 'render1',
  render: function (createElement) {
    return createElement('h' + this.level, {
      class: 'my render1'
    },
    this.$slots.default)
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
