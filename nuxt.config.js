// eslint-disable-next-line nuxt/no-cjs-in-config
require('./config.js')

export default {
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  generate: {
    fallback: true
  },

  router: { middleware: ['referral'] },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Weyu',
    title: 'Weyu',
    htmlAttrs: {
      lang: 'en'
    },
    bodyAttrs: {
      // class: 'has-navbar-fixed-top'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@fortawesome/fontawesome-free/css/all.css',
    '@/assets/scss/global.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/bsc.js', mode: 'client' },
    { src: '~/plugins/axios.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // Doc: https://color-mode.nuxtjs.org/
    // '@nuxtjs/google-analytics'
  ],
  googleAnalytics: {
    id: 'UA-196576709-1'
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/google-gtag',
    '@nuxtjs/svg',
    ['@nuxtjs/google-adsense', {
      id: 'ca-pub-5583403222445318'
    }]
  ],
  'google-gtag': {
    id: 'UA-196576709-1',
    config: {

    },
    debug: true, // enable to track in dev mode
    disableAutoPageTrack: false, // disable if you don't want to track each page route with router.afterEach(...).
    additionalAccounts: [{
      id: 'AW-371706538', // required if you are adding additional accounts
      config: {
        //send_page_view: false // optional configurations
      }
    }]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      scss: {
        additionalData: "@import '~assets/scss/variables.scss';"
      }
    }
  }
}
