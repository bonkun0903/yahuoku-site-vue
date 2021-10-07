<template>
  <section class="home">
    <HomeHero class="sidebar-area"/>
  </section>
</template>
<script>
import HomeHero from '../parts/HomeHero.vue'

export default {
  components: {
    HomeHero
  }
}
</script>
<style lang="scss" scoped>
.home {
  padding-bottom: 50px;
}
</style>
