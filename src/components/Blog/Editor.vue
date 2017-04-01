<template lang="html">
  <content>
    <div class="container">
    <textarea class="editor-window" :value='input' @input="update" ></textarea>
    <preview class="editor-window" :raw="input">  </preview>
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
  methods: {
    update(e) {
      this.input = e.target.value
    }
  },

  components: {
    Preview
  },

}
</script>

<style lang="sass" >
  .container
    max-width: 70%

    margin: 0 auto
    .editor-window
      margin-top: 40px
      min-height: 600px
      margin-right: 40px
      width: 40%
      float: left

</style>
