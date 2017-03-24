<template lang="html">
  <section class="about-me">
    <div class="container" >
      <div class="inner clearfix" >
          <h1 >Hi, My name is Gang.</h1>
            <p >
            A Chinese web developer currently live in New York City.
            <br><br>
            In my free time, I like to look at beautiful stuff.
          </p>
          <div class="social">
            <a href="tencent://message/?uin=316155"><i class="fa fa-qq" aria-hidden="true"></i></a>
            <a href="https://github.com/crumpx"><i class="fa fa-github-alt" aria-hidden="true"></i></a>
            <a href="https://www.freecodecamp.com/crumpx"><i class="fa fa-free-code-camp" aria-hidden="true"></i></a>
            <a href="https://www.linkedin.com/in/gang-zhao-198201"><i class="fa fa-linkedin" aria-hidden="true"></i></a>

          </div>
          <div class="skillset" >
            <h2>My Skillset</h2>
            <ul v-for="skill of skills">
              <li>{{skill}}</li>

            </ul>
          </div>
          <div class="toolbox">
            <h2>My Toolbox</h2>
            <ul v-for="tool of toolbox">
              <li>{{tool}}</li>
            </ul>
          </div>
        </div>
        <skills></skills>
      </div>

  </section>
</template>

<script>
import Skills from '@/components/Landing/Skills'
export default {
  name: 'aboutme',
  components: {
    Skills
  },
  data() {
    return {
      skills: ["HTML5","JavaScript","CSS3","Photoshop","PSD to HTML", "Vuejs","Nodejs",
              "Express.js","Front/Backend development"],
      toolbox: [
        "Atom",
        "Sublime Text 3",
        "Adobe Photoshop",
        "Adobe Illustrator"

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
      background: rgba(0,0,0, 0.7)
      &:after
        content: ' '
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        z-index: -1
        opacity: 0.6
        background: url('https://images.pexels.com/photos/237997/pexels-photo-237997.jpeg')
        background-position: center
        background-size: cover
      @media screen and (min-width: 760px)
        padding: 120px
    .inner
      height: 100%
      color: #fff
      @media screen and (min-width: 1300px)
        width: 960px
        margin: 0 auto
      h1, h2
        font-weight: bold
        font-size: 44px
        padding: 10px 0
      h2
        font-size: 28px
      p
        font-size: 22px
        padding: 32px 0
        line-height: 1.0
      .social
        padding-bottom: 20px
        a
          text-decoration: none
          color: #fff
          &:first-child
            margin-right: 20px
        i
          font-size: 120%
          padding-right: 12px

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

</style>
