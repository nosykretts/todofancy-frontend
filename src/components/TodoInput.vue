<template>
  <div :style="{background: background}">
    <el-input placeholder="What todo..." v-model="currentTitle" @keyup.enter.native="finishEdit" :disabled="readOnly" @dblclick.native="emitDblClick">
      <template v-if="!readOnly" slot="prepend">
        <!-- <i v-if="!showEmoji" class="el-icon-picture" @click="toggleEmoji"></i> -->
        <div v-if="!showEmoji" @click="toggleEmoji">😀</div>
        <i v-if="showEmoji" class="el-icon-arrow-up" @click="toggleEmoji"></i>
      </template>
      <template v-if="readOnly" slot="prepend">
        <slot name="kiri"></slot>
      </template>
      <template v-if="!readOnly" slot="append">
        <i class="el-icon-d-arrow-right" @click="finishEdit" style="color: #00d200"></i>
      </template>
      <template v-if="readOnly" slot="append">
        <slot name="kanan"></slot>
      </template>
    </el-input>
    <picker v-if="showEmoji" @click="onEmojiClick" hideSearchBar hideCategoriesBar hidePreviewBar :include="['people']"></picker>
  </div>

</template>

 <script>
import {Picker} from 'emoji-mart-vue'

export default {
  name: 'TodoInput',
  components: {Picker},
  props: ['title'],
  mounted() {
    this.currentTitle = this.$props.title || ''
    this.readOnly = this.$props.title ? true : false
  },
  data() {
    return {
      currentTitle: '',
      showEmoji: false,
      readOnly: false,
      
    }
  },
  computed : {
    background(){
      return !this.$props.title || this.readOnly ? 'white' : '#ffffdd'
    }
  },
  methods: {
    toggleEmoji() {
      this.showEmoji = !this.showEmoji
    },
    finishEdit() {
      let tmp = this.currentTitle
      if (!this.$props.title) {
        this.currentTitle = ''
      } else {
        this.readOnly = true
      }
      this.showEmoji = false
      this.$emit('onFinishEdit', tmp)
    },
    emitDblClick() {
      console.log('awww')
      this.readOnly = false
    },
    onEmojiClick(emoji) {
      this.currentTitle += emoji.native
      console.log(emoji)
    },
  },
}
</script>

<style>
.emoji-mart {
  width: 100% !important;
  border: none !important;
  border-radius: 0 !important;
}

.emoji-mart-category-label {
  display: none;
}

.el-input__inner:disabled{
  cursor: pointer !important;
}

.el-input-group__append,
.el-input-group__prepend {
  background: none;
  border: none;
}

.el-input-group__append > *,
.el-input-group__prepend > * {
  zoom: 1.4;
}

.el-checkbox__inner {
  border-radius: 100px;
}

.el-input.is-disabled .el-input__inner {
  color: #606266 !important;
  background: transparent !important;
}
</style>

 