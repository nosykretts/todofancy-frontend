<template>
  <div class="bottom-wrapper">
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

<style>

</style>
