<template>
  <div id="app">
    <el-container>
      <header/>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>     
  </div>
</template>

<script>
import Header from './Header'

export default {
  name: 'app',
  components : {
    Header
  }
}
</script>