<template>
  <section class="section">
    <div class="container">
      <error-modal/>
      <h2 class="subtitle">Whitelisted Users</h2>
      <div v-if="loading" class="has-text-centered subtitle">Loading..</div>
      <div >
        <h2 class="subtitle has-text-black has-text-weight-bold"><span v-if="userCount !== null && !loadingUserCount">{{userCount}}</span><span v-else>...</span> users</h2>
        <a @click="getUserCount"><small>refresh</small></a>
      </div>

      <div class="has-text-centered container">
        <div class="has-text-centered mb-4">
          <a class="button is-outlined is-danger is-small" style="border-radius: 6px" @click="$bsc.logout()">
            Logout
          </a>
        </div>
        <weyu-footer/>
      </div>
    </div>
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
    loggedIn() {
      return (this.$bsc && this.$bsc.token)
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
      loadingUserCount: false,
      error: null,
      userCount: null
    }
  },
  created() {
    if (!this.loggedIn) {
      this.$bsc.loginModal = true
      this.$router.push({path: "/", query: { redirect: 'admin' }})
    } else {
      this.getUserCount()
    }
  },
  methods: {
    async getUserCount() {
      this.loadingUserCount = true
      try {
        const response = await this.$axios.get('/admin/users/count')
        this.userCount = response.data
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
      this.loadingUserCount = false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
