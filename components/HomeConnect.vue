<template>
    <div class="connect-block px-6 pt-6 pb-5 has-radius">
      <h2 class="title is-2 mb-4 is-spaced has-text-weight-light">The <span class="has-text-weight-medium has-text-primary">WEYU Lottery + Airdrop</span> is <span class="has-text-weight-medium">Now Live</span></h2>
      <p>Connect your wallet to participate</p>
      <div class="button is-accent my-6 px-5 has-text-weight-medium" @click="$bsc.loginModal = true" exact-active-class="is-active">
        Connect Wallet
      </div>
      
      <div class="block mt-6">
        <a href="#" class="explain-link">What is the WEYU Lottery + Airdrop?</a>
      </div>
    </div>
</template>
<script>
    export default {
        mounted () {
        }
    }
</script>

<style lang="scss" scoped>
  .explain-link {
    font-size: .8rem;
  }
  .connect-block {
    position: relative;
    background: linear-gradient(65deg, $primary-gradient 0, $gradient-bg 30%, $gradient-bg 70%, $secondary-gradient 100%);
    &:before {
      border-radius: 15px;
      content: '';
      background-image: linear-gradient(65deg, $primary 0%, $accent 100%);
      top: -2px;
      left: -2px;
      bottom: -2px;
      right: -2px;
      position: absolute;
      z-index:-1;
    }
  }
</style>
