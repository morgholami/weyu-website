<template>
  <footer class="footer is-transparent mt-6">
    <div class="container">
      <div class="has-text-centered">
        <small class="is-size-7">&copy; {{ new Date().getFullYear() }} <b>WEYU</b></small>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    components: {
    }
  }
</script>

<style lang="scss" scoped>
.footer {
  &.is-transparent {
    background: transparent;
  }
}
</style>
