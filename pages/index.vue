<template>
  <section class="section">
<!--    <div style="position: absolute; top:90px; right:0; overflow:hidden;max-height:800px;">-->
<!--      <img src="~assets/img/nft-colors.png"  width="1000" class="is-hidden-mobile"/>-->
<!--    </div>-->
    <div class="container ">
      <div class="columns">
        <div class=" column is-one-third mt-6 oval-lines">
          <div style="position: relative;">
            <h2 class="title has-text-weight-bold site-title is-spaced">Got NFTs?</h2>
            <h4 class="subtitle is-4">The first multi-chain platform for the NFT resell market</h4>
            <p class="block">
              Our obsessive compulsive focus is user experience. WEYU is building the easiest and most accessible platform for buying and selling any NFT from any Blockchain.
            </p>
            <mailchimp class="block" />
            <div class="columns mt-6 block">
              <div class="column is-half">
                <div class="px-2 py-4 has-radius has-background-black-transparent has-text-centered">
                  <h2 class="is-size-7 mb-2">Follow our updates on:</h2>
                  <a href="https://twitter.com/weyu_io" target="_blank" class="subtitle is-5 mx-2"><i class="fab fa-twitter"></i></a>
                  <a href="https://www.instagram.com/we_yu_io/" target="_blank" class="subtitle is-5 mx-2"><i class="fab fa-instagram"></i></a>
                  <a href="https://twitter.com/weyu_io" target="_blank" class="subtitle is-5 mx-2"><i class="fab fa-telegram"></i></a>
                  <a href="https://github.com/weyuio" target="_blank" class="subtitle is-5 mx-2"><i class="fab fa-github"></i></a>
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
  @keyframes scale {
    0% {
      transform: scale(0.0);
      -webkit-transform: scale(0.0);
    }
    100% {
      transform: scale(1.0);
      -webkit-transform: scale(1.0);
    }
  }
  @keyframes pulse {
    0% {
      transform: scale(1.0);
      -webkit-transform: scale(1.0);
    }
    50% {
      transform: scale(1.1);
      -webkit-transform: scale(1.1);
    }
    100% {
      transform: scale(1.0);
      -webkit-transform: scale(1.0);
    }
  }

  .oval-lines {
    position: relative;
    &:before {
      transform: scale(0.0);
      content: "";
      display:block;
      position: absolute;
      top:-45%;
      opacity: 0.8;
      left:-45%;
      width:190%;
      height:190%;
      background-image: url('~assets/img/oval_lines.svg');
      background-size: cover;
      background-position: center;
      animation: scale 1s, pulse 1s infinite alternate;
      animation-delay: 0.2s, 1.2s;
      animation-fill-mode: forwards;
    }

  }
  .site-title {
    font-size: 80px;
  }
</style>
