<template lang="html">
  <content>
    <input type="text" v-model="blg.title">
    <input type="text"  v-model="blg.subtitle">
    <vue-editor :editor-content="blg.content" :use-save-button="false">
  </vue-editor>

  </content>
</template>

<script>
import { VueEditor } from 'vue2-editor'
export default {
  name: 'editor',
  props: ['blg', 'mode'],
  data() {
    return {
      title: '',
      subtitle: '',
      content: '',
    }
  },
  methods: {


  },
  components: {
    VueEditor
  },
}
</script>

<style lang="sass" scoped>
  input, button
    display: block
    width: 80%
    margin-bottom: 10px
    font-size: 22px
    border-radius: 6px
    border: 0
    outline: 0
    padding: 6px 10px


</style>
