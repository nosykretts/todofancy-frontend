<template>
  <todo-list/>
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

