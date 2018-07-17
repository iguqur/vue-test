<template>
  <q-list
    no-border
    link
    inset-delimiter
  >
    <q-list-header>主菜单</q-list-header>
    <q-collapsible group="menugroup" v-for="fristMenu in menus" :key="fristMenu.label" :icon="fristMenu.icon" :label="fristMenu.label">
      <q-item @click="onClicked" v-for="secondMenu in fristMenu.children" :key="secondMenu.label" :to="secondMenu.url"><q-item-main :label='secondMenu.label'/></q-item>
    </q-collapsible>
  </q-list>
</template>

<script>
export default {
  name: 'MainMenu',
  data () {
    return {
      menus: [
        {
          label: '功能',
          icon: 'perm_identity',
          children: [
            { label: '组件复用', url: '/reusingcomponent' },
            { label: '单例第一页', url: '/singleton1' },
            { label: '单例第二页', url: '/singleton2' }
          ]
        }
      ]
    }
  },
  methods: {
    onClicked: function () {
      console.log('clicked')
    }
  }
}
</script>

<style scoped>

</style>
