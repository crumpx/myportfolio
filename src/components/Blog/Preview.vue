<template lang="html">
  <content class='marked'>
    <article class="markdown-body" v-html='compiled'>
  </article>
  </content>
</template>

<script>
import marked from 'marked'
  marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false,
  highlight: function (code) {
    return require('highlight.js').highlightAuto(code).value
  }
});

export default {
  props: ['raw'],
  computed: {
    compiled() {
      // return marked(this.raw, { sanitize: true })
      if (this.raw) return marked(this.raw, { sanitize: true })
    }
  },

}
</script>

<style lang="sass" scoped>
    .markdown-body
      word-wrap: break-word
      ul, li
        list-style-type: lower-roman

</style>
