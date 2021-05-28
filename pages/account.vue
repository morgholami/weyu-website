<template>
  <section class="section">
    <div class="container ">
      <div v-if="loading">Loading..</div>
      <div v-if="user">
        <a :href="$bsc.explorer + '/address/'+ user.address" target="_blank"
           class="blockchain-address">{{ user.address }}</a>
        <div v-if="user.email && !editEmail">
          {{user.email}} <a @click="email = user.email; editEmail = true">edit</a>
        </div>
        <div v-else>
          <form @submit.prevent="setEmail">
            <div class="field has-addons">
              <div class="control">
                <input type="email" required v-model="email" class="input" placeholder="Your email" />
              </div>
              <div class="control is-flex is-align-items-center">
                <button type="submit" class="button is-primary" :disabled="!email">
                  Set email
                </button>
                <a v-if="editEmail" @click="editEmail = false" class="ml-2">cancel</a>
              </div>
            </div>
          </form>
        </div>
        <div v-if="user.telegram">
          {{user.telegram}}
        </div>
        <vue-telegram-login
            mode="callback"
            telegram-login="weyu_bot"
            requestAccess="write"
            @callback="telegramLogin" />
        <div>
          <h2>Referral Link</h2>
          <div class="control">
            <input class="input" type="text" :value="'https://weyu.io?ref='+user.referral_code" readonly>
          </div>
        </div>
        <div class="has-text-centered">
          <a class="button is-danger" @click="$bsc.logout()">
            Logout
          </a>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import {vueTelegramLogin} from 'vue-telegram-login'
  export default {
    computed: {
      loggedIn () {
        return (this.$bsc && this.$bsc.token)
      }
    },
    components: {vueTelegramLogin},
    data() {
      return {
        loading: false,
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
        } catch (e) {
          alert("Could not set telegram account")
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
        } catch (e) {
          alert("Could not update account")
        }
        this.editEmail = false
        this.loading = false
      },
      async getUser() {
        this.loading = true
        try {
          const response = await this.$axios.get('/user')
          this.user = response.data;
        } catch (e) {
          alert("Could not retrieve account")
        }
        this.loading = false
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
