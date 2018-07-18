<template>
    <q-page>
      <q-btn>{{value}}</q-btn>
    </q-page>
</template>

<script>
export default {
  name: 'TestPage',
  computed: {
    value () {
      console.log(this)
      return 1 + 1
    }
  },
  beforeCreate () {
    console.log(this)
    debugger
  },
  created () {
    debugger
  }
}
</script>

<style scoped>

</style>
