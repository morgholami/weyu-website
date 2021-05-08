<template>
  <section class="section">
    <div class="container">
      <div class="has-text-centered">
        <a href="/download/weyu_whitepaper.pdf" target="_blank" class="button mb-2">Download Whitepaper</a>
        <div v-if="!loaded">Loading whitepaper <span class="button is-text is-loading">...</span></div>
        <iframe ref="iframe" @load="iframeLoaded" @error="updateIframeSrc" :src="url" width="100%" height="600" style="width: 100%; height: calc(100vh - 150px); min-height: 500px;" frameborder="0" scrolling="no"></iframe>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      loaded: false,
      url: 'https://docs.google.com/viewer?url=https://weyu.io/download/weyu_whitepaper.pdf&embedded=true',
      iframeTimeoutId: null
    }
  },
  mounted () {
    this.iframeTimeoutId = setInterval(
        this.updateIframeSrc, 1000 * 2
    );
  },
  beforeDestroy () {
    clearInterval(this.iframeTimeoutId);
  },
  methods: {
    iframeLoaded() {
      this.loaded = true
      clearInterval(this.iframeTimeoutId);
    },

    updateIframeSrc() {
      this.$refs.iframe.src = this.url;
    }
  }
}
</script>
