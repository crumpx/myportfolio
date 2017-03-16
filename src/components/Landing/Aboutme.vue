<template lang="html">
  <section class="about-me">
    <div class="container">
      <div class="inner">
        <img src="https://avatars.githubusercontent.com/u/4764314?v=3" alt="Gang Zhao's Picture">
        <h1>Hi, My name is Gang</h1>
        <h4>I am a web developer.</h4>
        <p>I currently live in NYC.</p>
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
    // height: 60%
    margin-bottom: 80px
    .container
      height: 100%
      position: relative
      overflow: hidden
      background: rgba(0,214,90,0.6)
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
      .inner
        padding: 40px
        width: 80%
        margin: 0 auto
        text-align: center
        img
          width: 150px
          height: auto
          border-radius: 100%
          border: 4px solid #fff
          @media screen





</style>
