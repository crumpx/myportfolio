<template lang="html">
  <content>
    <div class="login">
      <div class="container">
        <form @submit.prevent="login">
        <input type="email" name="email" value="" placeholder="abc@email.com" v-model="email">
        <input type="password" name="password" value="" placeholder="*****" v-model="password">
        <button type="submit" name="button" >Login</button>
        </form>
      </div>
    </div>
    <p>{{}}</p>
  </content>

</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        email: '',
        password: '',
        user: {},
      }
    },
    methods: {
      login: function(){
        let _this = this
        let email = this.email
        let password = this.password
        axios.post('http://localhost:3000/users/login',
        {username: email, password: password})
        .then(function(response){
          console.log(response)
          _this.user = response.data
        })
        .catch(function(error){
          console.log('err: ', error)
        })
      }
    }
  }
</script>

<style lang="sass" scoped>
  .login
    height: calc(100vh - 81px)
    background: url('https://images.pexels.com/photos/298872/pexels-photo-298872.jpeg')
    background-position: center
    background-size: cover
    .container
      width: 284px
      margin: 0 auto
      padding: 20px 0
      form
        position: absolute
        top: 50%
        transform: translateY(-50%)
        input, button
          text-align: center
          margin: 0 auto
          display: block
          margin-bottom: 10px
          font-size: 22px
          border-radius: 6px
          border: 0
          outline: 0
          padding: 6px 10px
        button
          font-size: 18px
          font-weight: 800
          color: #fff
          padding: 10px 20px
          background: rgba(0,0,0,0.4)
          cursor: pointer
          &:hover

            box-shadow: 1px 1px 12px 0 #555










</style>
