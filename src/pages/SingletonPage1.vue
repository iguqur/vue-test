<template>
  <q-page class="flex flex-center">
    <div id="singletonparent1" class="row">
      <!--<singleton-component></singleton-component>-->
      <q-btn>第一页的按钮</q-btn>
    </div>
  </q-page>
</template>

<script>
import SingletonComponent from '../components/SingletonComponent'

export default {
  // CONCLUSION: <keep-alive> 不适用

  name: 'SingletonPage1',
  components: {SingletonComponent},
  mounted () {
    // console.log(document.getElementById('singletonparent1'))
    // console.log(this.$singletonComponent)
    document.getElementById('singletonparent1').appendChild(this.$singletonComponent)
  }
}
</script>

<style scoped>

</style>
