<template lang="html">
  <content>
<Carousel></Carousel>
<aboutme  id='aboutme'></aboutme>
<portfolio id='portfolio'></portfolio>
<contact id='contact'></contact>

</content>
</template>

<script>
import Carousel from '@/components/Landing/Carousel'
import Aboutme from '@/components/Landing/Aboutme'
import Portfolio from '@/components/Landing/Portfolio'
import Contact from '@/components/Landing/Contact'



export default {
  components: {
    Carousel,
    Aboutme,
    Portfolio,
    Contact,
  }
}
</script>

<style lang="css">
</style>
