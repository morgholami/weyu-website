<template>
  <section class="section">
    <div class="container">
      <div class="has-text-centered">
        <h2 class="subtitle  has-text-weight-bold is-3 has-text-success">Thanks for subscribing!</h2>
        <nuxt-link class="button" to="/">Home</nuxt-link>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  mounted () {
    if (process.browser) {
      this.$gtag('event', 'conversion', {'send_to': 'AW-371706538/UvosCO2nrJICEKqVn7EB'})
    }
  }
}
</script>
