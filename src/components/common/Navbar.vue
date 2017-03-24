<template lang="html">
  <header>
    <nav class='navbar '>
      <div class="container clearfix">
      <div class="brand">
        <strong>Gang</strong>
        </div>
      <div class="nav-toggle" v-on:click="openMenu()">☰</div>

      <div v-bind:class="[ isOpen ? 'open' : 'close', 'nav-menu']">
        <ul>
          <template v-if="$route.fullPath == '/'">
            <li> <a href="#" v-scroll-to="'#aboutme'" title='About Me' v-on:click="openMenu()">About</a></li>
            <li> <a href="#" v-scroll-to="'#portfolio'" title='My Portfolio' v-on:click="openMenu()">Portfolio</a></li>
            <li><router-link to="/blog">Blog</router-link></li>
          </template>

          <template v-if="$route.fullPath == '/blog'">
            <li><router-link to="/">Back To Home</router-link></li>
          </template>

        </ul>
      </div>
      </div>
    </nav>
    <div class="spacer"></div>
  </header>
</template>

<script>
export default {
  name: 'navbar',

  data() {
    return {
      isOpen: false
    }
  },
  methods: {
   openMenu: function(){
     this.isOpen = !this.isOpen
   },
 },

}
</script>

<style lang="sass" scoped>
  .open
    top: 0
    opacity: 1
    transition: all 0.2s ease-in-out
  .close
    top: 100%
    opacity: 0
    transition: all 0.2s ease-in-out
    @media screen and (min-width: 760px)
      opacity: 1
  .spacer
    height: 81px
  .navbar
    font-family: 'Open Sans', sans-serif
    z-index: 1
    position: fixed
    width: 100%
    background: rgba(255,255,255, 1)
    border-bottom: 1px solid black
    padding: 10px 0
    .container
      width: 100%
      margin: 0 auto
      .brand
        float: left
        margin-left: 20px
        @media screen and (min-width: 790px)
          margin-left: 40px
        strong
          font-size: 30px
          line-height: 60px
          font-weight: 700
      .nav-toggle
        float: right
        line-height: 60px
        margin-right: 20px
        @media screen and (min-width: 790px)
          display: none
      .nav-menu
        width: 100%
        float: right
        position: absolute
        top: 81px
        background: rgba(255,255,255, 0.8)
        border-bottom: 1px solid black
        @media screen and (min-width: 790px)
          background: initial
          position: static
          margin-right: 40px
          display: block
          width: initial
          border: 0
        li
          @media screen and (min-width: 790px)
            display: inline-block
          a
            padding: 0 18px
            line-height: 60px
            display: block
            text-decoration: none
            color: black
            font-weight: 600
            color: #666
            transition: all 0.3s ease-in
            &:hover
              background: #999
              color: #fff

</style>
