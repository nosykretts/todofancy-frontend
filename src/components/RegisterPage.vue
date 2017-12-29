<template>
  <el-row type="flex" justify="space-around" align="middle">
    <div>

        <el-card class="box-card" style="max-width: 350px">
          <el-input placeholder="Name" name="name" v-model="name"></el-input>
          <el-input placeholder="Email" name="email" v-model="email"></el-input>
          <el-input placeholder="Password" type="password" name="password" v-model="password" style="margin-bottom:20px;"></el-input>
          <el-button @click="register" class="beauty" style="width:100%; height:50px;">Register</el-button>
        </el-card>
     
    </div>
  </el-row>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      email: null,
      password: null,
      name: null,
    }
  },
  methods: {
    register() {
      this.$store.dispatch('register', {
        name : this.name,
        email: this.email,
        password: this.password,
      })
    }
  },
}
</script>

<style scoped>

</style>



