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
      <el-header style="height: auto !important;">
        <el-col :xs="{span:24}" :sm="{span:16,offset:4}" :md="{span: 12, offset:6}">
          <headerx/>
        </el-col>
      </el-header>
      <el-main>
        <el-row :gutter="0">
          <el-col :xs="{span:24}" :sm="{span:16,offset:4}" :md="{span: 12, offset:6}">
            <router-view></router-view>
          </el-col>
        </el-row>
      </el-main>
      <el-footer>
        <el-row class="footer">
          <p>Built with Love @hacktiv8</p>
        </el-row>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations, mapState } from 'vuex'
import { Message } from 'element-ui'
import Headerx from '@/components/Headerx'

export default {
  name: 'app',
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['errorMessage', 'notify']),
  },
  methods: {
    showMessage() {
      Message({ ...this.notify })
    },
  },
  watch: {
    notify() {
      this.showMessage()
    },
  },
  components: {
    Headerx,
  },
}
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
  background: #343434;
}
#app {
  padding-top: 20px;
}

body {
  font-family: Camphor, 'Open Sans', 'Segoe UI', sans-serif;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.el-container {
  min-height: 152vh;
}
.el-card__header {
  border-bottom: 1px solid #dcdfe7;
  padding: 10px 0;
}

.footer {
  text-align: center;
  color: white;
  font-size: larger;
}

.el-input__inner {
  border: none !important;
  zoom: 1.5;
  background: none;
  padding: 0;
}

.background {
  background-image: linear-gradient(135deg, #a0e0ff, #7672ff);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 70%, 0 100%);
}
.stripes {
  position: absolute;
  width: 100%;
  height: 140%;
  top: 0;
  left: 0;
  transform: translateZ(0) skewY(13deg);
}
.stripes .stripe {
  top: 0;
  left: 0;
  width: 100%;
  position: absolute;
  height: 300px;
}
.stripes .stripe-1 {
  background: linear-gradient(
    90deg,
    rgba(84, 104, 222, 0.4),
    rgba(158, 155, 249, 0.1)
  );
}
.stripes .stripe-2 {
  top: 300px;
  background: linear-gradient(
    90deg,
    rgba(147, 120, 255, 0.32),
    rgba(170, 183, 255, 0.15)
  );
}
.stripes .stripe-3 {
  top: 600px;
  background: linear-gradient(
    90deg,
    rgba(89, 113, 255, 0.4),
    rgba(255, 255, 255, 0)
  );
}

.beauty {
  white-space: nowrap;
  display: inline-block;
  height: 40px;
  line-height: 40px;
  padding: 0 14px;
  -webkit-box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
    0 1px 3px rgba(0, 0, 0, 0.08);
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  background: #62d5ab;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.025em;
  color: #fff;
  text-decoration: none;
  -webkit-transition: all 0.15s ease;
  transition: all 0.15s ease;
  text-shadow: 0 1px 3px rgba(36, 180, 126, 0.4);
  -webkit-tap-highlight-color: transparent;
  border: none;
  outline: 0;
  cursor: pointer;
  position: relative;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.blue-purple {
  background: #566df1;
  text-shadow: 0 1px 3px rgb(93, 106, 181);
}

.beauty:not(:disabled):hover {
  color: white;
  background: #484559;
  -webkit-transform: translateY(-1px);
  transform: translateY(-1px);
  -webkit-box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1),
    0 3px 6px rgba(0, 0, 0, 0.08);
  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
}

.beauty:not(:disabled):active {
  color: white;
  background: #484559;
  -webkit-transform: translateY(1px);
  transform: translateY(1px);
  -webkit-box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
    0 1px 3px rgba(0, 0, 0, 0.08);
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
}

.fb-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #4267b2;
  color: #fff;
}
</style>



