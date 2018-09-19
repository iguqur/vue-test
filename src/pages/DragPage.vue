<template>
  <q-page>
    <Tree :data="data" draggable="draggable" cross-tree="cross-tree">
      <div slot-scope="{data, store}">
        <template v-if="!data.isDragPlaceHolder">
          <b v-if="data.children &amp;&amp; data.children.length" @click="store.toggleOpen(data)">{{data.open ? '-' : '+'}}&nbsp;
          </b>
          <span>{{data.text}}</span>
        </template>
      </div>
    </Tree>
  </q-page>
</template>

<script>
import {DraggableTree} from 'vue-draggable-nested-tree'

export default {
  name: 'DragPage',
  components: {Tree: DraggableTree},
  data: function () {
    return {
      data: [
        {text: 'node 1'},
        {text: 'node 2'},
        {text: 'node 3 undraggable', draggable: false},
        {text: 'node 4'},
        {text: 'node 4 undroppable', droppable: false},
        {
          text: 'node 5',
          children: [
            {text: 'node 1'},
            {
              text: 'node 2',
              children: [
                {text: 'node 3'},
                {text: 'node 4'}
              ]
            },
            {
              text: 'node 2 undroppable',
              droppable: false,
              children: [
                {text: 'node 3'},
                {text: 'node 4'}
              ]
            },
            {
              text: 'node 2',
              children: [
                {text: 'node 3'},
                {text: 'node 4 undroppable', droppable: false}
              ]
            },
            {text: 'node 3'},
            {text: 'node 4'},
            {text: 'node 3'},
            {text: 'node 4'},
            {text: 'node 3'},
            {text: 'node 4'},
            {text: 'node 3'},
            {text: 'node 4'}
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
