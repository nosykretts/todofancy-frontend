<template>
  <el-card class="box-card" :body-style="{ padding: '0px' }">
    <div slot="header" class="clearfix">
      <todo-input @onHitEnter="addTodo"/>    
    </div>
    <todo v-for="todo in todos" v-bind:key="todo._id" :todo="todo"/>
    <el-row>
      <el-button @click="login">Get Token</el-button>
      <el-button @click="getTodos">Get Todos</el-button>
      <el-button @click="addTodo">Buruk Rupa</el-button>
    </el-row>
  </el-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import TodoInput from '@/components/TodoInput'
import Todo from './Todo'

export default {
  name: 'TodoList',
  components: { Todo , TodoInput},
  data(){
    return{
      
    }
  },
  mounted() {
    this.$store.dispatch('getTodos')
  },
  methods: {
    ...mapActions(['login', 'getTodos']),
    addTodo(title){
      this.$store.dispatch('addTodo', {
        title
      })
    }  
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
