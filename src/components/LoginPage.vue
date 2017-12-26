<template>
  
  <el-card class="box-card">
    <el-input placeholder="Email" name="email" v-model="email" ></el-input>
    <el-input placeholder="Password" type="password" name="password" v-model="password"></el-input>
    <hr>
    <el-button type="primary" @click="login">Facebook Login</el-button>
  </el-card>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  data() {
    return {
      email : null,
      password : null
    }
  },
  methods : {
    login(){
      this.$store.dispatch('login',{
        email : this.email,
        password : this.password
      })
    }
  }
}
</script>


<style scoped>

</style>