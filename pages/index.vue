<template>
  <section class="section">
<!--    <div style="position: absolute; top:90px; right:0; overflow:hidden;max-height:800px;">-->
<!--      <img src="~assets/img/nft-colors.png"  width="1000" class="is-hidden-mobile"/>-->
<!--    </div>-->
    <div class="container">
      <div class="has-text-centered">
        <div class="is-horizontal-centered column is-three-quarters">
          <div style="position: relative;">
            <h2 class="title site-title is-spaced mt-6">Got NFTs?</h2>
            <h4 class="subtitle is-6 mb-6">The first multi-chain platform for the NFT resale market</h4>
<!--            <p class="block">-->
<!--              Our obsessive compulsive focus is user experience. WEYU is building the easiest and most accessible platform for buying and selling any NFT from any Blockchain.-->
<!--            </p>-->

            <!-- Connect Block -->
            <home-connect class="block" />
          </div>
        </div>
      </div>
    </div>
    <weyu-footer />
  </section>
</template>

<script>
  import HomeConnect from '@/components/HomeConnect.vue';
  import WeyuFooter from '@/components/Footer.vue';

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
      HomeConnect,
      WeyuFooter
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
      left:-35%;
      width:170%;
      height:170%;
      background-image: url('~assets/img/oval_lines.svg');
      background-size: cover;
      background-position: center;
      animation: scale 1s, pulse 1s infinite alternate;
      animation-delay: 0.2s, 1.2s;
      animation-fill-mode: forwards;
    }

  }
  @media only screen and (max-width: 1280px) {
    .oval-lines {
      position: relative;
      &:before {
        transform: scale(1.0);
        content: "";
        display:block;
        position: absolute;
        top: -75px;
        opacity: 0.8;
        left: 0px;
        width: 100%;
        height: 100%;
        background-image: url('~assets/img/oval_lines.svg');
        background-size: 150%;
        background-position: top;
        background-repeat: no-repeat;
        //animation: none;
        animation-delay: 0.2s, 1.2s;
        animation-fill-mode: forwards;
      }

    }
  }
  .site-title {
    font-size: 63px;
      font-weight: 500 !important;
  }
</style>
