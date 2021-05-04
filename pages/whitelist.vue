<template>
  <div>
    <section class="section">
        <div class="container">
          <div class="has-text-centered" style="margin-left: auto; margin-right: auto; max-width: 700px;">
            <p class="subtitle is-5 block">The <b>WEYU Whitelist</b> is now live for the WEYU Open Private Sale.<br>Register now to secure your spot in the sale.</p>
            <p class="has-text-danger"><b>BEWARE OF SCAMMERS</b></p>
            <p>We will not ask to transfer funds or ask you to share anymore information until we publically announce the official opening of the WEYU token sale.</p>
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
