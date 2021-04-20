<template>
  <div>
    <div class="container">
      <div ref="typeform" id="typeform">loading..</div>
    </div>
    <section class="section">
      <div class="container has-text-centered mt-6">
        <a href="https://9wx6twk78a7.typeform.com/to/wecvobI4" target="_blank">open whitelist form</a>
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