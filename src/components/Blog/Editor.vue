<template lang="html">
  <content>
    <div class="container">
    <input type="text" placeholder="Title" v-model="blog.title">
    <input type="text" placeholder="Subtitle"  v-model="blog.subtitle">
    <vue-editor
      :editor-content="content"
      :use-save-button="false"
      @editor-updated=handleUpdatedContent>
    </vue-editor>
    <button class="cancel" @click="onCancel">Cancel</button>
    <button class="save" @click="saveTheContent">Save</button>
    </div>
  </content>
</template>

<script>
import { mapGetters } from 'vuex'
import { VueEditor } from 'vue2-editor'

export default {
  name: 'editor',
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters({blog: 'blog'})
  },

  methods: {
    onCancel(){
      this.$store.commit('onCancel')
    },
    handleUpdatedContent: function(value) {
      this.$store.commit('onEditingBlogContent', value)
    },
    saveTheContent: function () {
       // Do whatever you want
       console.log(this.blog)
     }
  },
  components: {
    VueEditor
  },
  created(){
    this.Blog = JSON.parse(JSON.stringify(this.blog))
    this.content = this.Blog.content
  },
}
</script>

<style lang="sass" scoped>
  .container
    max-width: 790px
    margin: 0 auto
  input
    border: 1px solid #999
    font-size: 18px
    display: block
    padding: 12px 6px
    width: 80%
    margin: 0 auto
    text-align: center
    margin-top: 10px
    margin-bottom: 10px
    border-radius: 6px
    transition: all 0.5s ease-in-out
    &:focus
      box-shadow: 1px 1px 12px 0 #555

  .cancel, .save
    border: 0
    margin-top: 10px
    font-size: 18px
    font-weight: 800
    color: #fff
    padding: 10px 20px
    cursor: pointer
    &:hover
      box-shadow: 1px 1px 12px 0 #555
  .cancel
    background: rgba(255,6,6,.7)
  .save
    background: rgb(191,214,46)


</style>
