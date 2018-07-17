<template>
  <q-page class="flex flex-center">
    <div class="column">
      <reusing-component></reusing-component>
      <reusing-component></reusing-component>
    </div>
  </q-page>
</template>

<script>
import ReusingComponent from '../components/ReusingComponent'

export default {
  name: 'ReusingComponentsPage',
  components: {ReusingComponent}
}
</script>

<style scoped>

</style>
