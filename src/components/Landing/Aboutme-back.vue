<template lang="html">
  <section class="about-me">
    <div class="container">
      <div class="inner clearfix">
        <div class="picture">
          <img src="https://avatars.githubusercontent.com/u/4764314?v=3" alt="Gang Zhao's Picture">
        </div>
        <div class="desc">
          <h1>About Gang</h1>
          <h4>Self-motivated and passionate about lifes.</h4>
          <p>Hi, My name is Gang. <br><br>
            Currently live in New York City and worked as a computer and phone repair technician.
            <br><br>
            Web design and programming has always interest me. In my free time I like to practice
            my programming skills.

          </p>
        </div>

      </div>
    </div>

  </section>
</template>

<script>

export default {
  name: 'aboutme',
}
</script>

<style lang="sass" scoped>
  .about-me
    // margin-bottom: 80px
    .container
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
        padding: 80px
      .inner
        padding: 30px 20px
        height: 100%
        color: #fff
        text-align: center
        .picture
          text-align: center
          @media screen and (min-width: 760px)
            width: 40%
            float: left
            margin: 0 auto
            /*text-align: right*/
            margin-right: 40px
          img
            width: 150px
            height: 150px
            border-radius: 100%
            border: 4px solid #fff
            @media screen and (min-width: 760px)
              width: 200px
              height: 200px
        .desc
          text-align: left
          h1
            font-weight: bold
            font-size: 44px
            padding: 10px 0
          h4
            font-size: 22px
          p
            font-size: 18px
            padding: 32px 0
            line-height: 1.4
          @media screen and (min-width: 760px)
            float: left
            width: 50%
</style>
