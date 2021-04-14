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
          // { src: '...js' }
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
