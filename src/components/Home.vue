<template>
  <div>
    <h1>This is Home</h1>
    <todo-list/>
  </div>
</template>

<script>
import TodoList from './TodoList'

export default {
  name: 'Home',
  components: { TodoList },
  data() {
    return {
      msg: 'Welcome to Your Vue.js Appax',
    }
  },
}
</script>

