<template lang="html">
  <article class="blog">
        <template v-for="tag of blog.tag">
          <a href="">{{tag}}</a>
        </template>
        <strong class="right" v-if="blog.author">By: {{ blog.author.fullname }}</strong>
        <strong class="right" v-else>By: Unknown</strong>
        <span class="right">on {{blog.createdAt | formatDate}}</span>
        <a href="#">share</a> \
        <a href='#' @click="toggleEditing({blog: blog, mode: 'editing'})">edit</a>
        <preview :raw="blog.content"></preview>
        <button><i class="fa fa-thumbs-up" aria-hidden="true"></i><span>200</span></button>
    </article>
</template>

<script>

import Preview from './Preview'
export default {
  props: ['blog'],

  computed: {
    // isEditing() {
    //   return this.$store.getters.isEditing
    // }
  },
  methods: {
    toggleEditing(payload) {
      this.$store.commit('onEditingBlog', payload)
      this.$router.push({path: '/blogs/edit'})
    },

  },
  filters: {
    formatDate: date => {
      let aDate = new Date(date)
      let month = aDate.getMonth() + 1
      let day = aDate.getDay()
      let year = aDate.getFullYear()
      let hour = aDate.getHours()
      let minutes = aDate.getMinutes() < 10 ? '0'+aDate.getMinutes() : aDate.getMinutes()
      return month + '/' + day + '/' + year + ' ' + hour + ':' + minutes
    }
  },
  components: {
    Preview
  },
}

</script>

<style lang="sass" scoped>
  .right
    text-align: right
    display: block
    line-height: 1.5
  .blog
    background: #eee
    margin: 10px 0
    padding: 20px 20px
    border-radius: 6px
    a
      text-decoration: none
      color: #666
      &:hover
        text-decoration: underline
        color: #000

    button
      border: none
      font-size: 22px
      margin-right: 6px
      cursor: pointer
      span
        margin-left: 6px



</style>
