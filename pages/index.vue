<template>
  <section class="section">
    <div class="container is-max-widescreen">
      <div class="has-text-centered">
        <h2 class="title">Weyu</h2>
        <h4 class="subtitle">Coming Soon</h4>
      </div>
    </div>
    <mailchimp />
  </section>
</template>

<script>
  import Mailchimp from '@/components/Mailchimp';

  export default {
    head() {
      return {
        title: 'Got NFTs?',
        script: [
          { src: 'https://chimpstatic.com/mcjs-connected/js/users/6ea3bc06a659e723a9cb304b7/fff818abd4f7646db053ddc10.js', async: true }
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
