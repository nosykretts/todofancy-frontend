<template>
  <el-card class="box-card" :body-style="{ padding: '0px' }">
    <div slot="header" class="clearfix">
      <el-input placeholder="What todo..." >
      </el-input>
    </div>
    <todo v-for="todo in todos" v-bind:key="todo.title" :todo="todo"/>
    <el-row>
      <el-button @click="login">Get Token</el-button>    
      <el-button @click="getTodos">Get Todos</el-button>    
    </el-row>    
  </el-card>
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
.main-shadow{
  background: white;
  -webkit-box-shadow: -2px -1px 62px -12px rgba(0,0,0,0.46);
  -moz-box-shadow: -2px -1px 62px -12px rgba(0,0,0,0.46);
  box-shadow: -2px -1px 62px -12px rgba(0,0,0,0.46);  
}



</style>


