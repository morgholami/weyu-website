<template>
    <div class="gradient-block px-6 pt-6 pb-5">
      <h2 class="title is-2 mb-4 is-spaced has-text-weight-light">The <span class="has-text-weight-medium has-text-primary">WEYU Lottery + Airdrop</span> is <span class="has-text-weight-medium">Now Live</span></h2>
      <p>Connect your Wallet to Participate</p>
      <div v-if="!loggedIn">
        <div class="button is-accent my-6 px-5 has-text-weight-medium is-medium is-wide"  @click="$bsc.loginModal = true" exact-active-class="is-active">
          Connect Wallet
        </div>
      </div>
      <div v-else>
        <nuxt-link class="button is-accent my-6 px-5 has-text-weight-medium is-medium is-wide" to="/account" exact-active-class="is-active">
          <div>My Account</div>
        </nuxt-link>
      </div>
      
      <div class="block mt-6 is-size-7">
        <a href="#" class="explain-link">What is the WEYU Lottery + Airdrop?</a>
      </div>
    </div>
</template>
<script>
    export default {
      computed: {
        loggedIn () {
          return (this.$bsc && this.$bsc.token)
        }
      },
    }
</script>

<style lang="scss" scoped>

</style>
