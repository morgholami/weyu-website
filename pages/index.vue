<template>
  <section class="section">
    <img src="~assets/img/nft-colors.png" style="position: absolute; top:90px; right:0;" width="1000"/>
    <div class="container ">
      <div class="columns">
        <div class=" column is-one-third mt-6">
          <h2 class="title has-text-weight-bold site-title is-spaced">Got NFTs?</h2>
          <h4 class="subtitle">The first multi-chain platform for the NFT resell market</h4>
          <p class="block">
            Our obsessive compulsive focus is user experience. WEYU is building the easiest and most accessible platform for buying and selling any NFT from any Blockchain.
          </p>
          <mailchimp class="block" />
          <div class="columns mt-6 block">
            <div class="column is-half">
              <div class="px-2 py-4 has-radius has-background-black-transparent has-text-centered">
                <h2 class="is-size-7 mb-2">Follow our updates on:</h2>
                <a href="https://twitter/weyuio" target="_blank" class="subtitle is-5 mx-2"><i class="fab fa-twitter"></i></a>
                <a href="https://twitter/weyuio" target="_blank" class="subtitle is-5 mx-2"><i class="fab fa-instagram"></i></a>
                <a href="https://twitter/weyuio" target="_blank" class="subtitle is-5 mx-2"><i class="fab fa-telegram"></i></a>
                <a href="https://twitter/weyuio" target="_blank" class="subtitle is-5 mx-2"><i class="fab fa-reddit"></i></a>
              </div>
            </div>
            <div class="column is-half">
              <div class="px-2 py-4 has-radius has-background-black-transparent has-text-centered">
                <h2 class="is-size-7 mb-2">Contact us:</h2>
                <a href="mailto:team@weyu.io" target="_blank" class="subtitle is-5">team@weyu.io</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  </section>
</template>

<script>
  import Mailchimp from '@/components/Mailchimp';

  export default {
    head() {
      return {
        title: 'Got NFTs?',
        script: [
          // { src: 'https://chimpstatic.com/mcjs-connected/js/users/6ea3bc06a659e723a9cb304b7/fff818abd4f7646db053ddc10.js', async: true }
        ],
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Got NFTs?'
          }
        ]
      }
    },
    components: {
      Mailchimp
    }
  }
</script>

<style lang="scss" scoped>
  .site-title {
    font-size: 80px;
  }
</style>
