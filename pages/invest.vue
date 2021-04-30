<template>
  <div>
    <section class="section">
        <div class="container">
          <div class="has-text-centered" style="margin-left: auto; margin-right: auto; max-width: 700px;">
            <p class="subtitle is-5 block">The WEYU seed round is now open. This round is reserved for influencers and industry experts who have a proven history with working with innovative crypto projects.
            <p class="subtitle is-5 block">This round will end soon! Apply below:</p>
          </div>
          <div ref="typeform" id="typeform">loading..</div>
        </div>
    </section>
    <section class="section">
      <div class="container has-text-centered mt-6">
        <a href="https://9wx6twk78a7.typeform.com/to/Yn7icJyU" target="_blank">open form</a>
      </div>
    </section>
  </div>
</template>

<script>
const typeformEmbed = require('@typeform/embed');
export default {
  mounted() {
    typeformEmbed.makeWidget(
        this.$refs.typeform,
        'https://9wx6twk78a7.typeform.com/to/Yn7icJyU',
        {
          opacity: 50,
          hideScrollbars: true,
          hideFooter: true,
          hideHeader: true,
          buttonText: "Start Form",
          onSubmit: function () {
            console.log('Typeform successfully submitted')
          }
        }
    )
  }
}
</script>

<style lang="scss" scoped>
#typeform {
  height: 600px;
  width: 100%;
  background: $white;
}
.bdziaR {
  opacity: 1 !important;
}
</style>
