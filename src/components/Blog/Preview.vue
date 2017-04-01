<template lang="html">
  <content>
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

<style lang="sass">
  article.markdown-body
    p, .air-p
      font-size: 1rem
      margin-bottom: 1.3rem

    h1, .air-h1, h2, .air-h2, h3, .air-h3, h4, .air-h4
      margin: 1.414rem 0 .5rem
      font-weight: inherit
      line-height: 1.42

    h1, .air-h1
      margin-top: 0
      font-size: 3.998rem

    h2, .air-h2
      font-size: 2.827rem

    h3, .air-h3
      font-size: 1.999rem

    h4, .air-h4
      font-size: 1.414rem

    h5, .air-h5
      font-size: 1.121rem

    h6, .air-h6
      font-size: .88rem

    small, .air-small
    img
      border-radius: 50%
      height: 200px
      margin: 0 auto
      width: 200px
    a
      color: #3498db
      &:visited
        color: #3498db
      &:hover, &:focus, &:active
        color: #2980b9

    pre
      background-color: #fafafa
      padding: 1rem
      text-align: left

    blockquote
      margin: 0
      border-left: 5px solid #7a7a7a
      font-style: italic

      padding: 1.33em
      text-align: left
      p
        font-size: 2em

    ul, ol, li
      text-align: left

    p

</style>
