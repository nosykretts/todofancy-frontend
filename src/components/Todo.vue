<template>
  <div class="todo-row">
    <todo-input :title="todo.title" @onFinishEdit="updateTodo">
      <template slot="kiri">
        <el-checkbox v-model="checked" />
      </template>
      <template slot="kanan">
        <i class="el-icon-close" @click="removeTodo"></i>
      </template>
    </todo-input>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import TodoInput from '@/components/TodoInput'

export default {
  name: 'Todo',
  props: ['todo'],
  data() {
    return {
    }
  },
  components: {TodoInput},
  methods: {
    removeTodo() {
      this.$store.dispatch('removeTodo', {todo: this.todo})
    },
    updateTodo(title) {
      if (title.length > 0) {
        this.$store.dispatch('updateTodo', {
          todo: this.todo,
          title: title,
        })
      } else {
        this.removeTodo()
      }
    }
  },
  computed: {
    checked: {
      get() {
        return this.todo.completed
      },
      set(checked) {
        this.$store.dispatch('markTodo', {
          todo: this.todo,
          completed: checked,
        })
      },
    },
  },
}
</script>

<style scoped>
.todo-row {
  border-bottom: 1px solid #ebeef5;
  width: 100%;
}
</style>