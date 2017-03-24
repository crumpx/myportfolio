<template lang="html">
  <content class="blog-list">
    <div class="container">

<button v-on:click="getData">Hello</button>

    <template v-for="blog of blogs">
    <!-- <template> -->
      <article class="blog">

        <h2><a href="#">{{ blog.title }}</a></h2>
        <strong>By: {{ blog.author }}</strong>
        <span>on {{blog.date}}</span>
        <a href="#">share</a>
        <a href="#">edit</a>
        <p>{{blog.content}}</p>
        <span>comment:</span>
        <section class="comments">
          <textarea name="name" rows="8" ></textarea>
        </section>
      </article>

    </template>


  </div> <!-- container -->
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
    getData: function(){
      var self = this
      axios.get('http://localhost:3000/').then(function(response){
        self.blogs = response.data
      })
    }
  }
}

</script>

<style lang="sass" scoped>
  .container
    max-width: 790px
    margin: 0 auto
    margin-top: 20px
    .blog
      a
        text-decoration: none
        color: #666
        &:hover
          text-decoration: underline
          color: #000
      padding: 20px
      border-radius: 6px
      // box-shadow: 0 0 12px 0 #000
      border: 1px dotted #555
      margin: 0 10px 10px 10px
      &:hover
        box-shadow: 0 0 12px 0 #000
        border: 2px solid #fff
      h2
        font-size: 32px
        margin-bottom: 20px

      strong
        display: block
        font-weight: bold


      p
        margin: 10px 0
        font-size: 120%
        &::first-letter
          font-size: 180%



      .comments
        textarea
          width: 100%


</style>
