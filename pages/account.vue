<template>
  <section class="section">
    <error-modal />
    <div class="container ">
      <div class="has-text-centered">
        <div v-if="loading">Loading..</div>
        <div v-if="user">

          <!-- Account Status Bar -->
          <p class="has-text-white">Congrats {{user.telegram_meta.first_name}} you are registered!</p>
          <account-status :user="user"/>

          <div v-if="user.email && !editEmail" class="mt-6">
            {{user.email}} <a @click="email = user.email; editEmail = true">edit</a>
          </div>
          <div v-else>
            <form @submit.prevent="setEmail" class="mt-6">
               <div class="field has-addons">
                <div class="control">
                  <input type="email" required v-model="email" class="input" placeholder="Your email" />
                </div>
                <p class="control">
                  <button type="submit" class="button is-primary" :disabled="!email">
                    Set email
                  </button>
                  <a v-if="editEmail" @click="editEmail = false" class="ml-2">cancel</a>
                </p>
              </div>
            </form>
          </div>
          <!-- <div v-if="user.telegram">
            {{user.telegram}}
          </div> -->
          <vue-telegram-login
              mode="callback"
              telegram-login="weyu_bot"
              requestAccess="write"
              @callback="telegramLogin" />
          <h2 class="title site-title is-1 has-text-weight-medium is-spaced mt-6">Earn Extra WEYU Tickets</h2>
          <h4 class="subtitle is-6 mb-6">Earning extra tickets is easy and fun!</h4>

          <!-- Account Action Blocks -->
          <account-action-blocks :user="user"/>

          <div class="has-text-centered mb-4">
            <a class="button is-danger" @click="$bsc.logout()">
              Logout
            </a>
          </div>

        </div>
      </div>
    </div>
    <weyu-footer />
  </section>
</template>

<script>
import {vueTelegramLogin} from 'vue-telegram-login'
import ErrorModal from '@/components/ErrorModal'
import AccountStatus from '@/components/AccountStatus.vue'
import WeyuFooter from '@/components/Footer.vue'
import AccountActionBlocks from '@/components/AccountActionBlocks.vue'
  export default {
    computed: {
      loggedIn () {
        return (this.$bsc && this.$bsc.token)
      }
    },
    components: {
      vueTelegramLogin,
      ErrorModal,
      WeyuFooter,
      AccountActionBlocks
    },
    data() {
      return {
        loading: false,
        error: null,
        user: null,
        email: null,
        editEmail: false
      }
    },
    created () {
      if (!this.loggedIn) {
        this.$bsc.loginModal = true
        this.$router.push("/")
      } else {
        this.getUser()
      }
    },
    methods: {
      async telegramLogin (user) {
        console.log(user)
        this.loading = true
        try {
          const response = await this.$axios.post('/user/telegram', user)
          this.user = response.data;
        } catch (error) {
          if (error.response && error.response.data) {
            if(error.response.data.error) {
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
        try {
          const response = await this.$axios.post('/user', {
            email: this.email
          })
          this.user = response.data;
        } catch (error) {
          if (error.response && error.response.data) {
            if(error.response.data.error) {
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
            if(error.response.data.error) {
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
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
