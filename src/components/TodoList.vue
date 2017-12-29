<template>
  <div>
    <el-card class="box-card" :body-style="{ padding: '0px' }">
      <div slot="header" class="clearfix">
        <todo-input @onFinishEdit="addTodo" />
      </div>
      <todo v-for="todo in todos" :key="todo._id" :todo="todo" />
    </el-card>
    <logout-button/>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import TodoInput from '@/components/TodoInput'
import Todo from './Todo'
import LogoutButton from '@/components/LogoutButton'

export default {
  name: 'TodoList',
  components: { Todo, TodoInput, LogoutButton },
  data() {
    return {}
  },
  mounted() {
    this.$store.dispatch('getTodos')
  },
  methods: {
    addTodo(title) {
      if (title && title.length > 0) {
        this.$store.dispatch('addTodo', {
          title,
        })
      }
    },
  },
  computed: {
    ...mapGetters(['todos']),
  },
}
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}
ul > li {
  margin: 0;
  padding: 10px 0;
  border-bottom: 1px solid lightcoral;
}
.main-shadow {
  background: white;
  -webkit-box-shadow: -2px -1px 62px -12px rgba(0, 0, 0, 0.46);
  -moz-box-shadow: -2px -1px 62px -12px rgba(0, 0, 0, 0.46);
  box-shadow: -2px -1px 62px -12px rgba(0, 0, 0, 0.46);
}
</style>
