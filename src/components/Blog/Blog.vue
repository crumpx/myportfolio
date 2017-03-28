<template lang="html">
  <section>
    <article class="blog" v-if="!isEditing">
        <h1>{{ blg.title }}</h1>
        <h5>{{blg.subtitle}}</h5>
        <template v-for="tag of blg.tag">
          <a href="">{{tag}}</a>
        </template>
        <strong class="right" v-if="blg.author">By: {{ blg.author.fullname }}</strong>
        <strong class="right" v-else>By: Unknown</strong>
        <span class="right">on {{blg.createdAt | formatDate}}</span>
        <a href="#">share</a>
        <a @click="toggleEditing">edit</a>
        <p v-html="blg.content"></p>
        <button><i class="fa fa-thumbs-up" aria-hidden="true"></i><span>200</span></button>
    </article>
    <template v-if="isEditing">
      <editor v-bind:blg="blg" v-bind:mode='mode'></editor>
      <button class="cancel" @click="onCancel">Cancel</button>
    </template>

  </section>
</template>

<script>
import Editor from './Editor'
export default {
  props: ['blg'],
  data() {
    return {
      isEditing: false,
      mode: 'editing'
    }
  },
  methods: {
    toggleEditing() {
      this.org_title = this.blg.title
      this.org_subtitle = this.blg.subtitle
      this.org_content = this.blg.content
      this.isEditing = !this.isEditing
    },
    onCancel(){
      this.isEditing = !this.isEditing
      this.blg.title = this.org_title
      this.blg.subtitle = this.org_subtitle
      this.blg.content = this.org_content
    }
  },
  filters: {
    formatDate: date => {
      let aDate = new Date(date)
      let month = aDate.getMonth() + 1
      let day = aDate.getDay()
      let year = aDate.getFullYear()
      let hour = aDate.getHours()
      let minutes = aDate.getMinutes() < 10 ? '0'+aDate.getMinutes() : aDate.getMinutes()
      return month + '/' + day + '/' + year + ' ' + hour + ':' + minutes
    }
  },
  components: {
    Editor
  },
}

</script>

<style lang="sass" scoped>
  .right
    text-align: right
    display: block
    line-height: 1.5
  .cancel, save
    border: 0
    margin-top: 10px
    font-size: 18px
    font-weight: 800
    color: #fff
    padding: 10px 20px
    background: rgba(255,6,6,.7)
    cursor: pointer
    &:hover
      box-shadow: 1px 1px 12px 0 #555

  .blog
    a
      text-decoration: none
      color: #666
      &:hover
        text-decoration: underline
        color: #000
    padding: 20px
    h1
      font-size: 48px
      font-weight: 800
      color: #777
      word-wrap: break-word

    h5
      font-style: italic
      font-size: 24px
      color: #555
      margin: 12px 0 20px 0

    strong
      display: block
    p
      margin: 10px 0
      font-size: 18px
      line-height: 1.5em
      &::first-letter
        font-size: 24px
        font-weight: 700
    button
      border: none
      font-size: 22px
      margin-right: 6px
      cursor: pointer
      span
        margin-left: 6px



</style>
