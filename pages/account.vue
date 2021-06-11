<template>
  <div>
    <error-modal/>
    <div v-if="loading" class="has-text-centered subtitle">Loading..</div>
    <div v-if="user">
      <div class="container" v-if="!user.telegram_meta || !user.email">
        <div class="has-text-centered">
          <div class="is-horizontal-centered column is-three-quarters">
            <!-- Register Block -->
            <div class="has-text-centered mt-5">
              <div class="column is-horizontal-centered is-9 block">
                <h1 class="title has-text-weight-medium">Welcome to the WEYU<br>Whitelist + Airdrop Registration</h1>
              </div>
              <div class="gradient-block py-6">
                <div class="column is-horizontal-centered is-8 is-flex is-justify-content-center is-align-items-center"  style="position: relative;">
                  <div class="step is-first is-active">
                    <i class="fa-check-circle far"></i>
                  </div>
                  <div class="field is-flex-grow-1" style="position: relative;">
                    <div class="control">
                      <input type="text" class="input is-transparent is-white has-text-white input-weyu" readonly :value="user.address">
                    </div>
                    <div class="control button-weyu">
                      <div class="has-text-primary has-text-weight-bold" style="padding: 7px 6px 0px 0px">Verified</div>
                    </div>
                  </div>
                </div>
                <div class="column is-horizontal-centered is-8 is-flex is-justify-content-center is-align-items-center"  style="position: relative;">
                  <div class="step is-active">
                    <i class="fa-check-circle far" v-if="user.telegram"></i>
                    <span v-else>2</span>
                  </div>
                  <div class="field is-flex-grow-1" style="position: relative;">
                    <div class="control">
                      <input type="text" readonly class="input is-transparent is-primary has-text-white input-weyu" :value="user.telegram_meta ? ( user.telegram_meta.username ? '@'+user.telegram_meta.username : user.telegram_meta.first_name ) : null"  placeholder="Connect Telegram >">
                    </div>
                    <div class="control button-weyu">
                      <div class="has-text-primary has-text-weight-bold" style="padding: 7px 6px 0px 0px" v-if="user.telegram">
                        <span>Connected</span>
                      </div>
                      <vue-telegram-login
                          v-else
                          mode="callback"
                          telegram-login="weyu_bot"
                          requestAccess="write"
                          @callback="telegramLogin"/>

                    </div>
                  </div>
                </div>
                <form @submit.prevent="setEmail">
                  <div class="column is-horizontal-centered is-8 is-flex is-justify-content-center is-align-items-center"  style="position: relative;">
                    <div class="step" :class="{'is-active': user.telegram}">
                      <i class="fa-check-circle far" v-if="user.email"></i>
                      <span v-else>3</span>
                    </div>
                    <div class="field is-flex-grow-1" style="position: relative;">

                      <div class="control">
                        <input v-if="!user.email" type="email" v-model="email" :disabled="!user.telegram_meta" class="input is-transparent is-primary has-text-white input-weyu"  placeholder="Your email address">
                        <input v-else type="email" :value="user.email" readonly class="input is-transparent is-primary has-text-white input-weyu">
                      </div>
                      <div class="control button-weyu">
                        <button type="submit" class="button" :class="[!user.telegram_meta ? 'is-dark' : 'is-accent']" :disabled="!user.telegram_meta">Connect</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="section" v-else>
        <div class="container ">
          <div class="has-text-centered">
            <!-- Account Status Bar -->
            <p class="has-text-white block">Congrats {{ user.telegram_meta.first_name }}, you are registered!</p>
            <p class="is-size-6 has-text-white">You have</p>
            <div class="tickets">
              <div class="is-size-4 has-text-weight-bold">{{tickets}}</div>
              <div style="margin-top: -8px;padding-bottom:3px" class="">Tickets</div>
            </div>
            <account-status :user="user"/>
            <h2 class="title site-title is-1 has-text-weight-medium is-spaced mt-6">Earn Extra WEYU Tickets</h2>
            <h4 class="subtitle is-6 mb-6">Earning extra tickets is easy and fun!</h4>

            <!-- Account Action Blocks -->
            <account-action-blocks @submit-task="getTasks" :referrals="referrals" :tasks="tasks" :user="user"/>

          </div>
        </div>
      </section>
    </div>

      <div class="has-text-centered container">
        <div class="has-text-centered mb-4">
          <a class="button is-outlined is-primary is-small" style="border-radius: 6px" @click="$bsc.logout()">
            Logout
          </a>
        </div>
        <weyu-footer/>
      </div>
  </div>
</template>

<script>
import {vueTelegramLogin} from 'vue-telegram-login'
import ErrorModal from '@/components/ErrorModal'
import AccountStatus from '@/components/AccountStatus.vue'
import WeyuFooter from '@/components/Footer.vue'
import AccountActionBlocks from '@/components/AccountActionBlocks.vue'

export default {
  computed: {
    loggedIn() {
      return (this.$bsc && this.$bsc.token)
    },
    tickets() {
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
  data() {
    return {
      loading: false,
      error: null,
      user: null,
      email: null,
      editEmail: false,
      referrals: null,
      tasks: null
    }
  },
  created() {
    if (!this.loggedIn) {
      this.$bsc.loginModal = true
      this.$router.push({path: "/", query: {redirect: 'account'}})
    } else {
      this.getUser()
      this.getReferrals()
      this.getTasks()
    }
  },
  methods: {
    async telegramLogin(user) {
      console.log(user)
      this.loading = true
      try {
        const response = await this.$axios.post('/user/telegram', user)
        this.user = response.data;
      } catch (error) {
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
      this.loading = false
    },
    async setEmail() {
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
      this.editEmail = false
      this.loading = false
    },
    async getUser() {
      this.loading = true
      try {
        const response = await this.$axios.get('/user')
        this.user = response.data;
      } catch (error) {
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
      this.loading = false
    },
    async getReferrals() {
      try {
        const response = await this.$axios.get('/user/referrals')
        this.referrals = parseInt(response.data)
      } catch (error) {
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
    async getTasks() {
      try {
        const response = await this.$axios.get('/tasks')
        this.tasks = response.data
      } catch (error) {
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
    display:none;
  }
}
.input-weyu {
  padding-right: 160px;
  padding-left: 20px;
  padding-top: 25px;
  padding-bottom: 25px;
  &[disabled] {
    border-color: $grey;
    background-color: rgba(0,0,0,0.1);
  }
}
.button-weyu {
  position: absolute;
  top: 6px;
  right: 5px;
  .button {
    height:40px;
    font-size: 14px;
    min-width: 150px;
  }
}
@media only screen and (max-width: 768px) {
  .step:before {
    display:none;
  }
  .input-weyu {
    padding-right: 20px;
  }
  .button-weyu {
    overflow-x:scroll;
    max-width: 225px;
    position: relative;
    margin-top: 5px;
    text-align: center;
  }
}
</style>
