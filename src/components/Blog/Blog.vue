<template lang="html">
  <content>
    <div class="blog-list">
      <div class="container">

      <template v-for="blog of blogs">
        <article class="blog">

          <h1>{{ blog.title }}</h1>
          <h5>{{blog.subtitle}}</h5>
          <strong class="right" v-if="blog.author">By: {{ blog.author.fullname }}</strong>
          <strong class="right" v-else>By: Unknown</strong>
          <span class="right">on {{blog.createdAt | formatDate}}</span>
          <a href="#">share</a>
          <a href="#">edit</a>
          <p v-html='blog.content'></p>
        </article>
          <hr>

      </template>


    </div> <!-- container -->
    </div>

  </content>

</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      blogs: {},
    }
  },
  methods: {

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
  created: function() {
    var self = this
    axios.get('http://localhost:3000/').then(function(response){
      self.blogs = response.data
    })
  }
}




</script>

<style lang="sass" scoped>

  .right
    text-align: right
    display: block
    line-height: 1.5
  .blog-list
    background: #eee
    .container
      max-width: 790px
      margin: 0 auto
      

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
          // font-weight: bold
        p
          margin: 10px 0
          font-size: 18px
          line-height: 1.5em
          &::first-letter
            font-size: 24px
            font-weight: 700
</style>
