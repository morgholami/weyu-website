<template>
  <div class="account-action-blocks has-radius is-horizontal-centered">
    <task v-if="selectedTask" :task="selectedTask" @submit-task="selectedTask = null; $emit('submit-task')"/>
    <div class="columns is-variable is-8">
      <div class="is-half column">

        <!-- Refer block -->
        <div class="account-action-block px-6 py-5 has-radius" style="position: relative">
          <h3 class="mb-3 px-2 pt-2 has-text-weight-medium">Refer friends for extra tickets</h3>
          <p>Use your unique link below to refer your friend. You earn <span
              class="has-text-secondary has-text-weight-bold">2x tickets</span> for everyone who registers through your
            link.</p>
          <div class="field has-addons mt-6">
            <div class="control" style="width:100%;">
              <input class="input is-medium copy px-5 py-5" type="text"
                     :value="'https://weyu.io?ref='+user.referral_code" readonly>
            </div>
            <p class="control">
              <a class="button is-accent is-medium copy px-5 py-5" @click="copyToClipboard()">
                Copy link
              </a>
            </p>
          </div>
          <p v-if="copied" class="has-text-success has-text-weight-medium has-text-centered" style="position: absolute; left:0; width:100%">Copied to clipboard!</p>
          <div class="field is-grouped is-flex is-justify-content-center is-flex-wrap-wrap mt-6">
            <div class="control">
              <a target="_blank"
                 :href="'https://twitter.com/intent/tweet?url=https://weyu.io?ref='+user.referral_code+'&text=%F0%9F%9A%A8%24WEYU Whitelist %2B Airdrop is LIVE! Register now for guaranteed airdrop:'">
                <button class="button is-outlined is-link">
                  Share on Twitter
                  <i class="fab fa-twitter"></i>
                </button>
              </a>
            </div>
            <div class="control">
              <a target="_blank"
                 :href="'https://t.me/share/url?url=https://weyu.io?ref='+user.referral_code+'&text=%E2%98%9D%EF%B8%8F %24WEYU Whitelist %2B Airdrop is LIVE! Register now for guaranteed airdrop %E2%98%9D%EF%B8%8F'">
                <button class="button is-outlined is-link">
                  Share on Telegram
                  <i class="fab fa-telegram"></i>
                </button>
              </a>
            </div>
          </div>
<!--          <h2 class="subtitle has-text-black mt-6 pt-6">Your Referrals</h2>-->
<!--          <div v-if="referrals === null">Loading referrals..</div>-->
<!--          <div v-else-if="referrals === 0">No referrals yet..</div>-->
<!--          <div v-else><span class="has-text-weight-bold has-text-secondary">{{ referrals }} People</span> registered-->
<!--            through your referral link-->
<!--          </div>-->
        </div>
      </div>

      <!-- Task block -->
      <div class="is-half column">
        <div class="account-action-block task-block px-5 py-5 has-radius">
          <h3 class="mb-3 pt-2 px-2 has-text-weight-medium">Do a task for extra tickets</h3>
          <p>All tasks will be verified before the $WEYU airdrop is distributed.</p>
          <div class="columns mt-5 is-multiline">
            <div v-if="tasks === null">Loading tasks..</div>
            <div v-else class="column is-one-third" v-for="task in tasks" :key="task.id" v-show="(task.key !== 'airdrops' && task.key !== 'youtube') || task.created_at">
              <div class="task has-radius p-2">
                <img :src="task.tickets > 1 ? require('@/assets/img/tickets.svg') : require('@/assets/img/ticket.svg')"
                     class="my-3" style="height: 53px;"/>
                <p class="has-text-secondary has-text-weight-bold">{{ task.tickets }}x Ticket<span
                    v-if="task.tickets > 1">s</span></p>
                <p style="min-height:35px">{{ task.name }}</p>
                <button v-if="task.created_at" class="button has-text-weight-medium is-success mt-4">
                  Completed
                </button>
                <button @click="selectedTask = task" v-else
                        class="button has-text-weight-medium is-outlined is-secondary is-link mt-4">
                  Submit
                </button>
              </div>
            </div>
            <div class="column is-one-third">
              <div class="task has-radius p-2">
                <img src="~assets/img/tickets.svg" class="my-3" style="height: 53px;"/>
                <p class="has-text-secondary has-text-weight-bold">Earn more Tickets</p>
                <p style="min-height:35px">Come back later for more tasks</p>
                <button class="button has-text-weight-medium mt-4 is-static">
                  Coming soon..
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Task from '@/components/Task'
export default {
  components: {
    Task
  },
  data() {
    return {
      copied: false,
      selectedTask: null
    }
  },
  mounted() {
  },
  props: ['user', 'tasks', 'referrals'],
  methods: {
    copyToClipboard() {
      navigator.clipboard.writeText('https://weyu.io?ref=' + this.user.referral_code).then(() => {
        this.copied = true;
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.account-action-block {
  height: 100%;
  background: linear-gradient(60deg, $secondary-gradient 0%, rgba(255, 255, 255, .7) 33%, rgba(255, 255, 255, .7) 66%, $primary-gradient 100%);
  background-color: #fff;
  color: #000;

  h3 {
    font-size: 1.2rem;
    color: #000;
  }

  p {
    font-size: .8rem;
  }


  button .fab {
    font-size: 1.5rem;
    margin-left: 20px;
  }

  .copy {
    font-size: .9rem;
  }

  input.copy {
    border: 1px solid $secondary;
    background-color: $secondary-light;
  }
}

.task-block {
  .task {
    background-color: #fff;
    height: 100%;

    button {
      width: 100%;
    }

    p {
      font-size: .75rem;
    }
  }
}
</style>
