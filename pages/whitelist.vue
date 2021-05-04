<template>
  <div>
    <section class="section">
        <div class="container">
          <div class="has-text-centered" style="margin-left: auto; margin-right: auto; max-width: 750px;">
            <p class="subtitle is-4 mb-2 has-text-weight-semibold">The WEYU Whitelist is now live for the WEYU Open Private Sale.</p>
            <p class="subtitle">Register now to secure your spot in the sale.</p>
            <p class="has-background-danger-light p-4 has-radius-small" style="max-width: 570px; margin-left: auto; margin-right: auto">
              <b class="has-text-danger">BEWARE OF SCAMMERS</b><br>
            <small>We will not ask to transfer funds or ask you to share anymore information until we publicly announce the official opening of the WEYU token sale.</small></p>
            <br>
          </div>
          <div ref="typeform" id="typeform">loading..</div>
        </div>
    </section>
    <section class="section">
      <div class="container has-text-centered mt-6">
        <a href="https://9wx6twk78a7.typeform.com/to/wecvobI4" target="_blank">open form</a>
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
        'https://9wx6twk78a7.typeform.com/to/wecvobI4',
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
