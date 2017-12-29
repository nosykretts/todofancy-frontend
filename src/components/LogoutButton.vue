<template>
  <div class="logout-wrapper">
    <el-button v-if="isLoggedIn" @click="USER_LOGOUT" class="beauty" size="small">Logout</el-button>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'LogoutButton',
  methods: {
    ...mapMutations(['USER_LOGOUT']),
  },
  computed: {
    ...mapGetters(['isLoggedIn']),
  },
}
</script>

<style scoped>
.logout-wrapper{
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top : 50px;
}
</style>
