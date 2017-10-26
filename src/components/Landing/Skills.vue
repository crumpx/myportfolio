<template lang="html">
  <section class="my-skills ">
    <h1>What Can I do</h1>
    <div class="container">
      <template v-for="skill of myskills">
          <div class="item">
            <div class="item-title" :class="skill.title_bg">
              <template v-for="icon of skill.icons">
                <icon :name='icon' scale='1.5' class='icons'></icon>
              </template>
              <h1>{{skill.title}}</h1>
            </div>
            <p v-for='desc of skill.desctiptions'>{{desc}}</p>
          </div>
      </template>

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
  data (){
    return {
      myskills: [
        {
          title_bg: 'bg-color-blue',
          icons: ['desktop','laptop','mobile','hdd-o','database'],
          title: 'IT Services',
          desctiptions: ['I have experience in IT service field for more than 10 years.',
          'From personal computer system tune up, to server disaster recovery, I do it all.']
        },
        {
          title_bg: 'bg-color-green',
          icons: ['html5','css3'],
          title: 'Web Design',
          desctiptions: ['Creating Responsive, modern, beautiful and content rich, SEO optimized website.',
          'The trending single page webpage design makes evertying interesting.']
        },
        {
          title_bg: 'bg-color-purple',
          icons: ['code'],
          title: 'Web Apps',
          desctiptions: ['Reactive web application using the most advanced technologies.',
          'I use Javascript, MongoDB, Vuejs and many other modern frameworks to build apps that run everywhere.']
        },
        {
          title_bg: 'bg-color-orange',
          icons: ['cart-arrow-down'],
          title: 'Website SEO',
          desctiptions: ['Search Engine Optimization is critical.',
          'Correctly optimized web site or web page get high up in Google search results, and more exposure means more vistors.']
        },

      ],
    }
  },
  components:{
    Icon
  }
}
</script>

<style lang="sass" scoped>
  .icons
    color: white
    padding-right: 10px

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
        width: 240px
        margin: 20px 20px
        .item-title
          padding: 10px
          overflow: hidden
          border-radius: 10px 10px 0 0
          h1
            color: #fff
            font-size: 34px
        p
          padding: 10px 20px 20px 20px
          background: #fff
          line-height: 20px
          &:first-letter
            font-weight: bold
            font-size: 150%
          &:last-child
            border-radius: 0 0 10px 10px
        @media screen and (min-width: 860px)
          margin: 20px 20px

</style>
