<template>
  <div>
    <error-modal/>
    <div v-if="loading" class="has-text-centered subtitle">Loading..</div>
    <div v-if="user">
      <div class="container" v-if="!user.telegram || !user.email">
        <div class="has-text-centered">
          <div class="is-horizontal-centered column is-three-quarters">
            <!-- Register Block -->
            <div class="has-text-centered mt-5">
              <div class="column is-horizontal-centered is-9 block">
                <h1 class="title has-text-weight-medium">Unfortunately, you are not registered for the WEYU Whitelist
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="section" v-else>
        <div class="container ">
          <div class="has-text-centered">
            <!-- Account Status Bar -->
            <!-- <p class="has-text-white block">Congrats <span v-if="user.telegram_meta">{{ user.telegram_meta.first_name }}</span>, you are registered!</p> -->
            <p class="is-size-6 has-text-white">You have</p>
            <div class="tickets mt-1 mb-5">
              <div class="is-size-4 has-text-weight-bold">{{ tickets }}</div>
              <div style="margin-top: -8px;padding-bottom:3px" class="">Tickets</div>
            </div>
            <account-status :user="user"/>
            <h2 class="title is-1 has-text-weight-normal is-spaced mt-6 pt-5 has-limited-width is-horizontal-centered" style="width: 850px">
              <span v-if="new Date(lotteryDate) > new Date()">Winners of the <b class="">WEYU</b> Private Sale Lottery announced in</span>
              <span v-else>WEYU Private Sale Lottery</span>
            </h2>

            <div class="countdown mt-5 px-6 py-5 has-radius is-horizontal-centered" v-if="new Date(lotteryDate) > new Date()">
              <client-only>
                <countdown :end-time="new Date(lotteryDate)">
                  <span
                    slot="process"
                    slot-scope="{ timeObj }"><h2 class="title py-1 has-text-weight-medium countdown-title">{{ `${timeObj.d}:${timeObj.h}:${timeObj.m}:${timeObj.s}` }}</h2></span>
                  <span slot="finish"><a v-if="!userTokensale" @click="getUserTokensale" class="button">Check if you have won!</a></span>
                </countdown>
              </client-only>
            </div>
            <progress v-if="loadingTokensale" class="progress is-small is-primary" max="100">loading..</progress>

            <h2 class="subtitle has-text-danger" v-if="userTokensale && ['NOT_SELECTED', 'REJECTED'].includes(userTokensale.status)">
              Unfortunately, you were not selected.
            </h2>
            <div v-show="userTokensale && ['SELECTED', 'PARTICIPATED'].includes(userTokensale.status)">
              <h2 class="subtitle">
                You are selected to participate in the WEYU Tokensale!
              </h2>
              <button v-show="userTokensale && userTokensale.kyc_status !== 'VALIDATED'" @click="loadingKYC = true" :disabled="loadingKYC" class="synaps-verify-btn-blue" id="synaps-btn">
                <template v-if="loadingKYC">Loading..</template><template v-else>Verify with Synaps</template>
              </button>

              <div>
                KYC Status: <span v-if="userTokensale && !loadingTokensale">{{userTokensale.kyc_status}}</span><span v-if="loadingTokensale">Loading..</span>
              </div>
              <div class="blockchain-address" v-if="userTokensale && userTokensale.address">
                {{userTokensale.address}}
              </div>

              <div class="block" v-if="userTokensale && userTokensale.address">
                <p>
                  USDT Balance: <span v-if="addressBalance">${{addressBalance.usd}}
                  <br>Equals<br>
                  {{addressBalance.weyu}} WEYU Tokens
                  </span>
                  <span v-else>Loading..</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="has-text-centered container">
      <div class="has-text-centered mb-6">
        <a class="button is-outlined is-primary is-small mb-6" style="border-radius: 6px" @click="$bsc.logout()">
          Logout
        </a>
      </div>
      <weyu-footer/>
    </div>
  </div>
</template>

<script>
import {vueTelegramLogin} from 'vue-telegram-login'
import {SynapsClient} from '@synaps-io/synaps-client-sdk-js'
import ErrorModal from '@/components/ErrorModal'
import AccountStatus from '@/components/AccountStatus.vue'
import WeyuFooter from '@/components/Footer.vue'
import AccountActionBlocks from '@/components/AccountActionBlocks.vue'

