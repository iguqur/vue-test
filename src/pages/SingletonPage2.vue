<template>
  <q-page class="flex flex-center">
    <div id="singletonparent2" class="column">
      <!--<singleton-component></singleton-component>-->
      <q-btn>第二页的按钮</q-btn>
    </div>
  </q-page>
</template>

<script>
import SingletonComponent from '../components/SingletonComponent'

export default {
  name: 'SingletonPage2',
  components: {SingletonComponent},
  mounted () {
    // console.log(document.getElementById('singletonparent1'))
    // console.log(this.$singletonComponent)
    document.getElementById('singletonparent2').appendChild(this.$singletonComponent)
  }
}
</script>

<style scoped>

</style>
