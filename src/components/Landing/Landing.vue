<template lang="html">
  <content>
<Carousel></Carousel>
<!-- <skills></skills> -->
<aboutme></aboutme>
</content>
</template>

<script>
import Carousel from '@/components/Landing/Carousel'
import Aboutme from '@/components/Landing/Aboutme'
import Skills from '@/components/Landing/Skills'

export default {
  components: {
    Carousel,
    Skills,
    Aboutme
  }
}
</script>

<style lang="css">
</style>