export default {
  computed: {
    loggedIn () {
      return (this.$bsc && this.$bsc.token)
    },
    tickets () {
      if (this.referrals === null || this.tasks === null) return '..'
      let tickets = 3
      tickets += 2 * this.referrals
      this.tasks.forEach(task => {
        if (task.created_at) {
          tickets += task.tickets;
        }
      })
      if (tickets > 100) tickets = 100
      return tickets
    }
  },
  components: {
    vueTelegramLogin,
    ErrorModal,
    WeyuFooter,
    AccountStatus,
    AccountActionBlocks
  },
  data () {
    return {
      loading: false,
      loadingTokensale: false,
      loadingKYC: false,
      error: null,
      user: null,
      userTokensale: null,
      email: null,
      editEmail: false,
      referrals: null,
      tasks: null,
      lotteryDate: '2021-06-16T11:41:00Z',
      addressBalance: null,
      timer: null
    }
  },
  created () {
    if (!this.loggedIn) {
      this.$bsc.loginModal = true
      this.$router.push("/")
    } else {
      this.getUser()
      this.getReferrals()
      this.getTasks()
      if (new Date() > new Date(this.lotteryDate)) {
        this.getUserTokensale()
      }
    }
  },
  beforeDestroy () {
    clearInterval(this.timer);
  },
  methods: {
    async getUserTokensale () {
      try {
        this.loadingTokensale = true
        this.loadingKYC = true
        const response = await this.$axios.get('/user/tokensale')
        if (!this.userTokensale && response.data.kyc_status !== 'VALIDATED') {
          if(!this.timer) {
            // every five minutes
            this.timer = setInterval(() => this.getUserTokensale(), 5*60*1000);
          }
          const Synaps = new SynapsClient(response.data.kyc_session_id, 'workflow');
          console.log("init synaps..")
          Synaps.init();
          Synaps.on('finish', () => {
            this.loadingKYC = false
            this.getUserTokensale()
            console.log("finish")
          });
          Synaps.on('close', () => {
            console.log("close")
            this.getUserTokensale()
            this.loadingKYC = false
          });
        }
        this.userTokensale = response.data;
        this.loadingTokensale = false
        this.loadingKYC = false
        if (response.data.address) {
          this.addressBalance = await this.$bsc.getBalanceOfAddress(response.data.address)
        }
      } catch (error) {
        this.handleError(error)
        this.loadingTokensale = false
      }
    },
    async refreshBalance () {
      if (this.userTokensale.address) {
        this.addressBalance = await this.$bsc.getBalanceOfAddress(this.userTokensale.address)
      }
    },
    async telegramLogin (user) {
      console.log(user)
      this.loading = true
      try {
        const response = await this.$axios.post('/user/telegram', user)
        this.user = response.data;
      } catch (error) {
        this.handleError(error)
      }
      this.loading = false
    },
    async setEmail () {
      this.loading = true
      if (!this.email) {
        this.error = 'Email is required'
        return
      }
      try {
        const response = await this.$axios.post('/user', {
          email: this.email
        })
        this.user = response.data;
      } catch (error) {
        this.handleError(error)
      }
      this.editEmail = false
      this.loading = false
    },
    async getUser () {
      this.loading = true
      try {
        const response = await this.$axios.get('/user')
        this.user = response.data;
      } catch (error) {
        this.handleError(error)
      }
      this.loading = false
    },
    async getReferrals () {
      try {
        const response = await this.$axios.get('/user/referrals')
        this.referrals = parseInt(response.data)
      } catch (error) {
        this.handleError(error)
      }
    },
    async getTasks () {
      try {
        const response = await this.$axios.get('/tasks')
        this.tasks = response.data
      } catch (error) {
        this.handleError(error)
      }
    },
    handleError (error) {
      if (error.response && error.response.data) {
        if (error.response.data.error) {
          this.error = error.response.data.error
        } else if (error.response.data.message) {
          this.error = error.response.data.message
        } else {
          this.error = error.response.data
        }
      } else if (error.message) {
        this.error = error.message
      } else {
        this.error = error
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tickets {
  background: url("~assets/img/ticket-bg.svg");
  background-size: cover;
  margin: 0 auto;
  width: 100px;
  color: white;
}

.step {
  font-size: 1.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  font-family: $family-secondary;
  border: 1px solid $grey;
  border-radius: 10px;
  margin-right: 10px;

  &:before {
    content: "";
    position: absolute;
    width: 3px;
    height: 35px;
    bottom: 58px;
    background: $grey;
  }

  &.is-active {
    &:before {
      background: $secondary;
    }

    border-color: $secondary;
    background: $secondary;
    color: white;
  }

  &.is-first:before {
    display: none;
  }
}

.input-weyu {
  padding-right: 160px;
  padding-left: 20px;
  padding-top: 25px;
  padding-bottom: 25px;

  &[disabled] {
    border-color: $grey;
    background-color: rgba(0, 0, 0, 0.1);
  }
}

.button-weyu {
  position: absolute;
  top: 6px;
  right: 5px;

  .button {
    height: 40px;
    font-size: 14px;
    min-width: 150px;
  }
}

@keyframes glow {
  0% {
    box-shadow: 0px 0px 10px 0px $primary-gradient;
  }
  20% {
    box-shadow: 0px 0px 50px 5px $primary-gradient;
  }
  45% {
    box-shadow: 0px 0px 10px 0px $primary-gradient;
  }
  55% {
    box-shadow: 0px 0px 10px 0px $secondary-gradient;
  }
  75% {
    box-shadow: 0px 0px 50px 5px $secondary-gradient;
  }
  90% {
    box-shadow: 0px 0px 10px 0px $secondary-gradient;
  }
  100% {
    box-shadow: 0px 0px 10px 0px $primary-gradient;
  }
}
.countdown {
  animation: glow 6s infinite;
  width: fit-content;
  box-shadow: 0px 0px 15px 1px $primary-gradient;
  position: relative;
  background: $gradient-bg;
  letter-spacing: 3px;
  &:before {
    border-radius: 15px;
    content: '';
    background-image: linear-gradient(65deg, $primary 0%, $accent 100%);
    top: -2px;
    left: -2px;
    bottom: -2px;
    right: -2px;
    position: absolute;
    z-index:-1;
  }

  .countdown-title {
    color: $primary;
    font-size: 3.3rem;
  }
}

@media only screen and (max-width: 768px) {
  .step:before {
    display: none;
  }
  .input-weyu {
    padding-right: 20px;
  }
  .button-weyu {
    overflow-x: scroll;
    max-width: 225px;
    position: relative;
    margin-top: 5px;
    text-align: center;
  }
  .countdown .countdown-title {
    color: $primary;
    font-size: 2.8rem;
  }
}
</style>
