<template>
  <el-row :gutter="20">
    <div class="todo-row">
      <el-col :span="2">
        <el-checkbox v-model="completed"/>
      </el-col>
      <el-col :span="20">
        <div v-if="!isEditing" class="green" v-on:dblclick="doEdit">{{todo.title}}</div>
        <todo-input v-if="isEditing" :title="todo.title" @onHitEnter="updateTodo"/>
      </el-col>
      <el-col :span="2">
        <p>
          <i class="el-icon-close pull-right" @click="removeTodo(todo._id)"></i>
        </p>
      </el-col>
    </div>
  </el-row>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import TodoInput from '@/components/TodoInput'

export default {
  name: 'Todo',
  props: ['todo'],
  data (){
    return {
      isEditing : false,
    }
  },
  components : {TodoInput},
  methods : {
    removeTodo(id){
      this.$store.dispatch('removeTodo', {
        id : id
      })
    },
    updateTodo(title){
      this.isEditing = false
      this.$store.dispatch('updateTodo', {
        id : this.todo._id,
        title
      })
      console.log('UPDATE', this.todo._id, title)
    },
    doEdit(){
      console.log('doEdit')
      this.isEditing = true
    }
  },
  computed: {
   completed: {
     get(){
       return this.todo && this.todo.completed ? true : false
     },
     set(checked){
       console.log(checked)
     }
   }
  }
}
</script>

<style scoped>
.pull-right{
  float: right;
}
.todo-row{
  border-bottom: 1px solid #ebeef5;
  margin-top: 20px;
  background: rgb(249, 209, 209);
  display: inline-block;
  width: 100%;
}
.green{
  background: rgb(214, 249, 159);
}
</style>

