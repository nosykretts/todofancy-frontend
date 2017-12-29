<template>
  <el-row type="flex" justify="space-around" align="middle" :style="{height:'120px'}" class="headerx">
    <router-link to="/" class="site-logo">todofancy</router-link>
    <!-- <a class="site-logo">todofancy</a> -->
    
  </el-row>
</template>
<script>
import {mapGetters, mapActions, mapMutations} from 'vuex'

export default {
  name: 'Headerx',
  data (){
    return {
    }
  },
  methods: {
    ...mapMutations(['USER_LOGOUT']),
  },
  computed: {
    ...mapGetters(['isLoggedIn'])
  }
}
</script>

<style>
.site-logo, .site-logo:hover, .site-logo:focus,  .site-logo:active{
  color: white;
  border : none;
  font-size: 39px;
  font-weight :200;
}

</style>
