<template lang="html">
  <section>
    <div class="hero">
      <carousel :perPage="1" :autoplay="true">
        <template v-for="item of test">
          <slide>
            <div class="img-box" :style="{background: 'url('+item.bg+')', backgroundSize: 'cover', backgroundPosition: 'center'}" >
              <div class="caption"><h2 v-text="item.caption"></h2></div>
                <div class="scroll-down animated infinite bounce">
                  <strong>scroll down</strong>
                  <img src="../../assets/mouse.svg" alt="">
                  <i class="arraw">⇓</i>
                </div>
            </div>
          </slide>
        </template>
      </carousel>
    </div>
  </section>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
export default {
  name: 'mycarousel',
  components: {
    Carousel,
    Slide
  },
  data(){
    return {
      test: [
        {caption: 'I Love Nature', bg: 'https://static.pexels.com/photos/345522/pexels-photo-345522.jpeg'},
        {caption: 'I Am A Cat Person', bg: 'https://images.pexels.com/photos/172/animal-pet-close-up-view-hairs.jpg'},
        {caption: 'I Am A Self Learner', bg: 'https://images.pexels.com/photos/85583/books-85583.jpeg'},
        {caption: 'I Love Coding', bg: 'https://images.pexels.com/photos/270557/pexels-photo-270557.jpeg'},
      ]
    }
  },
}
</script>

<style lang="sass" scoped>
  .hero
    text-align: center
    width: 100vw
    .img-box
      height: calc(100vh - 81px)
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
          font-weight: 400
          font-size: 3em
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
