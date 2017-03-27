<template lang="html">
  <content>
<Carousel></Carousel>
<aboutme  id='aboutme'></aboutme>
<portfolio id='portfolio'></portfolio>

</content>
</template>

<script>
import Carousel from '@/components/Landing/Carousel'
import Aboutme from '@/components/Landing/Aboutme'
import Portfolio from '@/components/Landing/Portfolio'


export default {
  components: {
    Carousel,
    Aboutme,
    Portfolio,
  }
}
</script>

<style lang="css">
</style>
