<template>
  <div class="container">
    <div class="columns block mt-1">
      <div class="column is-whole has-text-centered">
        <div class="px-2">
          <a href="https://twitter.com/weyuofficial" target="_blank" class="subtitle is-5 mx-2"><i class="fab fa-twitter"></i></a>
          <a href="https://instagram.com/weyuofficial" target="_blank" class="subtitle is-5 mx-2"><i class="fab fa-instagram"></i></a>
          <a href="https://t.me/WEYUchat" target="_blank" class="subtitle is-5 mx-2"><i class="fab fa-telegram"></i></a>
          <a href="https://github.com/weyuio" target="_blank" class="subtitle is-5 mx-2"><i class="fab fa-github"></i></a>
        </div>
        <p class="mt-5">Powered by:</p>
        <img src="~assets/img/blockchain/bsc.svg" class="mt-2" width="60"/>
      </div>
    </div>
  </div>
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
p {
  font-size: .8rem;
  color: $white;
}
</style>
