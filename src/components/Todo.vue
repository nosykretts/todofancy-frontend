<template>
    <el-row :gutter="20">
      <div class="todo-row">
        <el-col :span="22">
          <p>{{todo.title}}</p>
        </el-col>
        <el-col :span="2">
          <p><i class="el-icon-close pull-right"></i></p>
        </el-col>
      </div>
    </el-row>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Todo',
  props: ['todo']
}
</script>

<style scoped>
.pull-right{
  float: right;
}
.todo-row{
  border-bottom: 1px solid #ebeef5;
  margin-top: 20px;
  background: rgb(255, 112, 112);
  display: inline-block;
  width: 100%;
}
</style>

