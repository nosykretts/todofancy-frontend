<template>
  <div id="app">
    <div class="background">
      <div class="stripes">
        <div class="stripe stripe-1"></div>
        <div class="stripe stripe-2"></div>
        <div class="stripe stripe-3"></div>
      </div> 
    </div>
    <el-container>
      <el-header>
        <headerx/>
      </el-header>
      <el-main>
        <el-row :gutter="0">
          <el-col :xs="{span:24}" :sm="{span:15,offset:4}" :md="{span: 10, offset:7}">
            <router-view/>    
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Headerx from '@/components/Headerx'
import { Message } from 'element-ui'

export default {
  name: 'app',
  computed: {
    ...mapGetters(['errorMessage'])
  },
  components : {
    Headerx
  }
}
</script>

<style>
html, body{
  padding: 0;
  margin: 0;
}
body{
  font-family: Camphor, Open Sans, Segoe UI, sans-serif;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.el-card__header {
  border-bottom: 1px solid #dcdfe7;
  padding : 0;
  background: #f1f1f1;
}

.el-input__inner {
  border: none !important;
  zoom: 1.5;
  background: none;
}


.el-input-group__append{
  background: none;
  border: none;
}
.background {
  background-image: linear-gradient(135deg,#54de78,#9e9bf9);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  clip-path : polygon(0 0,100% 0,100% 70%,0 100%);
}
.stripes {
  position : absolute;
  width : 100%;
  height: 140%;
  top: 0;
  left: 0;
  transform: translateZ(0) skewY(13deg);
}
.stripes .stripe {
  top : 0;
  left : 0;
  width : 100%;
  position: absolute;
  height: 300px;
} 
.stripes .stripe-1{
  background: linear-gradient(90deg,rgba(84,104,222,.4),rgba(158,155,249,.1));
}
.stripes .stripe-2{
  top: 300px;
  background: linear-gradient(90deg,rgba(158,155,249,.1),rgba(84,104,222,.4));
}
.stripes .stripe-3{
  top: 600px;
  background: linear-gradient(90deg,rgba(84,104,222,.4),rgba(158,155,249,.1))
}

 button{
  white-space: nowrap;
  display: inline-block;
  height: 40px;
  line-height: 40px;
  padding: 0 14px;
  -webkit-box-shadow: 0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08);
  box-shadow: 0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08);
  background: #62d5ab;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: .025em;
  color: #fff;
  text-decoration: none;
  -webkit-transition: all .15s ease;
  transition: all .15s ease;
  text-shadow: 0 1px 3px rgba(36,180,126,.4);
  -webkit-tap-highlight-color: transparent;
  border: none;
  outline: 0;
  cursor: pointer;
  position: relative;
  -webkit-box-sizing: border-box;
  box-sizing: border-box
}
</style>



