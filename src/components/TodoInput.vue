<template>
  <input placeholder="What todo..." v-model="xtitle" v-on:keyup.enter="onHitEnter" class="el-input__inner"/>
</template>

 <script>
export default {
  name: 'TodoInput',
  props: ['title'],
  mounted(){
    this.xtitle = this.$props.title || null
  },
  data(){
    return {
      xtitle : null
    }
  },
  methods: {
    onHitEnter() {
      this.$emit('onHitEnter', this.xtitle)
    },
  }
}
</script>
 