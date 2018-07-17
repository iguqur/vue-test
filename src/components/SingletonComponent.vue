<template>
  <div style="border: 1px red solid; width: 500px; height: 500px">
    <h1>singleton</h1>
    <ReusingComponent></ReusingComponent>
    <q-input suffix="@gmail.com" v-model="model"/>
  </div>
</template>

<script>
import ReusingComponent from './ReusingComponent'

export default {
  name: 'SingletonComponent',
  components: {ReusingComponent},
  data () {
    return {
      model: '我爱你'
    }
  },
  created () {
    console.log('实例化单例！！！')
  }
}
</script>

<style scoped>

</style>
