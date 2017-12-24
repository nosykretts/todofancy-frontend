<template>
    <li>
      {{todo.title}}
        <el-button type="primary" size="small">Primary</el-button>
    </li>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Todo',
  props: ['todo'],
  computed: {
    ...mapGetters(['todos']),
  },
}
</script>
