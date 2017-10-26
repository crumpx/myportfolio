  <template lang="html">
    <section>
      <div class="hero">
        <carousel :perPage="1" :autoplay="true" :loop="true">
          <template v-for="item of test">
            <slide>
              <div class="img-box" :style="{backgroundImage: 'url('+item.bg+')', backgroundSize: 'cover', backgroundPosition: 'center'}" >
                <div class="caption"><h2 v-text="item.caption"></h2></div>
      
              </div>
            </slide>
          </template>
        </carousel>
      </div>
    </section>
  </template>

  <script>
  import { Carousel, Slide } from 'vue-carousel'
  import forest from '../../assets/carosuel/forest.jpeg'
  import cat from '../../assets/carosuel/cat.jpg'
  import library from '../../assets/carosuel/library.jpeg'
  import code from '../../assets/carosuel/code.jpeg'
  export default {
    name: 'mycarousel',
    components: {
      Carousel,
      Slide
    },
    data(){
      return {
        test: [
          {caption: 'I Love Nature', bg: forest},
          {caption: 'I Am A Cat Person', bg: cat},
          {caption: 'I Am A Self Learner', bg: library },
          {caption: 'I Love Coding', bg: code},
        ],

      }
    },
  }
  </script>

  <style lang="sass" scoped>
    .hero
      text-align: center
      width: 100vw
      .img-box
        height: calc(100vh - 151px)
        position: relative
        .caption
          padding: 50px
          background: rgba(0,0,0,0.6)
          position: relative
          top: 50%
          left: 50%
          transform: translate(-50%, -50%)
          @media screen and (min-width: 760px)
            padding: 80px
          h2
            font-family: 'Open Sans', sans-serif
            font-weight: 700
            font-size: 4em
            color: #fff
            line-height: 120%
        .scroll-down
          display: block
          position: absolute
          bottom: 10px
          left: 25%
          right: 25%
          color: white
          strong
            text-transform: uppercase
            font-weight: 700
            display: block
            padding-bottom: 10px
          img
            margin: 0 auto
            width: 30px
            height: 30px

  </style>
