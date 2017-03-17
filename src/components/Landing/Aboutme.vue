<template lang="html">
  <section class="about-me" >
    <div class="container" >
      <div class="inner clearfix" >
          <h1 >Hi, My name is Gang.</h1>
            <p id='aboutme'>
            A Chinese web developer Currently live in New York City.
            <br><br>
            In my free time, I like to look at beautiful stuff.
          </p>
          <div class="skillset" >
            <h1>My Skillset</h1>
            <ul v-for="skill of skills">
              <li>{{skill}}</li>

            </ul>
          </div>
          <div class="toolbox">
            <h1>My Toolbox</h1>
            <ul v-for="tool of toolbox">
              <li>{{tool}}</li>
            </ul>
          </div>
        </div>
      </div>
  </section>
</template>

<script>
export default {
  name: 'aboutme',
  data() {
    return {
      skills: ["HTML5","JavaScript","CSS3","Photoshop","PSD to HTML"],
      toolbox: [
        "HTML + CSS + JavaScript",
        "Atom",
        "Sublime Text 3",
        "Github",
        "Adobe Photoshop",
        "Vuejs",
        "Nodejs",
        "Express.js",
      ]
    }
  },
}
</script>

<style lang="sass" scoped>
  .about-me
    margin-top: 60px
    .container
      padding: 30px 20px

      position: relative
      overflow: hidden
      background: rgba(252,74,26, 0.6)
      &:after
        content: ' '
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        z-index: -1
        opacity: 0.6
        background: url('https://images.pexels.com/photos/1826/wood-nature-sunny-forest.jpg')
        background-position: center
        background-size: cover
      @media screen and (min-width: 760px)
        /*height: calc(100vh - 81px)*/
        padding: 120px
    .inner
      height: 100%
      color: #fff
      @media screen and (min-width: 1300px)
        width: 1280px
        margin: 0 auto
      h1
        font-weight: bold
        font-size: 44px
        padding: 10px 0
      p
        font-size: 22px
        padding: 32px 0
        line-height: 1.0

      .skillset, .toolbox
        margin: 10px 0
        li
          line-height: 1.2
        @media screen and (min-width: 600px)
          width: 50%
      .toolbox
        @media screen and (min-width:600px)
          float: right
      .skillset
        @media screen and (min-width: 600px)
          float: left
  .more-aboutme

    padding-top: 40px
    @media screen and (min-width: 1300px)
      width: 1280px
      margin: 0 auto
    button
      cursor: pointer
      padding: 20px
      font-size: 22px
      background: none
      border: 1px solid #fff
      color: #fff
      &:hover
        border: 1px solid #fff
        background: rgba(252,74,26, 0.6)

</style>
