<template>
  <span>
    <div class="modal" :class="{ 'is-active': $bsc.loginModal }">
      <div class="modal-background" @click="$bsc.loginModal = false;error = null"></div>
      <div class="modal-card">
        <div v-if="error" class="notification is-danger">
          <button class="delete" @click="error = null"/>
          {{ error }}
        </div>
        <header class="modal-card-head">
          <p class="modal-card-title">
            <span v-if="loggedIn">Your Account</span>
            <span v-else-if="bscWallet">Verify your address</span>
            <span v-else>Select your BSC wallet</span>
          </p>
          <button class="delete" aria-label="close" @click="$bsc.loginModal = false;error = null"/>
        </header>
        <section class="modal-card-body">
          <div v-if="loading" class="loader-wrapper is-active">
            <div class="loader is-loading"/>
          </div>
          <div v-if="loggedIn">
            <nuxt-link class="button is-accent px-5" to="/account" @click="$bsc.loginModal = false;error = null"
                       exact-active-class="is-active">
                  <div>My Account</div>
                </nuxt-link>
            <div class="has-text-right">
              <a class="has-text-danger is-small" style="border-radius: 6px" @click="$bsc.logout()">
                Logout
              </a>
              </div>
          </div>
          <div v-else-if="bscWallet" class="has-text-centered has-text-black">
            <div class="block">
              <b class="has-text-black">Selected account</b>
              <a :href="$bsc.explorer + '/address/'+ bscWallet[0]" target="_blank"
                 class="blockchain-address">{{ bscWallet[0] }}</a>
               <a class="has-text-danger" @click="$bsc.switch();error = null">
                  <small class="is-size-7">Switch Wallet</small>
                </a>
              </div>
              <p class="block">
                Login by verifying your address. This does not cost any transaction fees
              </p>
             <div class="has-text-centered">
              <a class="button is-accent is-wide" @click="login">
                <small class="is-size-7">Login</small>
              </a>
             </div>
          </div>
          <div class="columns is-multiline" v-else>
            <div class="column is-half">
              <div v-if="isMetaMaskInstalled" class="provider has-radius disabled" @click="selectWallet('metamask')">
                <img src="@/assets/img/providers/metamask.png">
                MetaMask
              </div>
              <a v-else-if="!isMobileDevice" class="provider has-radius" href="https://metamask.io/download.html"
                 target="_blank">
                <img src="@/assets/img/providers/metamask.png">
                Install MetaMask
              </a>
            </div>
            <div class="column is-half">
              <div v-if="this.$bsc.checkBinanceInstalled" class="provider has-radius" @click="selectWallet('bsc')">
                <img src="@/assets/img/providers/bsc.svg">
                Binance Chain
              </div>
              <a v-else-if="!isMobileDevice" class="provider has-radius"
                 href="https://docs.binance.org/smart-chain/wallet/binance.html"
                 target="_blank">
                <img src="@/assets/img/providers/bsc.svg">
                Install Binance Chain
              </a>
            </div>
            <div class="column is-half">
              <div class="provider has-radius is-mobile" @click="selectWallet('trust')">
                <img src="@/assets/img/providers/trust.png">
                TrustWallet
              </div>
            </div>
            <div class="column is-half">
              <div class="provider has-radius is-mobile" @click="selectWallet('walletconnect')">
                <img src="@/assets/img/providers/walletconnect.svg" style="height:30px;margin-top:5px">
                WalletConnect
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </span>
</template>

<script>

export default {
  data () {
    return {
      loading: false,
      error: null
    }
  },
  computed: {
    isMetaMaskInstalled () {
      return Boolean(this.$bsc.metamask && this.$bsc.metamask.isMetaMask)
    },

    isBinanceInstalled () {
      return Boolean(this.$bsc.binance != null)
    },
    isMobileDevice () {
      var check = false;
      (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
      })(navigator.userAgent || navigator.vendor || window.opera);
      return check;
    },
    bscWallet () {
      return (this.$bsc) ? this.$bsc.wallet : null
    },
    loggedIn () {
      return (this.$bsc && this.$bsc.token)
    }
  },

  methods: {
    async login () {
      try {
        const timestamp = Math.floor(+new Date() / 1000)
        const signature = await this.$bsc.sign(timestamp)
        const response = await this.$axios.post('/login', {
          address: this.bscWallet[0],
          signature: signature,
          timestamp: timestamp,
          referrer: this.$route.query.ref
        })
        this.$bsc.token = response.data.token
        this.$axios.setToken(response.data.token, 'Bearer')
        this.$bsc.loginModal = false
        this.error = null
        if(this.$route.query.redirect) {
          this.$router.push(this.$route.query.redirect)
        } else {
          this.$router.push("/account")
        }
      } catch (error) {
        console.error("ERR", error);
        if (error.response && error.response.data) {
          if (error.response.data.error) {
            this.error = error.response.data.error
          } else {
            this.error = error.response.data
          }
        } else if (error.message) {
          this.error = error.message
        } else {
          this.error = error
        }
      }
    },
    async selectWallet (provider) {
      this.loading = true
      try {
        switch (provider) {
          case 'metamask':
            await this.$bsc.onMetaMaskConnect()
            break
          case 'bsc':
            await this.$bsc.onBinanceConnect()
            break
          case 'walletconnect':
            await this.$bsc.onWalletConnectWeb3()
            break
          case 'trust':
            await this.$bsc.onWalletConnectWeb3()
            break
        }
        this.error = null
      } catch (error) {
        this.error = error
      }
      this.loading = false
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-card-body {
  border-radius: 0 0 6px 6px;
}

.modal-card {
  max-width: 500px;
}

.column {
  padding: 0.5rem;

  .provider {
    padding: 10px;
    display: block;
    border: 1px solid #CCC;
    font-size: 18px;
    font-weight: 700;
    line-height: 40px;

    img {
      float: left;
      height: 40px;
      max-height: none;
      max-width: none;
      margin-right: 8px;
    }

    &:hover {
      background: #f3f3f3;
      cursor: pointer;
    }
  }
}
</style>
