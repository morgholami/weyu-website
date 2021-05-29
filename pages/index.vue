<template>
  <div>
    <section class="section">
      <div class="container has-text-centered">
        <h2 class="title site-title is-spaced mt-6">Got NFTs?</h2>
        <h4 class="subtitle is-6">The first Multi-Chain platform for the NFT resell market</h4>
      </div>
    </section>
    <div class="container">
      <div class="has-text-centered">
        <div class="is-horizontal-centered column is-three-quarters">
          <!-- Connect Block -->
          <home-connect class="block" />
        </div>
      </div>
    </div>
    <section class="section">
      <weyu-footer class="block" />
      <mailchimp class="block" />
    </section>
  </div>
</template>

<script>
  import HomeConnect from '@/components/HomeConnect.vue';
  import Mailchimp from '@/components/Mailchimp.vue';
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
      WeyuFooter,
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
