<template lang="html">
  <content>
    <div class="hero">
      <carousel :perPage="1" :autoplay="true" :navigationEnabled="true">
        <template v-for="item of test">
          <slide>
            <div class="img-box" :style="{background: 'url('+item.bg+')', backgroundSize: 'cover', backgroundPosition: 'center'}" >
              <div class="caption"><h2 v-text="item.caption"></h2></div>
                <div class="scroll-down animated infinite bounce">
                  <img src="https://freeiconshop.com/wp-content/uploads/edd/mouse-outline.png" alt="">
                  <i class="arraw">⇓</i>
                </div>
            </div>
          </slide>
        </template>
      </carousel>

    </div>
    <section class="about-me">
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere ad sequi magni exercitationem vitae reprehenderit, assumenda in perferendis officiis esse quas, placeat, ullam ipsam necessitatibus repellendus minus aspernatur unde veniam.
      </div>
    </section>

  </content>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
export default {
  name: 'landing',
  components: {
    Carousel,
    Slide
  },
  data(){
    return {
      test: [
        {caption: 'I Love Nature', bg: 'https://images.pexels.com/photos/1826/wood-nature-sunny-forest.jpg'},
        {caption: 'I Am A Cat Person', bg: 'https://images.pexels.com/photos/172/animal-pet-close-up-view-hairs.jpg'},
        {caption: 'I Am A Self Learner', bg: 'https://images.pexels.com/photos/85583/books-85583.jpeg'},
        {caption: 'I Love Coding', bg: 'https://images.pexels.com/photos/270557/pexels-photo-270557.jpeg'},
        // {caption: 'This Site Is Powered By Vue.js', bg: 'https://cdn.auth0.com/blog/vuejs/vue-logo.png'},
      ]
    }
  },
}
</script>

<style lang="sass" scoped>
  // .bounce
  //   transition-duration: 2s
  .hero
    text-align: center
    height: 100vh
    // width: 100vw
    .img-box
      height: calc(100vh - 120px)
      position: relative
      .caption
        padding: 50px
        background: rgba(0,0,0,0.3)
        position: relative
        top: 50%
        left: 50%

        transform: translate(-50%, -50%)
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
        img
          margin: 0 auto
          width: 30px
          height: 30px

  .about-me
    margin: 20px

</style>
