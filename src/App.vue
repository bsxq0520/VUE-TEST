<template>
  <div id="app">
    <form id="search">
      add <input v-model="newTodoText" placeholder="new todo" @keydown.enter="addTodo">
      Search <input name="query" v-model="searchQuery">
    </form>
    <HelloWorld
      :columns="gridColumns"
      :data="gridData"
      :filter-key="searchQuery"
      @remove="removeTodo"
    />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

let nextTodoId = 1

export default {
  name: 'App',
  data () {
    return {
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
    HelloWorld
  },
  methods: {
    addTodo: function () {
      const trimText = this.newTodoText.trim()
      if (trimText) {
        this.gridData.push({
          id: nextTodoId++,
          name: trimText,
          power: 3200
        })
        this.newTodoText = ''
      }
    },
    removeTodo: function (id) {
      this.gridData = this.gridData.filter(todo => {
        return todo.id !== id
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
