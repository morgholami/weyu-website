<template>
  <div id="app" :class="{ 'homepage': $route.path == '/', 'light': $route.path == '/login' }">
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

<style lang="scss">
  #content {
    min-height: 750px;
  }
  #app {
    background-image: url('~assets/img/background.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    &.homepage {
      background-image: url('~assets/img/bg_image.jpg');
    }
    &.light {
      background-image: url('~assets/img/bg_light.jpg');
      color: black;
      .title, .subtitle {
        color: black;
      }
    }
  }
</style>
