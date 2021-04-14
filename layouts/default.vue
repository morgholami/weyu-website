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

<style scoped>
#content {
  min-height: 100vh;
}
</style>
