<template lang="html">
  <content>
    <article class="markdown-body">
    <div v-html='compiled' >hello</div>
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
    return require('highlight.js').highlightAuto(code).value;
  }
});


export default {
  props: ['raw'],
  computed: {
    compiled() {
      return marked(this.raw, { sanitize: true })
    }
  },

}
</script>

<style lang="css">

</style>
