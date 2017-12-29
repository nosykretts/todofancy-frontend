<template>
  <el-row type="flex" justify="space-around" align="middle" :style="{height:'120px'}" class="headerx">
    <div class="site-logo">todofancy</div>
    
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

<style scoped>
.site-logo{
  color: white;
  font-size: 39px;
  font-weight :200;
}

</style>
