<template>
  <div>
    <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <nuxt-link class="navbar-item" to="/">
            <img src="~/assets/img/logo.svg"  class="logo">
          </nuxt-link>

          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"
             data-target="navbar" @click="mobileMenu = !mobileMenu">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>


        <div id="navbar" class="navbar-menu" :class="{'is-active': mobileMenu}">
          <div class="navbar-start">

          </div>
          <div class="navbar-end is-align-items-center">
            <div @click="mobileMenu = false">
              <nuxt-link class="navbar-item" to="/" exact-active-class="is-active">
                <div>Home</div>
              </nuxt-link>
            </div>
            <div class="navbar-item is-disabled" to="/platform" exact-active-class="is-active">
              <div class="has-tooltip-bottom has-tooltip-arrow" data-tooltip="Coming Soon!">Platform</div>
            </div>
            <div @click="mobileMenu = false">
              <nuxt-link class="navbar-item" to="/whitepaper" exact-active-class="is-active">
                <div>Whitepaper</div>
              </nuxt-link>
            </div>
            <div class="navbar-item is-disabled"  exact-active-class="is-active">
              <div class="has-tooltip-bottom has-tooltip-arrow" data-tooltip="Coming Soon!">Buy NFTs</div>
            </div>
            <div class="navbar-item is-disabled " exact-active-class="is-active">
              <div class="has-tooltip-bottom has-tooltip-arrow" data-tooltip="Coming Soon!">Sell NFTs</div>
            </div>
            <div @click="mobileMenu = false" >
              <div class="navbar-item is-disabled" to="/whitelist" exact-active-class="is-active">
                <div class="has-tooltip-bottom has-tooltip-arrow" data-tooltip="Coming Soon!">Whitelist & Airdrop</div>
              </div>
            </div>
            <div class="navbar-item" exact-active-class="is-active" @click="mobileMenu = false">
              <div v-if="!bscWallet">
                <div class="button is-primary is-outlined"  @click="$bsc.loginModal = true" exact-active-class="is-active">
                  Connect Wallet
                </div>
              </div>
              <div v-else style="max-width: 150px">
                <a :href="$bsc.explorer + '/address/'+ bscWallet[0]" target="_blank"
                   class="blockchain-address">{{ bscWallet[0] }}</a>
                <a class="has-text-danger" @click="$bsc.logout()">
                  <small class="is-size-7">Disconnect</small>
                </a>
                <a class="" @click="login">
                  <small class="is-size-7">Login</small>
                </a>
                sign
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    token:{{$bsc.token}}
  </div>
</template>

<script>
  export default {
    components: {
    },
    data() {
      return {
        loading: false,
        mobileMenu: false
      }
    },

    computed: {
      bscWallet () {
        return (this.$bsc) ? this.$bsc.wallet : null
      }
    },

    methods: {
      async login () {
        const timestamp = Math.floor(+new Date() / 1000)
        const signature = await this.$bsc.sign(timestamp)
        const response = await this.$axios.post(process.env.NUXT_ENV_BACKEND_URL + '/login', {
          address: this.bscWallet[0],
          signature: signature,
          timestamp: timestamp
        })
        this.$bsc.token = response.data.token
      }
    }
  }
</script>

<style lang="scss">
  .navbar {
    &.is-transparent {
      background: transparent;
    }
    .logo {
      height: 50px;
      max-width: none;
      max-height: none;
      margin-top: 5px;
      margin-right: 8px;
    }
    .navbar-brand {
      .navbar-item {
        &.is-active, &:hover {
          color: $primary;
        }
      }
    }

    .navbar-menu {
      margin-top: 8px;
      justify-content: center;

      .navbar-item {
        font-weight: 500;
        padding: 10px 20px;
        text-align: center;
        color: white;
        &.dapps {
          img {
            max-height: 2.5rem;
            width: auto;
            max-width: none;
          }
          .navbar-item:hover {
            background-color: whitesmoke !important;
          }
        }
        &:after {
          display: block;
          width: 0;
          height: 2px;
          position: absolute;
          transition: width 0.5s;
          bottom: 10px;
          background: $secondary;
          content: "";
        }

        &.is-active {
          color: $primary;
          font-weight: 700;

          &:after {
            width: calc(100% - 1.5rem - 15px);
          }
        }
      }
    }
  }
  .light {
    .navbar {
      .navbar-menu {
        .navbar-item {
          color: black;
        }
      }
    }
    .button.is-primary {
      color: $accent;
      border-color: $accent;
      &:hover, &:focus, &:active {
        background: $accent;
        border-color: $accent;
        color: white;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .navbar {
      .navbar-menu {
        .navbar-item {
          color: black;
        }
      }
    }
  }
</style>
