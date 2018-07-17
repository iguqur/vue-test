<template>
    <q-btn @click="onClicked">你点了我{{count}}次</q-btn>
</template>

<script>
export default {
  name: 'ReusingComponent',
  data () { // CONCLUSION: data若不是函数会直接报错，按照文档上来处理是不现实的
    return {
      count: 0
    }
  },
  methods: {
    onClicked: function () {
      ++this.count
    }
  }
}
</script>

<style scoped>

</style>
