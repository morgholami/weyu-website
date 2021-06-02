<template>
  <section class="section">
    <div class="modal is-active" v-if="user">
      <div class="modal-background" @click="user = null"></div>
      <div class="modal-content">
        <div class="box has-text-black">
          <div class="block"><b>Address:</b> {{user.address}}</div>
          <div class="block"><b>Email:</b> {{user.email}}</div>
          <div class="block"><b>Telegram:</b> <span v-if="user.telegram_meta">{{ user.telegram_meta.first_name }}<span
              v-if="user.telegram_meta.username">(@{{ user.telegram_meta.username }})</span></span></div>
          <div class="block"><b>Tickets:</b> {{user.tickets}}</div>
          <div class="block"><b>Created:</b> {{user.created_at}}</div>
          <div class="block"><b>Referrals:</b> {{user.referrals}}</div>
          <div class="block"><b>Referral Code:</b> {{user.referral_code}}</div>
          <div class="block"><b>Referrer:</b> {{user.referrer}}</div>
          <div class="block"><b>Tasks:</b>
            <div v-for="task in user.tasks" class="block">
              - {{task.key}}: <b>{{task.answer}}</b><br>completed: {{task.created_at}}
            </div>
          </div>
          <div class="block"><b>Telegram Meta:</b> {{user.telegram_meta}}</div>
        </div>
      </div>
      <button class="modal-close is-large" @click="user = null" aria-label="close"></button>
    </div>
    <div class="container">
      <error-modal/>
      <h2 class="subtitle">Whitelisted Users</h2>
      <form @submit.prevent="page = 1; getUsers()">
        <div class="field has-addons">
          <div class="control">
            <input class="input" type="text" placeholder="Search.." v-model="search">
          </div>
          <div class="control">
            <button class="button is-info" type="submit">
              Search
            </button>
          </div>
        </div>
      </form>
      <div v-if="loading" class="has-text-centered subtitle"><progress class="progress is-small is-primary" max="100">Loading</progress></div>
      <div class="table-container">
        <table class="table is-fullwidth is-striped is-hoverable">
          <thead>
          <tr>
            <th>Address</th>
            <th>Email</th>
            <th>Telegram</th>
            <th>Referrer</th>
            <th>Referral Code</th>
            <th>Created</th>
          </tr>
          </thead>
          <tbody>


          <tr v-for="user in users" :key="user.id" @click="getUser(user.id)">
            <td>{{ user.address }}</td>
            <td>{{ user.email }}</td>
            <td><span v-if="user.telegram_meta">{{ user.telegram_meta.first_name }}<span
                v-if="user.telegram_meta.username">(@{{ user.telegram_meta.username }})</span></span></td>
            <td><a @click.prevent.stop="search = user.referrer">{{ user.referrer }}</a></td>
            <td><a @click.prevent.stop="search = user.referral_code">{{ user.referral_code }}</a></td>
            <td>{{ user.created_at }}</td>
          </tr>

          </tbody>
        </table>
      </div>
      <nav class="pagination" role="navigation" aria-label="pagination" v-if="userCount && users">
        <span>{{ (page - 1) * 20 + 1 }}-{{ (page - 1) * 20 + users.length }} of {{userCount}}</span>
        <a class="pagination-previous" :disabled="page == 1" @click="page = page - 1">Previous</a>
        <a class="pagination-next" :disabled="!maxPage || page == maxPage" @click="page = page + 1">Next page</a>
        <ul class="pagination-list">
          <li v-if="page > 2">
            <a class="pagination-link" @click="page = 1">1</a>
          </li>
          <li v-if="page > 3">
            <span class="pagination-ellipsis">&hellip;</span>
          </li>
          <li v-if="page > 1">
            <a class="pagination-link" @click="page = page - 1">{{ page - 1 }}</a>
          </li>
          <li>
            <a class="pagination-link is-current" aria-current="page">{{ page }}</a>
          </li>
          <li v-if="page < maxPage">
            <a class="pagination-link" @click="page = page + 1">{{ page + 1 }}</a>
          </li>
          <li v-if="maxPage > page + 2">
            <span class="pagination-ellipsis">&hellip;</span>
          </li>
          <li v-if="maxPage > page + 1">
            <a class="pagination-link" @click="page = maxPage">{{ maxPage }}</a>
          </li>
        </ul>
      </nav>
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
    loggedIn () {
      return (this.$bsc && this.$bsc.token)
    },
    maxPage () {
      return Math.ceil(this.userCount / 20)
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
      error: null,
      userCount: null,
      users: null,
      user: null,
      page: 1,
      search: ''
    }
  },
  watch: {
    page: function () {
      this.getUsers()
    }
  },

  created () {
    if (!this.loggedIn) {
      this.$bsc.loginModal = true
      this.$router.push({path: "/", query: {redirect: 'admin'}})
    } else {
      this.getUsers()
    }
  },
  methods: {
    async getUser (id) {
      this.loading = true
      try {
        const response = await this.$axios.get(`/admin/user/${id}`)
        this.user = response.data
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
    async getUsers () {
      this.loading = true
      try {
        const response = await this.$axios.get(`/admin/users?page=${this.page}&q=${this.search}`)
        this.users = response.data.users
        this.userCount = response.data.count
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

  }
}
</script>

<style lang="scss" scoped>

</style>
