<template>
  <div>
    <modal v-if="showModal" @close="close">
      <h3 class="modal-header-title" slot="header">确认删除当前用户？</h3>
      <span slot="body">Name: {{ delName }}</span>
      <span slot="footer">Power:{{ delPower }}</span>
    </modal>

    <form id="search">
      add <input v-model="newTodoText" placeholder="new todo" @keydown.enter="addTodo">
      Search <input name="query" v-model="searchQuery">
    </form>
    <ItemList
      :columns="gridColumns"
      :data="gridData"
      :filter-key="searchQuery"
      @remove="removeTodo"
    />
  </div>
</template>

<script>
import ItemList from './ItemList'
import Modal from '../../components/Modal'

let nextTodoId = 1

export default {
  name: 'Home',
  data () {
    return {
      delId: '',
      delName: '',
      delPower: '',
      showModal: false,
      newTodoText: '',
      searchQuery: '',
      gridColumns: ['name', 'power'],
      gridData: [
        {
          id: nextTodoId++,
          name: 'Chuck Norris',
          power: Infinity
        },
        {
          id: nextTodoId++,
          name: 'Bruce Lee',
          power: 9000
        },
        {
          id: nextTodoId++,
          name: 'Jackie Chan',
          power: 7000
        },
        {
          id: nextTodoId++,
          name: 'Jet Li',
          power: 8000
        }
      ]
    }
  },
  components: {
    ItemList,
    Modal
  },
  methods: {
    addTodo: function () {
      const trimText = this.newTodoText.trim()
      if (trimText) {
        this.gridData.push({
          id: nextTodoId++,
          name: trimText,
          power: parseInt(Math.random() * 1e4)
        })
        this.newTodoText = ''
      }
    },
    close: function (bool) {
      this.showModal = false
      if (bool === false) {
        return
      }
      this.gridData = this.gridData.filter(todo => {
        return todo.id !== this.delId
      })
    },
    removeTodo: function (entry) {
      // this.gridData = this.gridData.filter(todo => {
      //   return todo.id !== id
      // })
      this.showModal = true
      this.delId = entry.id
      this.delName = entry.name
      this.delPower = entry.power
    }
  }
}
</script>

<style>
  .modal-header-title{
    margin-top: 0;
    color: #42b983;
    user-select: none;
  }
</style>
