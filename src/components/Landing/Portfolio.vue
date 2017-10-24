<template lang="html">
    <section class='portfolio'>

    <div class="container">
      <h1>Here are some of the things I made</h1>
      <div class="portfolio-container">


      <template v-for="project of projects">

      <div class="project">
        <div class="project-img">
          <img v-bind:src="project.pic" alt="">
        </div>
        <div class="project-desc">
          <h3>{{project.name}}</h3>
          <p>{{project.desc}}</p>
          </div>
        <div class="project-uses">
          <ul>
            <template v-for="skill of project.skills">
            <li>{{skill}}</li>
            </template>
          </ul>
        </div>
        <div class="project-links">
          <a :href="project.demo">Demo</a>
          <a :href="project.source">Source Code</a>
        </div>
      </div>

  </template>
</div>
    </div>

  </section>

</template>

<script>
export default {
  name: 'portfolio',
  data() {
    return {
      projects: [
        {name: 'phonerepairfl.com',
          pic: require('../../assets/portfolio/website-phonerepair.png'),
          desc: 'A responsive landing website made for a computer and phone repair business in FL.',
          skills: ['HTML', 'Sass', 'JavaScript', 'JQuery', "Vue", "Github Pages"],
          demo: 'http://phonerepairfl.com/',
        source: 'http://phonerepairfl.com/' },
        {name: 'Casesolved.us',
          pic: require('../../assets/portfolio/website-casesolved.png'),
          desc: 'A responsive landing website made for a computer and phone repair business.',
          skills: ['HTML', 'Sass', 'JavaScript', 'JQuery', "Jekyll Engine", "Github Pages"],
          demo: 'http://casesolved.us/',
        source: 'http://casesolved.us/' },

        {name: 'Pomodoro Clock',
          pic: require('../../assets/portfolio/pomodoro-clock.png'),
          desc: 'Applying Pomodoro technique will boost your efficiency at work.',
          skills: ['HTML', 'CSS', 'JavaScript', 'JQuery'],
          demo: 'https://crumpx.github.io/pomodoro/',
        source: 'https://github.com/crumpx/pomodoro/' },
        {name: 'Calculator',
          pic: require('../../assets/portfolio/calculator.png'),
          desc: 'A simple calculator.',
          skills: ['HTML', 'CSS', 'JavaScript', 'JQuery'],
          demo: 'https://crumpx.github.io/jscalculator/',
        source: 'https://github.com/crumpx/jscalculator/' },
        {name: 'Twitch Streamer',
          pic: require('../../assets/portfolio/twitch-streamers.png'),
          desc: 'Get notified when your favorite streamer is online!',
          skills: ['HTML', 'CSS', 'JavaScript', 'JQuery', 'ajax'],
          demo: 'https://crumpx.github.io/twitchstreamers/',
        source: 'https://github.com/crumpx/twitchstreamers/' },
        {name: 'Simple Weather',
          pic: require('../../assets/portfolio/weather.png'),
          desc: 'Just to show your local weather.',
          skills: ['HTML', 'CSS', 'JavaScript', 'JQuery', 'ajax'],
          demo: 'http://codepen.io/crumpx/pen/gwOxGr',
        source: 'http://codepen.io/crumpx/pen/gwOxGr' },
        {name: 'Simple Poll',
          pic: require('../../assets/portfolio/simple-poll.png'),
          desc: 'It lets you create poll and you can share it to everyone else.',
          skills: ['HTML', 'Sass', 'Vue.js', 'Node.js', "Express.js", "MongoDB"],
          demo: 'https://crumpx.github.io/fccnewvote/',
        source: 'https://github.com/crumpx/fccnewvote/' },


      ],

    }
  }
}
</script>

<style lang="sass" scoped>

  .portfolio
    padding: 40px 20px
    position: relative
    overflow: hidden
    background: rgba(0,54,102, 0.5)
    h1
      font-weight: bold
      font-size: 44px
      padding: 0 0 44px 0
      color: #fff
    &:after
      content: ' '
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      z-index: -1
      opacity: 0.6
      background: url('../../assets/portfolio/bg.jpg')
      background-position: center
      background-size: cover
    .container
      max-width: 960px
      margin: 0 auto
      .portfolio-container
        display: flex
        flex-wrap: wrap
        align-items: start
        justify-content: space-around
        align-content: flex-start


        .project
          // margin: 20px 20px
          margin-bottom: 30px
          background: #fff
          transition: 0.4s
          padding-bottom: 20px
          border-radius: 6px
          box-shadow: 0 0 6px 0 #000
          display: flex
          flex-direction: column
          width: 280px
          align-self: flex-start

          .project-img
            margin: 0 auto
            height: 160px
            overflow: hidden
            border-radius: 5px 5px 0 0
            img
              text-align: center
              width: 260px
              border-bottom: 1px solid black
          .project-desc
            h3, p
              font-size: 25px
              margin: 20px
            h3
              font-weight: 800
              text-align: center
              line-height: 120%
            p
              font-size: 1.2em
          .project-uses
            ul
              margin: 20px
              li
                margin-bottom: 12px
                padding-bottom: 5px
                border-bottom: 1px solid #ccc
          .project-links
            margin: 0 20px
            a
              cursor: pointer
              font-size: 80%
              text-decoration: none
              padding-right: 20px
              color: #333
              &:hover
                color: #bbf
          &:hover
            box-shadow: 0px 0px 40px 0 #000


</style>
