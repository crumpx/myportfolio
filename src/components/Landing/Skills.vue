<template lang="html">
  <section class="my-skills ">
    <div class="container clearfix">
      <h1>What Can I do</h1>
      <div class="item">
        <div class="item-title bg-color-green">
          <i class="fa fa-html5" aria-hidden="true"></i>
          <i class="fa fa-css3" aria-hidden="true"></i>
          <img src="../../assets/title-bg-skill-1.png" alt="web design skill">
          <h3>Web Design</h3>
        </div>
        <div class="item-desc">
          <p>Creating Responsive, modern, beautiful and content rich, SEO optimized website.</p><p>
          The trending single page webpage design makes evertying interesting.</p>
        </div>
      </div>
      <div class="item">
        <div class="item-title bg-color-purple">
          <i class="fa fa-code" aria-hidden="true"></i>
          <img src="../../assets/title-bg-skill-2.png" alt="web apps skill">
          <h3>Web Apps</h3>
        </div>
        <div class="item-desc">
          <p>Reactive web application using the most advanced technologies.</p><p>I use Javascript, MongoDB, Vuejs and
            many other modern frameworks to build apps that run everywhere.
          </p>
        </div>
      </div>
      <div class="item">
        <div class="item-title bg-color-orange">
          <i class="fa fa-cart-arrow-down" aria-hidden="true"></i>
          <img src="../../assets/title-bg-skill-3.png" alt="seo skill">
          <h3>Website SEO</h3>
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

export default {
  name: 'skills',
}
</script>

<style lang="sass" scoped>
  .left
    float: left

  .bg-color-green
    background: rgba(0,214,90,0.6)
  .bg-color-purple
    background: rgba(197,112,219, 0.6)
  .bg-color-orange
    background: rgba(252,74,26, 0.6)

  .my-skills
    .container
      padding: 80px 0
      position: relative
      overflow: hidden
      margin: 0 auto
      max-width: 960px
      &:after
        content: ' '
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        z-index: -1
        opacity: 0.6
        background: url('https://images.pexels.com/photos/273238/pexels-photo-273238.jpeg')
        background-position: center
        background-size: cover
      h1
        font-weight: bold
        font-size: 44px
        padding: 0 0 40px 0
        color: #fff

      .item
        box-shadow: 1px 1px 10px 0px rgba(0,0,0,0.5)
        border-radius: 4px
        width: 240px
        margin: 0 auto
        margin-bottom: 40px
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
            opacity: 1
            z-index: -1
          i
            color: #fff
            font-size: 120%
            margin-bottom: 12px
          h3
            color: #fff
            font-size: 34px
            margin-bottom: 10px
            font-weight: bold
        @media screen and (min-width: 860px)
          float: left
          margin: 0px 20px

          &:last-child
            margin-right: 0px


</style>
