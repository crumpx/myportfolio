<template lang="html">
  <section>
    <div class="blog-list">
      <div class="container">
        <blog v-for="blog of blogs" v-bind:blog="blog" :key="blog.id"></blog>

    </div> <!-- container -->
    </div>

  </section>
</template>

<script>

import axios from 'axios'
import Blog from './Blog'
export default {
  data() {
    return {
      blogs: {}
    }
  },
  methods: {
    fetch() {
        axios.get('http://localhost:3000/').then(response =>{
          this.blogs = response.data;
        }).catch(error => console.log(error))
    }
  },
  components: {
    'blog': Blog,
  },
  created: function(){
    this.fetch();
  }
}
</script>

<style lang="sass" scoped>
  section
    background: #eee
    .blog-list
      background: #eee
      .container
        max-width: 790px
        margin: 0 auto
</style>
