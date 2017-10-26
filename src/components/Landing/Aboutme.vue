<template lang="html">
  <section class="about-me">
    <div class="container" >
          <h1 >Hi, My name is Gang.</h1>
            <p>
            An IT professional and web developer currently live in Orlando, Florida, the sunshine state.
            <br><br>
            In my free time, I like to look at beautiful stuff.
          </p>
          <div class="social">
            <a href="tencent://message/?uin=316155"><icon name='qq' scale="1.5" class="icons"></icon></a>
            <a href="https://github.com/crumpx"><icon name='github-alt' scale="1.5" class="icons"></icon></a>
            <a href="https://www.freecodecamp.com/crumpx"><icon name='free-code-camp' scale="1.5" class="icons"></icon></a>
            <a href="https://www.linkedin.com/in/gang-zhao-198201"><icon name='linkedin' scale="1.5" class="icons"></icon></a>
            <a class='resume' href="/static/Gang_Zhao_resume.pdf" target="_blank">Resume</i></a>

          </div>
          <div class="skillset-container">
          <div class="skillset" >
            <h2>My Skillset</h2>
            <h4>IT Service</h4>
            <ul v-for="itservice of itservices">
              <li>{{itservice}}</li>
            </ul>
            <h4>Web Development</h4>
            <ul v-for="skill of skills">
              <li>{{skill}}</li>

            </ul>
          </div>
          <div class="toolbox">
            <h2>My Toolbox</h2>
            <h4>Text Editors</h4>
            <ul v-for="texteditor of texteditors">
              <li>{{texteditor}}</li>
            </ul>
            <h4>Graphics Tools</h4>
            <ul v-for="graphic of graphics">
              <li>{{graphic}}</li>
            </ul>
            <h4>IDEs</h4>
            <ul v-for="ide of ides">
              <li>{{ide}}</li>
            </ul>
          </div>
          </div>
        </div>
        <skills></skills>


  </section>
</template>

<script>
import 'vue-awesome/icons/qq'
import 'vue-awesome/icons/github-alt'
import 'vue-awesome/icons/free-code-camp'
import 'vue-awesome/icons/linkedin'

import Icon from 'vue-awesome/components/Icon'
import Skills from '@/components/Landing/Skills'
export default {
  name: 'aboutme',
  components: {
    Skills, Icon
  },
  data() {
    return {
      itservices:["Computer Repair", "Smartphone Repair", "Home and Office Networking","Data Recovery",
    "Disaster Recovery"],
      skills: [,"HTML5","JavaScript","CSS3","Photoshop","PSD to HTML", "Vuejs","Nodejs",
              "Express.js","Front/Backend development"],
      texteditors: [
        "Atom",
        "Sublime Text 3",

      ],
      graphics: [
        "Adobe Photoshop",
        "Adobe Illustrator"
      ],
      ides: [
        "JetBrains WebStorm",

      ],
    }
  },
}
</script>

<style lang="sass" scoped>
  .about-me
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
      background: url('../../assets/aboutme/bg.jpg')
      background-position: center
      background-size: cover
    .container
      color: #fff
      text-align: left
      max-width: 960px
      margin: 0 auto

      h1, h2, h4
        font-weight: bold
        padding: 10px 0
      h1
        font-size: 42px
      h2
        font-size: 32px
      h4
        font-size: 22px
        text-decoration: underline
      p
        font-size: 22px
        padding: 32px 0
        line-height: 1.0
      .social
        display: flex
        padding-bottom: 20px
        a
          text-decoration: none
          color: #fff
          margin-right: 10px
          &:first-child
            margin-right: 20px
        i
          font-size: 120%
          padding-right: 12px
        .resume
          padding: 5px 18px
          // border: 1px white solid
          border-radius: 6px
          background: rgba(0,191,168,0.5)
          &:hover
            background: rgba(0,191,168,1)

      .skillset-container
        display: flex
        justify-content: space-between
        flex-wrap: wrap
        // padding-left: 60px
        padding-right: 60px
        .skillset, .toolbox
          margin: 10px 0
          li
            line-height: 1.2
            padding-left: 10px

</style>
