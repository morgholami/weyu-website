<template>
  <div id="app">
    <nav-bar/>
    <div id="content">
      <Nuxt/>
    </div>
    <foot/>
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar';
  import Foot from '@/components/Footer';


  export default {
    components: {
      NavBar,
      Foot
    },

    data () {
      return {
      }
    },

    computed: {
    },

    methods: {
    }
  };
</script>

<style lang="scss" scoped>
#content {
  min-height: 750px;
}
  #app {
    background-image: url('~assets/img/bg_image.jpg');
    background-size: cover;
    background-repeat: no-repeat;
  }
</style>
