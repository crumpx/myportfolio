<template lang="html">
  <content class='editor'>
    <div class="container">
      <div class="edit">
        <input type="text" placeholder="tags">
        <textarea  :value='input' @input="update" ></textarea>
        <button type="button" name="button">Cancel</button>
        <button type="button" name="button">Save</button>
      </div>
      <preview class="preview" :raw="input"></preview>
  </div>
  </content>
</template>

<script>
import Preview from './Preview'

export default {
  data() {
    return {
      input: ''
    }
  },
  computed: {
    input() {
      return this.$store.getters.blog.content
    }
  },
  methods: {
    update(e) {
      this.$store.commit('onEditingBlogContent',e.target.value )
      this.input = e.target.value || ''
      console.log(decodeURIComponent(this.input))
    }
  },
  created() {
    this.input = this.$store.getters.blog.content
  },

  components: {
    Preview
  },

}
</script>

<style lang="sass" >
  .editor
    .container
      max-width: 70%
      margin: 0 auto
      .edit, .preview
        margin-top: 40px
        min-height: 600px
        margin-right: 40px
        width: 40%
        float: left
      .edit
        input, textarea
          width: 80%
          padding: 10px 20px
          margin-bottom: 10px
        textarea
          height: 60vh
          display: block






</style>
