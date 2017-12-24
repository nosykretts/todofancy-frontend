<template>
  <div>
    <ul>
      <todo v-for="todo in todos" v-bind:key="todo.title" :todo="todo"/>
    </ul>
    <el-button @click="login">Get Token</el-button>    
    <el-button @click="getTodos">Get Todos</el-button>    
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Todo from './Todo'
export default {
  name: 'TodoList',
  components:{Todo},
  mounted() {
    // this.$store.dispatch('getTodos')
  },
  methods : {
    ...mapActions(['login','getTodos'])
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
    border-bottom: 1px solid lightcoral
  }
</style>


