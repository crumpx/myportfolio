<template lang="html">
  <section class="my-skills ">
    <h1>What Can I do</h1>
    <div class="container">
      <div class="item">
        <div class="item-title bg-color-blue">
          <icon name='desktop' scale="1.5" class="icons"></icon>
          <icon name='laptop' scale="1.5" class="icons"></icon>
          <icon name='mobile' scale="1.5" class="icons"></icon>
          <icon name='hdd-o' scale="1.5" class="icons"></icon>
          <icon name='database' scale="1.5" class="icons"></icon>
          <h1>IT Services</h1>
        </div>
        <div class="item-desc">
          <p>I have experience in IT service field for more than 10 years.</p>
          <p>From personal computer system tune up, to server disaster recovery, I do it all.</p>
        </div>
      </div>
      <div class="item">
        <div class="item-title bg-color-green">
          <icon name='html5' scale="1.5" class="icons"></icon>
          <icon name='css3' scale="1.5" class="icons"></icon>
          <h1>Web Design</h1>
        </div>
        <div class="item-desc">
          <p>Creating Responsive, modern, beautiful and content rich, SEO optimized website.</p><p>
          The trending single page webpage design makes evertying interesting.</p>
        </div>
      </div>
      <div class="item">
        <div class="item-title bg-color-purple">
          <icon name='code' scale="1.5" class="icons"></icon>
          <h1>Web Apps</h1>
        </div>
        <div class="item-desc">
          <p>Reactive web application using the most advanced technologies.</p><p>I use Javascript, MongoDB, Vuejs and
            many other modern frameworks to build apps that run everywhere.
          </p>
        </div>
      </div>
      <div class="item">
        <div class="item-title bg-color-orange">
          <icon name='cart-arrow-down' scale="1.5" class="icons"></icon>

          <h1>Website SEO</h1>
        </div>
        <div class="item-desc">
          <p>Search Engine Optimization is critical.</p><p>
            Correctly optimized web site or web page get high up in Google search results,
            and more exposure means more vistors.
          </p>
        </div>
      </div>
</div>
  </section>
</template>

<script>
import 'vue-awesome/icons/desktop'
import 'vue-awesome/icons/mobile'
import 'vue-awesome/icons/laptop'
import 'vue-awesome/icons/hdd-o'
import 'vue-awesome/icons/database'
import 'vue-awesome/icons/html5'
import 'vue-awesome/icons/css3'
import 'vue-awesome/icons/code'
import 'vue-awesome/icons/cart-arrow-down'

import Icon from 'vue-awesome/components/Icon'

export default {
  name: 'skills',
  components:{
    Icon
  }
}
</script>

<style lang="sass" scoped>
  .icons
    color: white


  .bg-color-green
    background: rgba(0,214,90,0.6)
  .bg-color-blue
    background: rgba(48,94,153,0.6)
  .bg-color-purple
    background: rgba(197,112,219, 0.6)
  .bg-color-orange
    background: rgba(252,74,26, 0.6)

  .my-skills
    padding: 40px 0
    position: relative
    margin: 0 auto
    // display: flex
    // flex-wrap: wrap

    max-width: 960px
    h1
      font-weight: bold
      font-size: 44px
      color: #fff
    .container
      width: 100%
      display: flex
      flex-wrap: wrap
      justify-content: space-between
      &::after
        content: ''
        flex: 0 1 240px
      .item
        border-radius: 5px
        width: 240px
        margin: 20px 20px
        p
          margin: 10px 0
          line-height: 20px
          &:first-letter
            font-weight: bold
            font-size: 150%

        .item-desc
          padding: 10px 20px 20px 20px
          background: #fff
          border-radius: 0 0 5px 5px
          strong
            font-size: 16px
            margin: 10px 0
        .item-title
          position: relative
          border-radius: 4px 4px 0 0
          padding: 10px
          overflow: hidden
          img
            position: absolute
            top: 0
            left: 0
            width: 100%
            height: 100%
            z-index: -1
          i
            color: #fff
            font-size: 120%
            margin-bottom: 12px
          h1
            color: #fff
            font-size: 34px
            margin-bottom: 10px
            font-weight: bold
        @media screen and (min-width: 860px)
          margin: 20px 20px

</style>
