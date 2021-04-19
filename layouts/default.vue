<template>
  <div id="app" :class="{ 'homepage': $route.path == '/', 'light': $route.path == '/login' }">
    <nav-bar/>
    <div id="content">
      <Nuxt/>
    </div>
<!--    <foot/>-->
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
    min-height: calc(100vh - 73px);
  }
  @keyframes opacity {
    0%{opacity: 0}
    100%{opacity: 1}
  }
  @keyframes opacity-pulse {
    0%{opacity: 0}
    50%{opacity: 1}
    100%{opacity: 0}
  }
  @keyframes gradients {
    0%   {background-position: 0 0;}
    25% {background-position: 50% 0;}
    50% {background-position: 90% 0;}
    60% {background-position: 60%;}
    75% {background-position: 40%;}
    100%  {background-position: 0 0;}
  }
  #app {
    background-image: url('~assets/img/background.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    /*background: #210042;*/
    position: relative;
    $pp-purple: #FF0031;
    $pp-blue: #210042;
    $pp-ltblue: #1CECF3;
    overflow:hidden;
    $sp-yellow: #DE3AC7;
    &:before-changing-bg {
      content: "";
      position: absolute;
      width:100%;
      height:100%;
      top:0;
      left: 0;
      opacity: 0.3;
      align-items: center;
      background-image: linear-gradient(to right, $pp-blue,$pp-ltblue,$sp-yellow,$pp-purple,$pp-blue);
      background-size: 600%;
      background-position: 0 0;
      box-shadow: inset 0 0 5em rgba(0,0,0,.5);
      display: flex;
      height: 100%;
      justify-content: center;
      /* Animation */
      animation-duration: 20s;
      animation-iteration-count: infinite;
      animation-name: gradients;
    }
    &.homepage:before {
      content: "";
      position: absolute;
      width:100%;
      height:100%;
      top:0;
      left:0;
      background:
              radial-gradient(circle at bottom left, rgba($secondary, 0.5) 0%, rgba($secondary, 0) 30%),
              radial-gradient(circle at bottom right, rgba($primary, 0.5) 0%, rgba($primary, 0) 30%),
              radial-gradient(circle at top right, rgba($secondary, 0.3) 0%, rgba($secondary, 0) 15%);
      animation: opacity-pulse 5s infinite;
    }
    animation: opacity 0.5s ease forwards;
    &.light {
      background-image: url('~assets/img/bg_light.jpg');
      color: black;
      .title, .subtitle {
        color: black;
      }
    }
  }
</style>
