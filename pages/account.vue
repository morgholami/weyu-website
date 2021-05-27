<template>
  <section class="section">
    <div class="container ">
      <div v-if="loading">Loading account..</div>
      <div v-if="user">
        {{ user }}
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
  export default {
    computed: {
      loggedIn () {
        return (this.$bsc && this.$bsc.token)
      }
    },
    data() {
      return {
        loading: false,
        user: null
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
