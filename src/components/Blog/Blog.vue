<template lang="html">
  <section>
    <article class="blog">
        <h1>{{ blog.title }}</h1>
        <h5>{{blog.subtitle}}</h5>
        <template v-for="tag of blog.tag">
          <a href="">{{tag}}</a>
        </template>
        <strong class="right" v-if="blog.author">By: {{ blog.author.fullname }}</strong>
        <strong class="right" v-else>By: Unknown</strong>
        <span class="right">on {{blog.createdAt | formatDate}}</span>
        <a href="#">share</a>
        <a @click="toggleEditing(blog)">edit</a>
        <p v-html="blog.content"></p>
        <button><i class="fa fa-thumbs-up" aria-hidden="true"></i><span>200</span></button>
    </article>
  </section>
</template>

<script>
import Editor from './Editor'
export default {
  props: ['blog'],

  computed: {
    isEditing() {
      return this.$store.getters.isEditing
    }
  },
  methods: {
    toggleEditing(blog) {
      this.$store.commit('onEditingBlog', blog)
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
    Editor
  },
}

</script>

<style lang="sass" scoped>
  .right
    text-align: right
    display: block
    line-height: 1.5


  .blog
    a
      text-decoration: none
      color: #666
      &:hover
        text-decoration: underline
        color: #000
    padding: 20px
    h1
      font-size: 48px
      font-weight: 800
      color: #777
      word-wrap: break-word

    h5
      font-style: italic
      font-size: 24px
      color: #555
      margin: 12px 0 20px 0

    strong
      display: block
    p
      margin: 10px 0
      font-size: 18px
      line-height: 1.5em
      &::first-letter
        font-size: 24px
        font-weight: 700
    button
      border: none
      font-size: 22px
      margin-right: 6px
      cursor: pointer
      span
        margin-left: 6px



</style>
