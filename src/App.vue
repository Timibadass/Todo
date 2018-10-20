<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import TodoForm from './components/TodoForm.vue'

export default {
  name: 'app',
  components: {
    TodoForm
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
