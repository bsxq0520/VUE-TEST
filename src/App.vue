<template>
  <div id="app">
    <form id="search">
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

export default {
  name: 'App',
  data () {
    return {
      searchQuery: '',
      gridColumns: ['name', 'power'],
      gridData: [
        { name: 'Chuck Norris', power: Infinity, id: 1 },
        { name: 'Bruce Lee', power: 9000, id: 2 },
        { name: 'Jackie Chan', power: 7000, id: 3 },
        { name: 'Jet Li', power: 8000, id: 4 }
      ]
    }
  },
  components: {
    HelloWorld
  },
  methods: {
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
