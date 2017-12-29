<template>
  <el-row type="flex" justify="space-around" align="middle">
    <div>

        <el-card class="box-card" style="max-width: 350px">
          <el-input placeholder="Email" name="email" v-model="email"></el-input>
          <el-input placeholder="Password" type="password" name="password" v-model="password" style="margin-bottom:20px;"></el-input>

          <el-button @click="login" class="beauty" style="width:100%; height:50px;">Login</el-button>
          <hr>
          <!-- <p style="text-align:center; color:grey;">or</p> -->
          <fb-signin-button style="width:100%;" class="el-button beauty blue-purple" :params="fbSignInParams" @success="onFBSignInSuccess" @error="onFBSignInError">
            <span>Continue with Facebook</span>
          </fb-signin-button>
        </el-card>
        <div class="bottom-wrapper">
          <el-button @click="pushRegister" class="beauty">Register</el-button>
        </div>           
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
      fbSignInParams: {
        scope: 'public_profile,email',
        return_scopes: true,
      },
    }
  },
  methods: {
    login() {
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password,
      })
    },
    pushRegister(){
      this.$router.push({name: 'registerPage'})
    },
    onFBSignInSuccess(response) {
      this.$store.dispatch('loginWithFacebook', {
        accessToken: response.authResponse.accessToken,
      })
    },
    onFBSignInError(error) {
      console.log('OH NOES', error)
    },
  },
}
</script>

<style scoped>

</style>



