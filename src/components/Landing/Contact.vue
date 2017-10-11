  <template lang="html">
    <section class='contact'>
        <div class="container">
          <h1>Get in contact?</h1>
            <h4>Use the form below to reach out to me. Once I receive it, I will give reply you as soon as I can.</h4>
            <form method="POST" action="http://formspree.io/crumpx@gmail.com">
              <input type="email" name="email" placeholder="Your email"><br>
              <textarea name="message" placeholder="Your message to me"></textarea>
              <button type="submit">Send</button>
            </form>
        </div>
    </section>

  </template>

  <script>
  export default {
    name: 'contact',
    data() {
      return {

      }
    }
  }
  </script>

  <style lang="sass">
    .contact
      padding: 30px 20px
      position: relative
      overflow: hidden
      background: rgba(0,0,0, 0.7)
      &:after
        content: ' '
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        z-index: -1
        opacity: 0.6
        background: url('../../assets/aboutme/bg.jpg')
        background-position: center
        background-size: cover
        // @media screen and (min-width: 760px)
      .container
        max-width: 920px
        color: #fff
        margin: 0 auto
        padding: 20px 20px
        h1, h2, h4
          font-weight: bold
          font-size: 44px
          padding: 10px 0
        h2
          font-size: 28px
        h4
          font-size: 22px
          font-weight: normal
        p
          font-size: 22px
          padding: 32px 0
          line-height: 1.0
        form
          width: 90%
          margin: 20px 0px
        input,textarea
          font-size: 1.5em
          width: 100%
          margin-bottom: 0.8em
          padding: 20px 0px 20px 20px
        textarea
          overflow: auto
          height: 200px
          resize: none
        button
          font-size: 22px
          background: white
          padding: 20px
          border: 3px solid rgba(0,214,90,0.6)
        // @media screen and (min-width: 1300px)
        //   // width: 960px
        //



  </style>
