<template lang="html">
  <section class="my-skills ">
    <h1>What Can I do</h1>
    <div class="container">
      <div class="item">
        <div class="item-title bg-color-blue">
          <i class="fa fa-desktop" aria-hidden="true"></i>
          <i class="fa fa-laptop" aria-hidden="true"></i>
          <i class="fa fa-mobile" aria-hidden="true"></i>
          <i class="fa fa-hdd-o" aria-hidden="true"></i>
          <i class="fa fa-database" aria-hidden="true"></i>
          <img src="../../assets/title-bg-skill-1.png" alt="web design skill">
          <h3>IT Services</h3>
        </div>
        <div class="item-desc">
          <p>I have experience in IT service field for more than 10 years.</p>
          <p>From personal computer system tune up, to server disaster recovery, I do it all.</p>
          <p></p>
        </div>
      </div>
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
      justify-content: space-around
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
          h3
            color: #fff
            font-size: 34px
            margin-bottom: 10px
            font-weight: bold
        @media screen and (min-width: 860px)
          margin: 20px 20px

</style>
